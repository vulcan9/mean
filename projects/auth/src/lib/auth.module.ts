import {NgModule} from '@angular/core';
import {SharedModule} from 'shared';

import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';

import {AuthComponent} from './auth.component';
import { UserComponent } from './user/user.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AuthRoutingModule
    ],
    declarations: [
        AuthComponent,
        UserComponent
    ],
    exports: [
        AuthRoutingModule,
        AuthComponent,
        UserComponent,
    ]
})

export class AuthModule {
}
