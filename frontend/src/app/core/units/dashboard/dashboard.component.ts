import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  private collapsed = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  collapse() {
    this.collapsed = !this.collapsed;
  }

}
