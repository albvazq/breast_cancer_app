import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private r: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  login() {
    this.http.post('/api/auth/local', {
      identifier: this.username,
      password: this.password,
    }).subscribe((response) => {
      console.log(response);
    });
    // this.r.navigateByUrl('dashboard');
  }
}
