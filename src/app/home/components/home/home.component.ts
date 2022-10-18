import { Component, OnInit } from '@angular/core';
import { faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public faSearch = faSearch;
  public faSliders = faSliders
  public display: boolean = false;
  public value: any = 10;


  constructor() {
  }

  ngOnInit(): void {
  }


}
