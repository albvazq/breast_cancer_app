import {NgModule} from '@angular/core';
import {ContentComponent} from '../components/content/content.component';
import {TableComponent} from '../components/table/table.component';
import {ModalComponent} from '../components/modal/modal.component';

@NgModule({
  declarations: [
    ContentComponent,
    TableComponent,
    ModalComponent
  ],
  imports: [],
  exports: [
    ContentComponent,
    TableComponent,
    ModalComponent
  ],
})
export class IncCommonModule {
}
