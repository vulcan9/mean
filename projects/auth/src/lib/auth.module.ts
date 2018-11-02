import {NgModule} from '@angular/core';
import {SharedModule} from 'shared';

import {AuthComponent} from './auth.component';
import { UserComponent } from './user/user.component';

@NgModule({
    imports: [
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
