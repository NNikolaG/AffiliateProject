import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.scss']
})
export class ProductsCarouselComponent implements OnInit {

  public products!: any;
  public autoplayInterval: number = 3000;

  constructor() {
  }

  ngOnInit(): void {
    this.products = [
      { url: "#", id: "1", name: "SteelSeries Apex 3 RGB Gaming Keyboard", image: "product1.jpg", desc: "Products are awesome" },
      { url: "#", id: "2", name: "Fiodio Rainbow Membrane Gaming Keyboard,", image: "product2.jpg", desc: "Products are awesome" },
      { url: "#", id: "3", name: "Wireless Mouse, E-YOOSO Computer Mouse", image: "product3.jpg", desc: "Products are awesome" },
      { url: "#", id: "4", name: "Fiodio Rainbow Membrane Gaming Keyboard,", image: "product1.jpg", desc: "Products are awesome" },
    ];
  }

}
