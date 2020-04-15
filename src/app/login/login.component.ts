import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;

  email: string;
  password: string;

  onSubmit(form) {
    if (!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

      if (form.controls.email.invalid) {
        this.emailInput.nativeElement.focus();
        return;
      }

      if (form.controls.password.invalid) {
        this.passwordInput.nativeElement.focus();
        return;
      }

      return;
    }

    console.log('email: ', this.email);
    console.log('password: ', this.password);
  }

  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false;
    }

    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

}
