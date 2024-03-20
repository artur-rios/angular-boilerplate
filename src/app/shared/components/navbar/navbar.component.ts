import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ThemeService } from '@app/core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  public isDarkTheme = false;
  public themeIcon = 'dark_mode';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe((value) => (this.isDarkTheme = value));
  }

  public toggleDarkTheme(): void {
    this.themeService.setDarkTheme(!this.isDarkTheme);
    this.themeIcon = this.isDarkTheme ? 'light_mode' : 'dark_mode';
  }
}
