import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IncCommonModule} from './core/common/inc-common.module';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardModule} from './core/units/dashboard/dashboard.module';
import {AuthModule} from './core/units/auth/auth.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    IncCommonModule,
    DashboardModule,
    AuthModule,
    HttpClientModule
  ],
  exports: [
    IncCommonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
