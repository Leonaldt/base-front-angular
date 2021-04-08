import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from '../core/usecases/ports/user-repository';
import { UserWebRepository } from '../external/repository/user/user-web-repository';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        { provide: UserRepository, useClass: UserWebRepository }
    ],
})
export class DataModule { }