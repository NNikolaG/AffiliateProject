import { Component } from '@angular/core';
import { SideBarService } from '../side-bar/service/side-bar.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {

  constructor(
    private sideBarService: SideBarService,
  ) { }

  public changeState(): void {
    this.sideBarService.changeSideBarState(true);
  }

}
