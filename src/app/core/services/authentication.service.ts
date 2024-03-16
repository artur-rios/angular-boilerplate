import { Injectable } from '@angular/core';
import { TokenStorageStrategy } from '@app/core/enums/token-storage-strategy';
import { AppStorageService } from '@app/core/services/app-storage.service';
import { environment } from '@environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private TOKEN_KEY = 'authToken';

  constructor(private appStorage: AppStorageService) {}

  public getToken(): string | null {
    switch (environment.tokenStorageStrategy) {
      case TokenStorageStrategy.APP: {
        const appStorageKey = this.appStorage.get(this.TOKEN_KEY);
        return typeof appStorageKey === 'string' ? appStorageKey : null;
      }
      case TokenStorageStrategy.LOCAL:
        return localStorage.getItem(this.TOKEN_KEY);
      case TokenStorageStrategy.SESSION:
        return localStorage.getItem(this.TOKEN_KEY);
      default:
        return localStorage.getItem(this.TOKEN_KEY);
    }
  }
}
