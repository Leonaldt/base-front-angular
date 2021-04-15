import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInGuard } from 'src/app/external/auth/sign-in.guard';

import { SignInComponent } from './sign-in.component';

const routes: Routes = [
  {
    path: 'login',
    component: SignInComponent,
    canActivate: [SignInGuard],
    data: { title: 'Login' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }