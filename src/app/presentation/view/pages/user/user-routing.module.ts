import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

import { UserFormComponent } from './user-form/user-form.component';
import { RouteService } from '../route.service';

const routes: Routes = [
    RouteService.withShell([
        { path: '', redirectTo: '/users', pathMatch: 'full' },
        {
            path: 'users',
            component: UserListComponent,
            data: { title: 'Users' }
        },
        {
            path: 'users/new',
            component: UserFormComponent,
            data: { title: 'New User' }
        },
        {
            path: 'users/edit/:id',
            component: UserFormComponent,
            data: { title: 'Update User' }
        }
    ])
    // {
    //     path: '',
    //     component: UserListComponent,
    //     data: { title: 'Users' }
    // },
    // {
    //     path: 'new',
    //     component: UserFormComponent,
    //     data: { title: 'New User' }
    // },
    // {
    //     path: 'edit/:id',
    //     component: UserFormComponent,
    //     data: { title: 'Update User' }
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }