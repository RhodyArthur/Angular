import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { WordDetailsComponent } from "./word-details/word-details.component";
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SearchComponent, WordDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dictionary-app';

  constructor(private themeService: ThemeService) {}

  // get isDarkMode():boolean {
  //   return this.themeService.isDarkModeEnabled();
  // }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }
}
