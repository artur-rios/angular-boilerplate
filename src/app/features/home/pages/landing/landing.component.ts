import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogService } from '@app/core/services/dialog.service';
import { Author } from 'src/assets/static/config.json';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  public author = Author;
  public currentYear = new Date().getFullYear();

  constructor(private dialogService: DialogService) {}

  public register(): void {
    this.dialogService.openSimpleDialog({
      Buttons: ['OK'],
      Message: `The register page needs to be created :)`,
      Title: 'Test',
    });
  }
}
