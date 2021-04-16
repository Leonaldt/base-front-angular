import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/core/entities/ports/user-data';
import { AuthService } from 'src/app/external/auth/auth.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  nameProject: string = 'Base Front-end Angular with Clean Architecture'

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  get user(): UserData {
    return this.authService.credentials;
  }

  logout() {
    this.authService.credentials = null;
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
