import {Routes} from '@angular/router';
import {UserComponent} from '../../../shared/src/lib/user/user.component';


export const routes: Routes = [
    {
        // ~/user
        path: 'user',
        component: UserComponent
    }
];
