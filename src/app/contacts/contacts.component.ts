import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  head = 'CONTACTE';
  coloredHead = 'NOS';

  constructor(private title: Title) {
    this.title.setTitle('Classic Barber - Contacte Nos');
  }

  ngOnInit(): void {
  }

}