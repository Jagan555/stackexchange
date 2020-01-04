import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    ViewsComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ],
})
export class ViewsModule { }
