import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../shared/interfaces/usuario.interface';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.usuario = this.authService.getUsuario();
  }

}

