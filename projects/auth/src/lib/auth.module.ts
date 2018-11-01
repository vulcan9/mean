import {NgModule} from '@angular/core';
import {SharedModule} from 'shared';
// import {RouterModule} from '@angular/router';

import {AuthComponent} from './auth.component';
import { UserComponent } from './user/user.component';

// const routes = [
//     {path: '', component: Page404Component},
//     {path: 'auth', component: AuthComponent},
//     {
//         // ~/user
//         path: 'user',
//         // component: UserComponent,
//         // canActivate: [AuthGuard],
//         children: [
//             {path: '**', component: UserComponent},
//         ]
//     },
// ];

@NgModule({
    imports: [
        // RouterModule.forRoot(routes),
        SharedModule
    ],
    declarations: [
        AuthComponent,
        UserComponent
    ],
    exports: [
        AuthComponent,
        UserComponent,
    ]
})

export class AuthModule {
}
