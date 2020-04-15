import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logar(email: string, senha: string) {
    if (email === 'vitorfgsantos@outlook.com' && senha === '123') {
      return of({
        usuario: {
          nome: 'Vitor',
          sobrenome: 'Farias',
          email: 'vitorfgsantos@outlook.com',
        },
        token: 'aD12h3123523543fgdfg',
      }).pipe(
        delay(2000)
      );
    }

    return timer(3000).pipe(
      mergeMap(() => throwError('Usuário ou senha incorretos.'))
    );
  }
}
