import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-contador',
  templateUrl: './exercicio-contador.component.html',
  styleUrls: ['./exercicio-contador.component.scss']
})
export class ExercicioContadorComponent {

  @Input() valor = 0;
  @Output() valorChange = new EventEmitter();

  incrementar() {
    this.valor = this.valor + 1;
    this.valorChange.emit(this.valor);
  }

  decrementar() {
    this.valor = this.valor - 1;
    this.valorChange.emit(this.valor);
  }

}
