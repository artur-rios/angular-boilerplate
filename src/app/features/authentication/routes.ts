import { Routes } from '@angular/router';
import { LoginComponent } from '@app/features/authentication/pages/login/login.component';

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
