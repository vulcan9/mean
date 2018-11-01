import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';

const routes = [
    {path: 'auth', component: AuthComponent},
    {
        // ~/user
        path: 'user',
        // component: UserComponent,
        // canActivate: [AuthGuard],
        children: [
            {path: '**', component: UserComponent},
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AuthComponent,
        UserComponent
    ],
    exports: [AuthComponent]
})
export class AuthModule {
}
