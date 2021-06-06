import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsersDataloaderService {
  constructor(private http: HttpClient) {
  }

  public getUserList() {
    return this.http.get<any>('/api/dataset');
  }
}
