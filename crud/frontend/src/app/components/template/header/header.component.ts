import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }
  // getTitle
  get title(): string {
    return this.headerService.headerData.title
  }

  // getIcon
  get icon(): string {
    return this.headerService.headerData.icon
  }

  // getRouterUrl
  get routerUrl(): string {
    return this.headerService.headerData.routerUrl
  }
}
