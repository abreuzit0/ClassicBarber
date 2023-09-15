import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('isMenuOpen', [
      state('isMenuOpen = false', style({height: '0px'})),
      state('isMenuOpen = true', style({height: '267px'})),
      transition('isMenuOpen => !isMenuOpen', animate('200ms, ease-in')),
      transition('!isMenuOpen => isMenuOpen', animate('200ms, ease-out'))
    ])
  ]
})

export class NavbarComponent implements OnInit {

  isMenuOpen: boolean = false;

  ngOnInit(): void {
  }
  
  onClick() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
