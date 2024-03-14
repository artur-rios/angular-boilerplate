import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SimpleDialogConfig } from '@app/shared/models/simple-dialog-config.model';

@Component({
  selector: 'app-simple-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule],
  templateUrl: './simple-dialog.component.html',
  styleUrl: './simple-dialog.component.scss',
})
export class SimpleDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: SimpleDialogConfig,
    public dialogRef: MatDialogRef<SimpleDialogConfig>
  ) {}

  closeDialog(button: string) {
    this.dialogRef.close(button);
  }
}
