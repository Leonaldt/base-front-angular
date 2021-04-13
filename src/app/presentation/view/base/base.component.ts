import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/core/entities/ports/user-data';
import { UserRepository } from 'src/app/core/usecases/ports/user-repository';
import { AuthService } from 'src/app/external/auth/auth.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  readonly nameProject: string = 'Base Front-end Angular with Clean Architecture'

  constructor(
    private authService: AuthService,
    private userController: UserRepository,
    private router: Router
  ) { }

  ngOnInit(): void { }

  get user(): UserData {
    return this.authService.credentials;
  }

  logout() {
    this.userController.logout()
      .subscribe(() => {
        this.authService.credentials = null;
        this.router.navigateByUrl('/login', { replaceUrl: true });
      });
  }
}
