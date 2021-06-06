import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DashboardService} from "../../core/services/dashboard.service";
import {APIService} from "../../services/api.service";
import {BehaviorSubject} from "rxjs";
@Component({
  selector: 'app-evaluator',
  templateUrl: './evaluator.component.html',
  styleUrls: ['./evaluator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EvaluatorComponent implements OnInit {

  public params = new BehaviorSubject([]);
  public values = [];
  public textParams = '';

  constructor(ds: DashboardService, private api: APIService) {
    ds.title.next('Evaluador')
  }

  ngOnInit(): void {
    this.api.getParamsList().subscribe(response => {
      this.params.next(response.list);
      response.list.forEach(i => {
        this.values.push(i.min)
      });
    });
  }

  openModal() {

  }

  evaluate() {
    this.api.predict(this.values).subscribe(r => {
      console.log(r)
      alert(`El resultado de cancer en la muesta es: ${(r.prediction == 1) ? 'positivo' : 'negativo'}`)
    })
  }

  parseParams() {
    const pArray = this.textParams.split(',');
    if (pArray.length == this.values.length) {
      pArray.forEach((v, i) => this.values[i] = parseFloat(v));
    }
  }

}
