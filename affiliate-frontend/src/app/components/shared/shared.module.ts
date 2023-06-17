import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    HomeComponent,
    TopNavComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    TopNavComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
