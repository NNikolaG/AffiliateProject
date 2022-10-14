import { CategoriesComponent } from './categories/components/categories/categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Office | Home' }
  },
  {
    path: 'create',
    component: CategoriesComponent,
    data: { title: 'Office | Home' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
