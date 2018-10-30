import {NgModule} from '@angular/core';
import {UserComponent} from './user/user.component';

@NgModule({
    imports: [],
    declarations: [
        UserComponent
    ],
    exports: [UserComponent]
})
export class SharedModule {
}
