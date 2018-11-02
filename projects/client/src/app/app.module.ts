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
    // routing든 모듈 로드 순서에 따라 달라짐
    imports: [
        BrowserModule,
        SharedModule,
        AuthModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
