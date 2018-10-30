import {Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {Page404Component} from '../pages/page404.component';


export const routerOption = {
    // enableTracing: true,
    // onSameUrlNavigation: 'reload'
};

export const routes: Routes = [
    // {path: '', component: UserComponent},
    {
        // ~/user
        path: 'user',
        // component: UserComponent,
        // canActivate: [AuthGuard],
        children: [
            {path: '**', component: UserComponent},
        ]
    },
    {path: '**', component: Page404Component},
];

// https://medium.com/@ozgurgul/angular-6-login-and-router-tutorial-ac5fc5d3027f
// https://www.a-mean-blog.com/ko/blog/Angular-2/%EA%B8%B0%EB%B3%B8%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0/Guard%EB%A1%9C-%EB%B9%84%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%A0%91%EA%B7%BC%EC%A0%9C%ED%95%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0

// http://jasonwatmore.com/post/2018/05/16/angular-6-user-registration-and-login-example-tutorial
// https://stackblitz.com/edit/angular-6-registration-login-example
