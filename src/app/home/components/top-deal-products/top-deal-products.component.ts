import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-deal-products',
  templateUrl: './top-deal-products.component.html',
  styleUrls: ['./top-deal-products.component.scss']
})
export class TopDealProductsComponent implements OnInit {

  public products: any;
  constructor() { }

  ngOnInit(): void {
    this.products = [
      { title: 'SteelSeries Apex 3 RGB Gaming Keyboard', image: "product1.png", category: "Keyboards", desc: "AWESOME PRODUCT" },
      { title: 'Fiodio Rainbow Membrane Gaming Keyboard', image: "product2.png", category: "Keyboards", desc: "AWESOME PRODUCT" },
      { title: 'Wireless Mouse, E-YOOSO Computer Mouse', image: "product3.png", category: "Mouses", desc: "AWESOME PRODUCT" },
    ];
  }

}
