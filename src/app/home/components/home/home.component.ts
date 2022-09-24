import { Component, OnInit } from '@angular/core';
import { faComputerMouse, faDesktop, faHeadset, faKeyboard, faPrint, faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public categories!: any;
  public responsiveOptions!: any;
  public faSearch = faSearch;
  public faSliders = faSliders

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
    ];
  }

}
