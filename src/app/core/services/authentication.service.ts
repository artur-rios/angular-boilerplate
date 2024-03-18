import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageStrategy } from '@app/core/enums/token-storage-strategy';
import { AppStorageService } from '@app/core/services/app-storage.service';
import { DialogService } from '@app/core/services/dialog.service';
import { SimpleDialogConfig } from '@app/shared/models/simple-dialog-config.model';
import { environment } from '@environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private TOKEN_KEY = 'authToken';

  constructor(
    private appStorage: AppStorageService,
    private dialogService: DialogService,
    private router: Router
  ) {}

  public getToken(): string | null {
    switch (environment.tokenStorageStrategy) {
      case TokenStorageStrategy.APP: {
        const appStorageKey = this.appStorage.get(this.TOKEN_KEY);
        return typeof appStorageKey === 'string' ? appStorageKey : null;
      }
      case TokenStorageStrategy.LOCAL:
        return localStorage.getItem(this.TOKEN_KEY);
      case TokenStorageStrategy.SESSION:
        return sessionStorage.getItem(this.TOKEN_KEY);
      default:
        return localStorage.getItem(this.TOKEN_KEY);
    }
  }

  public goToLoginPage(): void {
    this.router.navigateByUrl('auth/login');
  }

  public logout(): void {
    this.removeToken();
    this.dialogService
      .openSimpleDialog(new SimpleDialogConfig(['OK'], 'Session expired, please login again.', 'Warning'))
      .subscribe(() => this.goToLoginPage());
  }

  public removeToken(): void {
    switch (environment.tokenStorageStrategy) {
      case TokenStorageStrategy.APP: {
        this.appStorage.remove(this.TOKEN_KEY);
        break;
      }
      case TokenStorageStrategy.LOCAL:
        localStorage.removeItem(this.TOKEN_KEY);
        break;
      case TokenStorageStrategy.SESSION:
        sessionStorage.removeItem(this.TOKEN_KEY);
        break;
      default:
        localStorage.removeItem(this.TOKEN_KEY);
        break;
    }
  }
}
