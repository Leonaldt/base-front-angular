import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserUseCase } from './usecases/register-user/register-user';
import { RegisterUser } from './usecases/ports/register-user';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        { provide: RegisterUser, useClass: RegisterUserUseCase }
    ]
})
export class CoreModule { }