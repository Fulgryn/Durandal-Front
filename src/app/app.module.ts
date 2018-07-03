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
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

// Components
import { AppComponent } from './app.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './product.service';
import { OrderAdminComponent } from './order-admin/order-admin.component';
import { ProductsComponent } from './products/products.component';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { CreateProductComponent } from './create-product/create-product.component';

const appRoutes: Routes = [
  { path: 'Connexion', component: FormConnexionComponent },
  { path: '', component: HomeComponent },
  { path: 'Inscription', component: InscriptionComponent },
  { path: 'AddProduct', component: CreateProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormConnexionComponent,
    HomeComponent,
    InscriptionComponent,
    ProductDetailsComponent,
    OrderAdminComponent,
    ProductsComponent,
    CreateProductComponent
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
    MenuModule,
    DataViewModule,
    TableModule,
    DropdownModule,
    PanelModule,
    DialogModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
