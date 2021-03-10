import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public searchIsActive: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }


  toggleSearch(): void {
    this.searchIsActive = !this.searchIsActive;
  }
}
