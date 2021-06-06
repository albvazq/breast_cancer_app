import {NgModule} from '@angular/core';
import {IncCommonModule} from '../../core/common/inc-common.module';
import {EvaluatorComponent} from '@app-units/evaluator/evaluator.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    EvaluatorComponent
  ],
    imports: [
        IncCommonModule,
        CommonModule,
      FormsModule,
    ],
  exports: [
      EvaluatorComponent
  ],
  providers: [
  ]
})

export class EvaluatorModule {
}
