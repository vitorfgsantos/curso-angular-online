import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalharContatoComponent } from './detalhar-contato/detalhar-contato.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';


const routes: Routes = [{
  path: '',
  component: ListarContatosComponent,
}, {
  path: 'novo',
  component: EditarContatoComponent,
}, {
  path: ':id',
  component: DetalharContatoComponent,
}, {
  path: ':id/editar',
  component: EditarContatoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
