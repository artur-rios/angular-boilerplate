import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@app/core/services/theme.service';
import { Author } from 'src/assets/static/config.json';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  public author = Author.Name;
  public currentYear = new Date().getFullYear();
  public isDarkTheme = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe((value) => (this.isDarkTheme = value));
  }

  public about(): void {
    // TODO About page
    console.log('GO TO ABOUT PAGE');
  }
}
