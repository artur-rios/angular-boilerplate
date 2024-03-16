import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStorageService {
  private values: Record<string | number, unknown> = {};

  public clear(): void {
    this.values = {};
  }

  public get(key: string | number): unknown {
    return this.values[key];
  }

  public remove(key: string | number): void {
    delete this.values[key];
  }

  public set(key: string | number, value: unknown): void {
    this.values[key] = value;
  }
}
