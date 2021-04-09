import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    UserModule,
    PagesRoutingModule
  ],
  exports: [PagesRoutingModule]
})
export class PagesModule { }