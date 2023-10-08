import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SchedulesModule } from './schedules/schedules.module';
import { ContactsModule } from './contacts/contacts.module';
import { AboutModule } from './about/about.module';
import { OurServicesModule } from './our-services/our-services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    OurServicesModule,
    SchedulesModule,
    ContactsModule,
    AboutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
