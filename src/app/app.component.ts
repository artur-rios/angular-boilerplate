import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '@app/core/services/theme.service';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { LoaderComponent } from '@app/shared/components/loader/loader.component';
import { NavbarComponent } from '@app/shared/components/navbar/navbar.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FooterComponent, LoaderComponent, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public isDarkTheme!: Observable<boolean>;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
}
