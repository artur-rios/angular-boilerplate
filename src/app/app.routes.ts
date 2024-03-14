import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadChildren: () => import('@app/features/home/routes').then((mod) => mod.HOME_ROUTES) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
