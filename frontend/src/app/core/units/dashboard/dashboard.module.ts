import {NgModule} from '@angular/core';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {IncCommonModule} from '../../common/inc-common.module';
import {MatDialogModule} from '@angular/material/dialog';
import {UsersModule} from '@app-units/users/users.module';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {EvaluatorModule} from "@app-units/evaluator/evaluator.module";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    IncCommonModule,
    MatDialogModule,
    UsersModule,
    CommonModule,
      FormsModule,
      EvaluatorModule
  ],
  exports: [
    DashboardComponent,
    IncCommonModule
  ],
})
export class DashboardModule {
}

