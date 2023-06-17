import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  private sideBarState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public changeSideBarState(state: boolean): void {
    this.sideBarState.next(state);
  }

  public getSideBarState(): Observable<boolean> {
    return this.sideBarState.asObservable();
  }
}
