import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {AuthComponent} from './auth.component';
import {UserComponent} from './user/user.component';

// https://stackblitz.com/angular/nnyjopealdn?file=src%2Fapp%2Fheroes%2Fhero-detail%2Fhero-detail.component.ts
const routes: Routes = [
    {path: 'auth', component: AuthComponent},

    {
        path: 'user', component: UserComponent,
        // canActivate: [AuthGuard]
        children: [
            {
                path: '', component: UserComponent,
                children: [
                    {path: ':id', component: UserComponent},
                    {path: '', component: UserComponent}
                ]
            }
        ]
    },
    // {path: 'user/:id', component: UserComponent, data: {title: 'User List'}},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
