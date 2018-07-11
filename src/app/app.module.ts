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
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/components/common/messageservice';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { GrowlModule } from 'primeng/growl';
import { DataScrollerModule } from 'primeng/datascroller';
import { AccordionModule } from 'primeng/accordion';

// Components
import { AppComponent } from './app.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './product.service';
import { OrderAdminComponent } from './order-admin/order-admin.component';
import { ProductsComponent } from './products/products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';
import { GestionCommandesComponent } from './gestion-commandes/gestion-commandes.component';
import { UserService } from './user.service';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';

// Spring security
import { AppService } from './app.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Authentication
import { AuthInterceptor } from './auth.interceptor';
import { MyCommandsComponent } from './my-commands/my-commands.component';


const appRoutes: Routes = [
    { path: 'Connexion', component: FormConnexionComponent },
    { path: '', component: HomeComponent },
    { path: 'Inscription', component: InscriptionComponent },
    { path: 'AddProduct', component: CreateProductComponent },
    { path: 'GestionProduit', component: GestionProduitComponent },
    { path: 'GestionCommandes', component: GestionCommandesComponent },
    { path: 'Cart', component: CartComponent },
    { path: 'myCommands', component: MyCommandsComponent }
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
        CreateProductComponent,
        GestionProduitComponent,
        GestionCommandesComponent,
        CartComponent,
        MyCommandsComponent
    ],
    imports: [
        HttpClientModule,
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
        DialogModule,
        MessagesModule,
        MessageModule,
        FileUploadModule,
        GrowlModule,
        DataScrollerModule,
        AccordionModule
    ],
    providers: [
        AppService,
        ProductService,
        MessageService,
        UserService,
        CartService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
