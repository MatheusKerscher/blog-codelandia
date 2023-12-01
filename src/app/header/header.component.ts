import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() emmiterChange = new EventEmitter

  faSearch = faMagnifyingGlass;

  constructor() {}

  ngOnInit(): void {

  }

  onSearch(value: string) {
    this.emmiterChange.emit(value)
  }
}
