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
      { title: 'SteelSeries Apex 3 RGB Gaming Keyboard', image: "product1.png", category: "Keyboards", desc: "AWESOME PRODUCT" },
      { title: 'SteelSeries Apex 3 RGB Gaming Keyboard', image: "product1.png", category: "Keyboards", desc: "AWESOME PRODUCT" },
      { title: 'SteelSeries Apex 3 RGB Gaming Keyboard', image: "product1.png", category: "Keyboards", desc: "AWESOME PRODUCT" },
      { title: 'Fiodio Rainbow Membrane Gaming Keyboard', image: "product2.png", category: "Keyboards", desc: "AWESOME PRODUCT" },
      { title: 'Fiodio Rainbow Membrane Gaming Keyboard', image: "product2.png", category: "Keyboards", desc: "AWESOME PRODUCT" },
      { title: 'Wireless Mouse, E-YOOSO Computer Mouse', image: "product3.png", category: "Mouses", desc: "AWESOME PRODUCT" },
      { title: 'Wireless Mouse, E-YOOSO Computer Mouse', image: "product3.png", category: "Mouses", desc: "AWESOME PRODUCT" },
      { title: 'Wireless Mouse, E-YOOSO Computer Mouse', image: "product3.png", category: "Mouses", desc: "AWESOME PRODUCT" },
    ];
  }

}
