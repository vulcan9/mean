import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/user.component';
import {RouterModule} from '@angular/router';
import {routerOption, routes} from './user/user.routes';
import {Page404Component} from './pages/page404.component';
import {PageHomeComponent} from './pages/page-home.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        UserComponent,
        PageHomeComponent,
        Page404Component
    ],
    exports: [
        RouterModule
    ]
})
export class SharedModule {
}
