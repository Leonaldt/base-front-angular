
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseModule } from './base/base.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BaseModule,
        PagesModule,
    ],
    exports: [PagesModule]
})
export class ViewModule { }