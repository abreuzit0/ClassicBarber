import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServicesComponent } from './our-services.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    OurServicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    OurServicesComponent
  ]
  
})
export class OurServicesModule { }
