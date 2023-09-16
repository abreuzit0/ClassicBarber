import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  head = 'MARQUE SEU';
  coloredHead = 'AGENDAMENTO';

  constructor(private title: Title) {
    this.title.setTitle('Classic barber - Marque seu agendamento');
  }

  ngOnInit(): void {
  }
}
