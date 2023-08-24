import { HeaderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'inicio',
    icon: 'home',
    routerUrl: ''
  })

  constructor() { }

  // get
  get headerData(): HeaderData {
    return this._headerData.value
  }

  // set
  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }

}
