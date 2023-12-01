import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLightTheme = true;
  faMoon = faMoon;
  faSun = faSun;

  valueForSearch: string = '';

  constructor() {}

  ngOnInit(): void {}

  toggleTema() {
    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }

  buscarComentarios(value: string) {
    this.valueForSearch = value;
  }
}
