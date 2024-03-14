import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SimpleDialogComponent } from '@app/shared/components/simple-dialog/simple-dialog.component';
import { SimpleDialogConfig } from '@app/shared/models/simple-dialog-config.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private defaultConfig = { height: '150px', width: '250px' };

  constructor(public dialog: MatDialog) {}

  public openSimpleDialog(config: SimpleDialogConfig): Observable<string> {
    const modalSubject = new Subject<string>();

    this.dialog
      .open(SimpleDialogComponent, { ...this.defaultConfig, data: config })
      .afterClosed()
      .subscribe((result) => {
        modalSubject.next(result);
        modalSubject.complete();
      });

    return modalSubject;
  }
}
