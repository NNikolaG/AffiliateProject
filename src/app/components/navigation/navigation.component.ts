import { faSearch, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public faSearch = faSearch;
  public faMenu = faBars;
  public faUser = faUser
  constructor() {
  }

  ngOnInit(): void {
  }

}
