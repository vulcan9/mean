import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthComponent, UserComponent} from 'auth';
import {Page404Component} from 'shared';

const routerOption = {
    // enableTracing: true,
    // onSameUrlNavigation: 'reload'
};

const routes: Routes = [
    {
        path: '',
        // redirectTo: '/user', pathMatch: 'full',
        // component: Page404Component
        children: [
            {path: '**', component: UserComponent},
        ]
    },

    {path: 'auth', component: AuthComponent},

    {
        // ~/user
        path: 'user',
        // component: UserComponent,
        // canActivate: [AuthGuard],
        children: [
            { path: ':id', component: UserComponent },
            {path: '**', component: UserComponent},
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOption)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
