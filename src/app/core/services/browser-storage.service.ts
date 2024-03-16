import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserStorageService {
  public getLocalObject(key: string): unknown {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  public setLocalObject(key: string, object: unknown): void {
    localStorage.setItem(key, JSON.stringify(object));
  }

  public getSessionObject(key: string): unknown {
    return JSON.parse(sessionStorage.getItem(key) || '{}');
  }

  public setSessionObject(key: string, object: unknown): void {
    sessionStorage.setItem(key, JSON.stringify(object));
  }
}
