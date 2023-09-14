import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMenuOpen: boolean = false;

  ngOnInit(): void {
  }
  
  onClick() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
