import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ExternalModule } from './external/external.module';
import { PresentationModule } from './presentation/presentation.module';
import { RouterModule } from '@angular/router';
import { UserWebRepository } from './external/repository/user/user-web-repository';
import { UserRepository } from './core/usecases/ports/user-repository';
import { HttpInterceptorService } from './external/http/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    // Application imports
    // CoreModule,
    // DomainModule,
    ExternalModule,
    // InfraModule,
    PresentationModule
  ],
  providers: [
    { provide: UserRepository, useClass: UserWebRepository },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
