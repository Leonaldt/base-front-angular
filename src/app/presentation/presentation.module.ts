import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@angular/flex-layout';
import { ExternalModule } from '../external/external.module';
import { MaterialModule } from '../material.module';
import { ViewModule } from './view/view.module';

import { RegisterUser } from '../core/usecases/ports/register-user';
import { UserControllerService } from './controllers/user/user-controller.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MaterialModule,
        CoreModule,
        ExternalModule,
        ViewModule
    ],
    exports: [ViewModule],
    providers: [
        { provide: RegisterUser, useClass: UserControllerService }
    ]
})
export class PresentationModule { }