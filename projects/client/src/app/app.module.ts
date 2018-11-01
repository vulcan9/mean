import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from 'auth';
import {SharedModule} from 'shared';

import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule, AuthModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
