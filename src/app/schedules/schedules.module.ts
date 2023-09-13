import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulesComponent } from './schedules.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SchedulesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SchedulesComponent
  ]
})
export class SchedulesModule { }
