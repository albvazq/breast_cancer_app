import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  private collapsed = false;
  public title = '';

  constructor(ds: DashboardService) {
    ds.title.subscribe(t => this.title = t)
  }

  ngOnInit(): void {
  }

  collapse() {
    this.collapsed = !this.collapsed;
  }

}
