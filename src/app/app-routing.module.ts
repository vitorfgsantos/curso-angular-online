import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './contatos/contatos.component';
import { DetalhesContatoComponent } from './contatos/detalhes-contato/detalhes-contato.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado/nao-esta-logado.guard';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  canActivate: [EstaLogadoGuard],
}, {
  path: 'login',
  component: LoginComponent,
  canActivate: [NaoEstaLogadoGuard],
}, {
  path: 'extrato',
  component: ExtratoComponent,
  canActivate: [EstaLogadoGuard],
}, {
  path: 'contatos',
  component: ContatosComponent,
  canActivate: [EstaLogadoGuard],
}, {
  path: 'contatos/:id',
  component: DetalhesContatoComponent,
  canActivate: [EstaLogadoGuard],
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}, {
  path: '**',
  component: NaoEncontradoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
