import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/core/entities/ports/user-data';
import { RegisterUser } from 'src/app/core/usecases/ports/register-user';
import { AuthService } from 'src/app/external/auth/auth.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private usuarioController: RegisterUser,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get usuario(): UserData {
    return this.authService.credentials;
  }

  logout() {
    this.responseLogout();
    // this.usuarioController.logout()
    //   .subscribe(() => this.responseLogout());
  }

  responseLogout() {
    this.authService.credentials = null;
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
