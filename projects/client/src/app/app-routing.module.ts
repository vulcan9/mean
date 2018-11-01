import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent, UserComponent} from 'auth';

const routerOption = {
    // enableTracing: true,
    // onSameUrlNavigation: 'reload'
};


const routes: Routes = [
    // {path: 'auth', component: AuthComponent},
    // {
    //     // ~/user
    //     path: 'user',
    //     // component: UserComponent,
    //     // canActivate: [AuthGuard],
    //     children: [
    //         {path: '**', component: UserComponent},
    //     ]
    // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOption)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
