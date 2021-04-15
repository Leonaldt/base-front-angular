import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UserModule } from './user/user.module';
import { SignInModule } from './sign-in/sign-in.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignInModule,
    UserModule,
    PagesRoutingModule
  ],
  exports: [PagesRoutingModule]
})
export class PagesModule { }