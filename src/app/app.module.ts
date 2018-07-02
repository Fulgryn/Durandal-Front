import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//PrimeNG items
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';

//Components
import { AppComponent } from './app.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';

const appRoutes: Routes = [
  //{ path: 'Products', component: ProductsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    FormConnexionComponent
  ],
  imports: [
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
