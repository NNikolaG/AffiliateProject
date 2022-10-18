import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule }
  from "@angular/platform-browser/animations";

//Firebase
import { AngularFireModule } from "@angular/fire/compat";

//Enviroment
import { environment } from 'src/environments/environment';

//Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Modules
import { HomeModule } from './home/home.module';

//PrimeNG
import { ButtonModule } from "primeng/button";
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DialogModule } from 'primeng/dialog';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CategoriesComponent } from './categories/components/categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FontAwesomeModule,
    ButtonModule,
    HomeModule,
    SidebarModule,
    AvatarModule,
    AvatarGroupModule,
    DialogModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
