import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public banners!: any;
  public autoplayInterval: number = 5000;
  private object: Array<MutationObserver> = [];

  constructor() { }

  ngOnInit(): void {
    this.banners = [
      { titlePart1: "Only Music.", titlePart2: "Nothing Else.", image: "banner3.jpg" },
      { titlePart1: "Mi ", titlePart2: "Air Purifier", image: "banner1.jpg" },
      { titlePart1: "Time", titlePart2: "is everything", image: "banner2.jpg" },
    ];
  }

  ngAfterViewInit() {
    var banner = document.querySelector('.banner-carousel')!;
    var items = banner.querySelectorAll(".p-carousel-item");


    const options = {
      attributes: true
    }

    function callback(mutationList: any[], observer: any) {
      mutationList.forEach(function (mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {

          if (mutation.target.classList.value.includes('p-carousel-item-active') && !mutation.target.classList.value.includes('animacija')) {
            mutation.target.classList.add('animacija');
          }
          if (!mutation.target.classList.value.includes('p-carousel-item-active') && mutation.target.classList.value.includes('animacija')) {
            mutation.target.classList.remove('animacija');
          }

        }
      })
    }

    items.forEach(e => {
      const x = new MutationObserver(callback);
      x.observe(e, options);
      this.object.push(x);
    })


  }
  ngOnDestroy() {
    this.object.forEach(e => {
      e.disconnect();
    })
  }
}
