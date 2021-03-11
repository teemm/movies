import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DetailsRoutingModule} from './details-routing.module';
import {MainComponent} from './main/main.component';
import {SharedModule} from "../../shared/shared.module";
import {DragScrollModule} from 'ngx-drag-scroll';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule,
    DragScrollModule
  ]
})
export class DetailsModule {
}
