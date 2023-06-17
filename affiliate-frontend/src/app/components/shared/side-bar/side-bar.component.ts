import { Component } from '@angular/core';
import { SideBarService } from './service/side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  public styles!: string;

  constructor(
    private sideBarService: SideBarService
  ) { }

  ngOnInit() {
    this.sideBarService.getSideBarState().subscribe((data) => {
      this.changeState(data)
    })
  }

  private changeState(state: boolean): void {
    if (state == false) {
      this.styles = "hide"
    }
    else {
      this.styles = "show"
    }
  }

  public close(): void {
    this.sideBarService.changeSideBarState(false)
  }
}
