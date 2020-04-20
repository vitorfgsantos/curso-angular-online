import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';

import { Contato } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.scss']
})
export class EditarContatoComponent implements OnInit {

  idContato: string;
  contatoForm: FormGroup;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private contatosService: ContatosService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.inicializarFormulario();

    this.idContato = this.route.snapshot.paramMap.get('id');
    if (this.estaEditando()) {
      this.carregarContato();
    }
  }

  estaEditando = () => Boolean(this.idContato);

  inicializarFormulario() {
    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      ag: ['', [Validators.required, Validators.minLength(4)]],
      cc: ['', [Validators.required, Validators.minLength(5)]],
      banco: ['', Validators.required],
    });
  }

  carregarContato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    const idContato = this.route.snapshot.paramMap.get('id');
    this.contatosService.getContato(idContato)
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSuccessCarregarContato(response),
        error => this.onErrorCarregarContato(error),
      );
  }

  onSuccessCarregarContato(response: Contato) {
    this.contatoForm.patchValue(response);
  }

  onErrorCarregarContato(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
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

    if (this.estaEditando()) {
      this.salvarContato();
      return;
    }

    this.criarContato();
  }

  salvarContato() {
    this.contatosService.updateContato(this.idContato, this.contatoForm.value)
      .subscribe(
        response => this.onSuccessSalvarContato(),
        error => this.onError(),
      );
  }

  onSuccessSalvarContato() {
    this.toastr.success('Sucesso!', 'Contato editado com sucesso.');
    this.router.navigate(['contatos']);
  }

  criarContato() {
    this.contatosService.createContato(this.contatoForm.value)
      .subscribe(
        response => this.onSuccessCriarContato(),
        error => this.onError(),
      );
  }

  onSuccessCriarContato() {
    this.toastr.success('Sucesso!', 'Contato criado com sucesso.');
    this.router.navigate(['contatos']);
  }

  onError() {
    this.toastr.error('Erro!', 'Alguma coisa deu errado.');
  }

}
