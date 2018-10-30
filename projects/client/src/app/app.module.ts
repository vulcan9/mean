import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../shared/src/lib/shared.module';

import {routes} from './app.routes';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
