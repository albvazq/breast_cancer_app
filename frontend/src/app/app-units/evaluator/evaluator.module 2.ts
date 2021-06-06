import {NgModule} from '@angular/core';
import {IncCommonModule} from '../../core/common/inc-common.module';
import {EvaluatorComponent} from '@app-units/evaluator/evaluator.component';

@NgModule({
  declarations: [
    EvaluatorComponent
  ],
  imports: [
    IncCommonModule
  ],
  exports: [
  ],
  providers: [
  ]
})
export class UsersModule {
}
