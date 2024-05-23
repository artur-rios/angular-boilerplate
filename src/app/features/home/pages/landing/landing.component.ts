import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { DialogService } from '@app/core/services/dialog.service';
import { ThemeService } from '@app/core/services/theme.service';
import { Author } from 'src/assets/static/config.json';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit {
  public author = Author;
  public currentYear = new Date().getFullYear();
  public deviceImgSrcLight = '../../../../../assets/images/landing-devices.svg';
  public deviceImgSrcDark = '../../../../../assets/images/landing-devices-dark.png';
  public deviceImgSrc = this.deviceImgSrcLight;
  public isDarkTheme = false;

  constructor(
    private dialogService: DialogService,
    private router: Router,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe((value) => {
      this.deviceImgSrc = value ? this.deviceImgSrcDark : this.deviceImgSrcLight;
      this.isDarkTheme = value;
    });
  }

  public login(): void {
    this.router.navigateByUrl('auth/login');
  }

  public register(): void {
    // TODO Register page
    this.dialogService.openSimpleDialog({
      Buttons: ['OK'],
      Message: `The register page needs to be created :)`,
      Title: 'Test',
    });
  }
}
