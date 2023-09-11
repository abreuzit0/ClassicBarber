import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  head = 'QUEM';
  coloredHead = 'SOMOS';
  constructor(private title: Title) {
    this.title.setTitle('Classic Barber - Quem Somos');
  }

  ngOnInit(): void {
  }

}