import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalharContatoComponent } from './detalhar-contato/detalhar-contato.component';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';


const routes: Routes = [{
  path: '',
  component: ListarContatosComponent,
}, {
  path: 'novo',
  component: NovoContatoComponent,
}, {
  path: ':id',
  component: DetalharContatoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
