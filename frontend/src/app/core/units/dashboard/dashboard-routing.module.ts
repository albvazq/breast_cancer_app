import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardComponent} from "@app-units/board/board.component";
import {EvaluatorComponent} from "@app-units/evaluator/evaluator.component";


const routes: Routes = [
  {
    path: '',
    component: BoardComponent
  },
  {
    path: 'board',
    component: BoardComponent
  },
  {
    path: 'evaluator',
    component: EvaluatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
