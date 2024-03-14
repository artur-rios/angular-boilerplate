import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public showLoader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private loaderCounter = 0;

  constructor() {}

  public enable(): void {
    this.loaderCounter++;
    this.verifyLoader();
  }

  public disable(): void {
    this.loaderCounter--;
    this.verifyLoader();
  }

  public reset(): void {
    this.loaderCounter = 0;
    this.verifyLoader();
  }

  private verifyLoader(): void {
    const hasLoader = this.showLoader.getValue();

    if (!hasLoader && this.loaderCounter > 0) {
      this.showLoader.next(true);
    } else if (hasLoader && this.loaderCounter === 0) {
      this.showLoader.next(false);
    }
  }
}
