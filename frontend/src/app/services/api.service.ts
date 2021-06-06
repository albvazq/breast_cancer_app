import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class APIService {

    constructor(private http: HttpClient) {
    }

    public getDataSet(query?) {
        return this.http.get<any>(`/api/dataset${query ? '?query='+query : ''}`);
    }

    public getParamsList(query?) {
        return this.http.get<any>(`/api/params`);
    }

    public predict(values) {
        return this.http.post<any>(`/api/predict`, values);
    }
}
