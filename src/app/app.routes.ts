import { Routes } from '@angular/router';
import { GridBasicPage } from './pages/grid-basic/grid-basic.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'grid-basic',
    loadComponent: () => import('./pages/grid-basic/grid-basic.page').then(m => m.GridBasicPage)
  },
  { path: '', component: GridBasicPage },
];
