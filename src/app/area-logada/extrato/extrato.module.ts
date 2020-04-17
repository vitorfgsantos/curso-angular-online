import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExtratoRoutingModule } from './extrato-routing.module';
import { ExtratoComponent } from './extrato.component';


@NgModule({
  declarations: [
    ExtratoComponent,
  ],
  imports: [
    CommonModule,
    ExtratoRoutingModule
  ]
})
export class ExtratoModule { }
