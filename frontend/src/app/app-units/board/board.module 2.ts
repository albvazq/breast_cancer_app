import {NgModule} from '@angular/core';
import {IncCommonModule} from '../../core/common/inc-common.module';
import {BoardComponent} from "@app-units/board/board.component";

@NgModule({
  declarations: [
    BoardComponent
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
