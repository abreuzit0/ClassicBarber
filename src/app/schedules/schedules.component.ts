import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  head = 'MARQUE SEU';
  coloredHead = 'AGENDAMENTO';
  name: String = '';
  phone: String = '';
  date!: Date;
  selectedServOpt = 'Serviço';
  selectedTimeOpt = 'Horário';


  constructor(private title: Title) {
    this.title.setTitle('Classic barber - Marque seu agendamento');
  }

  ngOnInit(): void {
  }

  servOpt = [ 
    "Serviço",
    "Haircut",
    "Barba - Beard",
    "Corte e Barba - Haircut and Beard",
    "Sobrancelha - Eyebrow"
  ];

  timeOpt = [ 
    "Horário", 
    "10:00", "10:50", "11:00", "11:50", 
    "12:00", "12:50", "13:00", "13:50", 
    "14:00", "14:50", "15:00", "15:50",
    "16:00", "16:50", "17:00", "17:50",
    "18:00", "18:50", "19:00" 
];
    
}