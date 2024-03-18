import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { Observable, catchError, throwError } from 'rxjs';
import { DialogService } from '@app/core/services/dialog.service';
import { SimpleDialogConfig } from '@app/shared/models/simple-dialog-config.model';

export function errorInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authService = inject(AuthenticationService);
  const dialogService = inject(DialogService);

  return next(request).pipe(
    catchError((errorObj) => {
      console.error(errorObj);

      if ([401, 403].includes(errorObj.status)) {
        authService.logout();
      } else {
        const errorMsg = errorObj.error?.message || 'An error ocurred. Please try again later.';

        dialogService.openSimpleDialog(new SimpleDialogConfig(['OK'], errorMsg, 'Error'));
      }
      return throwError(() => errorObj);
    })
  );
}
