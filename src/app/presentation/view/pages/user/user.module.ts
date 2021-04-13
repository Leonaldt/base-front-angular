import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
    declarations: [
        UserFormComponent,
        UserListComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports: [
        UserFormComponent,
        UserListComponent
    ]
})
export class UserModule { }