import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@angular/flex-layout';
import { ExternalModule } from '../external/external.module';
import { MaterialModule } from '../material.module';
import { ViewModule } from './view/view.module';

import { UserRepository } from '../core/usecases/ports/user-repository';
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
        { provide: UserRepository, useClass: UserControllerService }
    ]
})
export class PresentationModule { }