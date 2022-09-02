import { Routes } from '@angular/router';
import { MainContainerComponent } from '../pages/main-container.component';


export enum MAIN_ROUTE_NAMES {
  BLANK = ''
}

export const MAIN_ROUTES: Routes = [
  {
    path: MAIN_ROUTE_NAMES.BLANK,
    component: MainContainerComponent
  }
];
