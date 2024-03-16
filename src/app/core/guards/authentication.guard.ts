import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '@app/core/services/authentication.service';

export const authenticationGuard: CanActivateFn = () => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (!authService.getToken()) {
    router.navigateByUrl('auth/login');

    return false;
  }

  return true;
};
