import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';

import { HomeComponent } from './components/home/home.component';
import { CategoryCarouselComponent } from './components/category-carousel/category-carousel.component';
import { ProductsCarouselComponent } from './components/products-carousel/products-carousel.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { SingleProductComponent } from './components/products-grid/single-product/single-product.component';
import { TopDealProductsComponent } from './components/top-deal-products/top-deal-products.component';

@NgModule({
  declarations: [
    HomeComponent,
    CategoryCarouselComponent,
    ProductsCarouselComponent,
    BannerComponent,
    ProductsGridComponent,
    SingleProductComponent,
    TopDealProductsComponent,
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
