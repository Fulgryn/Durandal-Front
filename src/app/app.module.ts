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
import { DataViewModule } from 'primeng/dataview';

// Components
import { AppComponent } from './app.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './product.service';

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
    InscriptionComponent,
    ProductDetailsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MenubarModule,
    MenuModule,
    DataViewModule

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
