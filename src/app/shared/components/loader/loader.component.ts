import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@app/core/services/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent implements OnInit {
  public showLoader = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.showLoader.subscribe((showLoader) => {
      this.showLoader = showLoader;
    });
  }
}
