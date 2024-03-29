import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CORE_ROUTES } from '@app/core/constants';


@NgModule({
  imports: [
    RouterModule.forRoot(CORE_ROUTES, { relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
