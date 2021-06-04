import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './core/units/auth/components/login/login.component';
import {DashboardComponent} from './core/units/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./core/units/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
