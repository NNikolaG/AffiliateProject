import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {

  public products!: any;
  constructor() { }

  ngOnInit(): void {

    this.products = [
      { title: 'Keyboards' },
      { title: 'Mouses' },
      { title: 'Desktop' },
      { title: 'Headsets' },
      { title: 'Printers' },
    ];
  }

}
