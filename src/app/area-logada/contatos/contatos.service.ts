import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Contato } from './contatos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  API_URL = environment.API_URL;

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: '..... TOKEN DE AUTENTICAÇÃO ....'
    })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getContatos() {
    return this.http.get<Contato[]>(this.API_URL + '/contatos');
  }

  getContato(id: string) {
    return this.http.get<Contato>(this.API_URL + '/contatos/' + id, this.httpOptions);
  }

  createContato(contato: Contato) {
    return this.http.post<Contato[]>(this.API_URL + '/contatos', contato, this.httpOptions);
  }

  updateContato(id: string, contato: Contato) {
    return this.http.put<Contato[]>(this.API_URL + '/contatos' + id, contato, this.httpOptions);
  }

  deleteContato(id: string) {
    return this.http.delete<Contato>(this.API_URL + '/contatos/' + id, this.httpOptions);
  }

}
