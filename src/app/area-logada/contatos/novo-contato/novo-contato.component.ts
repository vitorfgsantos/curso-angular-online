import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.scss']
})
export class NovoContatoComponent implements OnInit {

  contatoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contatosService: ContatosService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      ag: ['', [Validators.required, Validators.minLength(4)]],
      cc: ['', [Validators.required, Validators.minLength(5)]],
      banco: ['', Validators.required],
    });
  }

  exibeErro(nomeControle: string) {
    if (!this.contatoForm.get(nomeControle)) {
      return false;
    }

    return this.contatoForm.get(nomeControle).invalid && this.contatoForm.get(nomeControle).touched;
  }

  validateAllFormFields() {
    Object.keys(this.contatoForm.controls).forEach(field => {
      const control = this.contatoForm.get(field);
      control.markAsTouched();
    });
  }

  onSubmit() {
    if (this.contatoForm.invalid) {
      this.validateAllFormFields();
      return;
    }

    this.salvarContato();
  }

  salvarContato() {
    this.contatosService.createContato(this.contatoForm.value)
      .subscribe(
        response => this.onSuccessSalvarContato(),
        error => this.onErrorSalvarContato(),
      );
  }

  onSuccessSalvarContato() {
    this.toastr.success('Sucesso!', 'Contato criado com sucesso.');
    this.router.navigate(['contatos']);
  }

  onErrorSalvarContato() {
    this.toastr.error('Erro!', 'Alguma coisa deu errado.');
  }

}
