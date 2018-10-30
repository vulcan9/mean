import {NgModule} from '@angular/core';
import {SharedComponent} from './shared.component';
import {UserComponent} from './user/user.component';

@NgModule({
    imports: [],
    declarations: [
        SharedComponent, UserComponent
    ],
    exports: [SharedComponent]
})
export class SharedModule {
}
