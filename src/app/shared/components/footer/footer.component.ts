import { Component } from '@angular/core';
import { Author } from 'src/assets/static/config.json';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public author = Author.Name;
  public currentYear = new Date().getFullYear();
}
