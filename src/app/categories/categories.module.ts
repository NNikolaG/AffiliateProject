import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';



@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class CategoriesModule { }
