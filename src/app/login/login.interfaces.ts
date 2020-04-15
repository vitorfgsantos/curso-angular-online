import { Usuario } from '../shared/interfaces/usuario.interface';

export interface LoginResponse {
  usuario: Usuario;
  token: string;
}
