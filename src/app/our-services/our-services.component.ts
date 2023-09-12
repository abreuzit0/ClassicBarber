import { Component, OnInit } from '@angular/core';
import { ICard } from '../data/icard';
import { CARDS } from '../data/cards';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {
  cards: ICard[] = CARDS;
  head = 'NOSSOS';
  coloredHead = 'SERVIÇOS';

  constructor(title: Title) {
    title.setTitle('Classic Barber - Nossos Serviços');
  }

  ngOnInit(): void {
  }

}