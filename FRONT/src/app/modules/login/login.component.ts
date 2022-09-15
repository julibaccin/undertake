import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SnackService } from 'src/app/services/snack.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  formLogin: FormGroup;
  buttonText: string;
  footer: string;
  isLogin: boolean = true;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _snackService: SnackService,
  ) {
    this.isLogin = this._router.url.includes("login") ? true : false;
    this.buttonText =  this._router.url.includes("login") ? "Iniciar Sesión" : "Registrarse";
    this.footer =  this._router.url.includes("login") ? "Registrarse" : "¿Ya tienes una cuenta?";
   
    this.formLogin = this._formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordConfirm: ['', []],
      userConfirm: ['', []],
    });

  }

  handleButtonType(){
    if (this.isLogin){
      this._router.navigate(["register"]);
    }else{
      this._router.navigate(["login"]);
    }
  }

  handleClick() {
    if (this.buttonText == 'Iniciar Sesión') {
      this.login();
    } else {
      this.register();
    }
  }

  login() {
    if (this.formLogin.invalid) {
      this._snackService.presentError('Email Invalido O Contraseña Invalidos');
      return;
    }

    let { user, password } = this.formLogin.value;

    this._authService.login({ user, password }).subscribe(
      (res) => {
        if (res.error) {
          this._snackService.presentError(res.error);
          return;
        }

        this._authService.token = res.data.token;

        this._router.navigate(['panel', 'clients']);
      },
      (err) => {
        this._snackService.presentError(err);
      }
    );
  }

  register() {
    if (this.formLogin.invalid) {
      this._snackService.presentError('Email Invalido O Contraseña Invalidos');
      return;
    }

    let { user, password, passwordConfirm, userConfirm } = this.formLogin.value;

    if (password != passwordConfirm || user != userConfirm) {
      this._snackService.presentError('Los datos no coinciden');
      return;
    }

    this._authService.register({ user, password }).subscribe((res) => {
      if (res.error) {
        this._snackService.presentError(res.error);
        return;
      }

      this._authService.token = res.data.token;

      this._router.navigate(['panel', 'clients']);
      return;
    },
    (err) => {
      this._snackService.presentError(err);
    });
  }
}
