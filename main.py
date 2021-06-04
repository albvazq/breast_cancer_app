from __future__ import absolute_import, division, print_function, unicode_literals
from keras.models import Sequential
from keras.layers import Dense
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
from os import path
from tensorflow import keras
from flask import Flask, request, jsonify, Response, send_from_directory

import pandas as pd
import tensorflow as tf

tf.keras.backend.clear_session()  # Para restablecer fácilmente el estado del portátil.

class MyCustomCallback(tf.keras.callbacks.Callback):
    def on_epoch_end(self, epoch, logs=None):
        print('La perdida promedio para la epoch {}.'.format(epoch))


def makeDataSet(path, log = False):
    dataset = pd.read_csv(path)
    if log:
        # Imprimiento las dimensiones del dataset (filas, columnas)=(registros, variables)
        print(dataset.values.shape)
        # Imprimir el primer registro del dataset
        dataset.head(1)
        dataset.info()
    dataset.drop_duplicates(inplace=True)
    return dataset

def makeModel(dataset, X, Y):
    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=4)
    model = Sequential()
    model.add(Dense(35, input_dim=30, activation='relu'))
    model.add(Dense(30, activation='relu'))
    model.add(Dense(1, activation='sigmoid'))
    model.compile(
        optimizer='adam',
        loss='binary_crossentropy',
        metrics=['accuracy']
    )
    """### Entrenamiento del modelo"""
    hist = model.fit(
        X_train, Y_train, validation_data=(X_test, Y_test), batch_size=100, epochs=1000, validation_split=0.2,
        verbose=0, callbacks=[MyCustomCallback()]
    )
    print('model created')
    return model

app = Flask(__name__)

database = makeDataSet('https://docs.google.com/uc?id=10BhrkpLE_cNNfDJ9R59hqYK-KTQZpItM&export=download')
dataset = makeDataSet('https://docs.google.com/uc?id=10BhrkpLE_cNNfDJ9R59hqYK-KTQZpItM&export=download')
dataset.drop('country',axis='columns')

X = dataset.values[:, 1:31]
Y = dataset.values[:, 0]
model = {}
if path.isfile('model.h5'):
    model = keras.models.load_model('model.h5')
else:
    model = makeModel(dataset, X, Y)
    model.save('model.h5')

@app.route('/')
def root():
  return send_from_directory('./public', 'index.html')

@app.route('/<path:path>')
def static_proxy(path):
  return send_from_directory('./public', 'index.html')

@app.route('/assets/<path:path>')
def asset_proxy(path):
  return send_from_directory('./public/assets', path)
@app.route('/css/<path:path>')
def css_proxy(path):
  return send_from_directory('./public/css', path)
@app.route('/js/<path:path>')
def js_proxy(path):
  return send_from_directory('./public/js', path)

@app.route("/api/classification_report")
def classification_report_view():
    X_test1, X_test2, Y_test1, Y_test2 = train_test_split(X, Y, test_size=0.1, random_state=4)
    pred = model.predict(X_test1)
    pred = [1 if y >= 0.5 else 0 for y in pred]  # Threshold
    print(classification_report(Y_test1, pred))
    return classification_report(Y_test1, pred, output_dict=True)

@app.route("/api/country")
def get_country():
    return jsonify([
        'Estados Unidos',
        'Mexico',
        'Canada'
    ])

@app.route("/api/dataset")
def get_dataset(country = None):
    argsNumber = len(request.args)
    if argsNumber == 0:
        return Response(database.to_json(orient='records'), mimetype='application/json')
    else:
        query = request.args.get('query')
        if query is None:
            return jsonify({"error": 'No query provided.'}), 500
        else:
            return Response(database.query(query).to_json(orient='records'), mimetype='application/json')

@app.route("/api/predict", methods=['GET', 'POST'])
def predict_view():
    if request.method == 'GET':
        X_test1, X_test2, Y_test1, Y_test2 = train_test_split(X, Y, test_size=0.1, random_state=4)
        pred = model.predict(X_test1)
        pred = [1 if y >= 0.5 else 0 for y in pred]  # Threshold
    else:
        data = request.get_json()
        pred = model.predict([data])
        pred = [1 if y >= 0.5 else 0 for y in pred]  # Threshold
    return {'prediction': pred[0]}

if __name__ == '__main__':
  # This is used when running locally only. When deploying use a webserver process
  # such as Gunicorn to serve the app.
  app.run(host='127.0.0.1', port=5000, debug=True)