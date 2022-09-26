import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';

import { HomeComponent } from './components/home/home.component';
import { CategoryCarouselComponent } from './components/category-carousel/category-carousel.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { ProductsCarouselComponent } from './components/products-carousel/products-carousel.component';


@NgModule({
  declarations: [
    HomeComponent,
    CategoryCarouselComponent,
    ProductsGridComponent,
    ProductsCarouselComponent,
  ],
  imports: [
    CommonModule,
    DialogModule,
    CarouselModule,
    FontAwesomeModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule { }
