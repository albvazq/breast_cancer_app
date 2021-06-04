import {NgModule} from '@angular/core';
import {UsersComponent} from '@app-units/users/users.component';
import {UserFormComponent} from '@app-units/users/modals/user-form/user-form.component';
import {IncCommonModule} from '../../core/common/inc-common.module';
import {UsersDataloaderService} from '@app-units/users/users-dataloader.service';

@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent
  ],
  imports: [
    IncCommonModule
  ],
  exports: [
    UsersComponent,
    UserFormComponent
  ],
  providers: [
    UsersDataloaderService
  ]
})
export class UsersModule {
}
