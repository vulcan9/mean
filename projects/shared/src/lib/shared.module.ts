import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { Page404Component } from './pages/page404.component';

@NgModule({
  imports: [
      CommonModule
  ],
  declarations: [Page404Component],
  exports: [
      // CommonModule,
      Page404Component
  ]
})

export class SharedModule { }
