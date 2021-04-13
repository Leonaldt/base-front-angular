import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteService } from './route.service';

const routes: Routes = [
    { path: '**', redirectTo: '/users', pathMatch: 'full' },
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    // {
    //     path: '**',
    //     redirectTo: 'login',
    //     pathMatch: 'full'
    // },
    // RouteService.withShell([
    // {
    //     path: 'users',
    //     loadChildren: './user/user.module#UserModule'
    // }
    // ])
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }