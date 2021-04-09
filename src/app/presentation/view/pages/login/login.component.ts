import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { UserData } from 'src/app/core/entities/ports/user-data';
import { AuthService } from 'src/app/external/auth/auth.service';
import { RegisterUser } from '../../../../core/usecases/ports/register-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    // private notification: NotificationService,
    private usuarioController: RegisterUser
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.isLoading = true;

    this.usuarioController
      .login(this.form.value)
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe(
        (usuario: UserData) => this.loginResponse(usuario),
        (err: any[]) => console.log(err)
        // (err: ValidationError[]) => this.notification.open(err)
      );

  }

  loginResponse(usuario: UserData) {
    if (usuario) {
      this.authService.credentials = usuario;
      this.router.navigateByUrl('/home');
    } else {
      this.snackBar.open('Usuário ou senha inválidos.', null, {
        duration: 2000
      });
    }
  }
}
