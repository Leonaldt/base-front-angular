import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserModule,
    PagesRoutingModule
  ],
  exports: [
    PagesRoutingModule
  ]
})
export class PagesModule { }