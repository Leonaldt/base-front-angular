import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class BaseModule { }
