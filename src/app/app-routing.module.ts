import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SchedulesComponent } from './schedules/schedules.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'servicos', component: OurServicesComponent},
  {path: 'sobre', component: AboutComponent},
  {path: 'contactos', component: ContactsComponent},
  {path: 'agendamentos', component: SchedulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
