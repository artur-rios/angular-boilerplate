import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'auth', loadChildren: () => import('@app/features/authentication/routes').then((mod) => mod.AUTH_ROUTES) },
  { path: 'home', loadChildren: () => import('@app/features/home/routes').then((mod) => mod.HOME_ROUTES) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
