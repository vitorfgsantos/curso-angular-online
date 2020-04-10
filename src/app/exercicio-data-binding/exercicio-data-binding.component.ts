import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Input() palavra: string;
  @Input() color: string;
  @Output() clicado = new EventEmitter();

  imageURL = 'https://3.bp.blogspot.com/_lPCKmqNhqr0/TCMMGbVg2oI/AAAAAAAABLQ/HHgh5Gjbot0/s1600/gatinho-filhote-fofo.jpg';
  initialValue = 'Valor inicial';
  isDisabled = true;
  accessibilityText = 'Um texto acessível';

  valorDoInput = '';

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled);
    }, 3000);
  }

  ngOnInit(): void {
  }

  getImageURL() {
    return this.imageURL;
  }

  onClick($event) {
    console.log('clicou!', $event);
  }

  digitouAlgo($event) {
    this.valorDoInput = $event.target.value;
    console.log($event);
  }

  passouMouse() {
    console.log('alguem passou mouse');
  }

  onClickBotaoEmissor($event) {
    console.log('Devo emitir informações para o componente pai.');
    this.clicado.emit('Fui clicado!!!!');
  }

  onValorAtualizadoNoContador(novoValor) {
    console.log('onValorAtualizadoNoContador: ', novoValor);
  }

}
