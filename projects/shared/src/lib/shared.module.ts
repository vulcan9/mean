import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { PageEmptyComponent } from './pages/page-empty.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';

@NgModule({
  imports: [
      CommonModule
  ],
  declarations: [
      PageEmptyComponent, PageNotFoundComponent
  ],
  exports: [
      // CommonModule,
      PageEmptyComponent, PageNotFoundComponent
  ]
})

export class SharedModule { }
