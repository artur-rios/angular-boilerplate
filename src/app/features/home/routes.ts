import { Routes } from '@angular/router';
import { LandingComponent } from '@app/features/home/pages/landing/landing.component';

export const HOME_ROUTES: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: '**', redirectTo: 'landing', pathMatch: 'full' },
];
