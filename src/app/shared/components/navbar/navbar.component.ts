import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public isDarkTheme = false;
  public themeIcon = 'dark_mode';

  public toggleDarkTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeIcon = this.isDarkTheme ? 'light_mode' : 'dark_mode';
  }
}
