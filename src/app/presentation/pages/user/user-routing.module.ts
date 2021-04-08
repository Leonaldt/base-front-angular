import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

const routes: Routes = [
    // RouteService.withShell([
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    {
        path: 'users',
        component: UserComponent,
        data: {
            title: 'Users'
        }
    }
    // ])
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }