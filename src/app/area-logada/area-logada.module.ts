import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AreaLogadaRoutingModule } from './area-logada-routing.module';
import { AreaLogadaComponent } from './area-logada.component';


@NgModule({
  declarations: [AreaLogadaComponent],
  imports: [
    CommonModule,
    AreaLogadaRoutingModule,
    SharedModule
  ]
})
export class AreaLogadaModule { }
