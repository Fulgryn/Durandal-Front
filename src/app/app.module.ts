import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// PrimeNG items
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';

// Components
import { AppComponent } from './app.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';


const appRoutes: Routes = [
  { path: 'Connexion', component: FormConnexionComponent },
  { path: '', component: HomeComponent },
  { path: 'Inscription', component: InscriptionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FormConnexionComponent,
    HomeComponent,
    InscriptionComponent
  ],
  imports: [
    CalendarModule,
    InputTextareaModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MenubarModule,
    MenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
