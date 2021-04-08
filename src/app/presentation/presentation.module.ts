import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@angular/flex-layout';
import { DataModule } from '../external/data.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        CoreModule,
        DataModule,
        PagesModule    ],
    // exports: [ViewModule],
    // providers: [
    //     { provide: IUserController, useClass: UserControllerService }
    // ]
})
export class PresentationModule { }