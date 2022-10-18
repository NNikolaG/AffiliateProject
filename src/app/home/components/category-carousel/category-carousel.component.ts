import { Component, OnInit } from '@angular/core';
import { faComputerMouse, faDesktop, faHeadset, faKeyboard, faPrint, faSliders } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-category-carousel',
  templateUrl: './category-carousel.component.html',
  styleUrls: ['./category-carousel.component.scss']
})
export class CategoryCarouselComponent implements OnInit {


  public categories!: any;
  public responsiveOptions!: any;
  public faSliders = faSliders;
  
  public display: boolean = false;


  constructor() {
    this.responsiveOptions = [{
      breakpoint: '768px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '576px',
      numVisible: 3,
      numScroll: 1
    }
    ];
  }

  ngOnInit(): void {
    this.categories = [
      { icon: faKeyboard, title: 'Keyboards' },
      { icon: faComputerMouse, title: 'Mouses' },
      { icon: faDesktop, title: 'Desktop' },
      { icon: faHeadset, title: 'Headsets' },
      { icon: faPrint, title: 'Printers' },
      { icon: faPrint, title: 'Printers' },
      { icon: faPrint, title: 'Printers' },
    ];
  }


  showDialog() {
    this.display = true;
  }

}
