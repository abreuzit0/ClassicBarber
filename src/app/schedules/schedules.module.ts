import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulesComponent } from './schedules.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SchedulesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    SchedulesComponent
  ]
})
export class SchedulesModule { }
