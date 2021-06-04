import {NgModule} from '@angular/core';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {IncCommonModule} from '../../common/inc-common.module';
import {MatDialogModule} from '@angular/material/dialog';
import {UsersModule} from '@app-units/users/users.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    IncCommonModule,
    MatDialogModule,
    UsersModule
  ],
  exports: [
    DashboardComponent,
    IncCommonModule
  ],
})
export class DashboardModule {
}
