import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado/nao-esta-logado.guard';

const routes: Routes = [{
  path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  canActivate: [EstaLogadoGuard],
}, {
  path: 'extrato',
  loadChildren: () => import('./extrato/extrato.module').then(m => m.ExtratoModule),
  component: ExtratoComponent,
  canActivate: [EstaLogadoGuard],
}, {
  path: 'contatos',
  loadChildren: () => import('./contatos/contatos.module').then(m => m.ContatosModule),
  canActivate: [EstaLogadoGuard],
}, {
  path: 'login',
  component: LoginComponent,
  canActivate: [NaoEstaLogadoGuard],
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
