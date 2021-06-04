import {Injectable} from '@angular/core';

@Injectable()
export class UsersDataloaderService {
  constructor() {
  }

  public getUserList() {
    return [
      {
        firstName: 'Sergio',
        lasttName: 'Vazquez',
        role: 'administrator'
      },
      {
        firstName: 'Sergio',
        lasttName: 'Vazquez',
        role: 'administrator'
      },
      {
        firstName: 'Sergio',
        lasttName: 'Vazquez',
        role: 'administrator'
      },
      {
        firstName: 'Sergio',
        lasttName: 'Vazquez',
        role: 'administrator'
      },
      {
        firstName: 'Sergio',
        lasttName: 'Vazquez',
        role: 'administrator'
      }
    ];
  }
}
