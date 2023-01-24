import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { slideInAnimation } from './animations';

import { TabsComponent, TabItem } from 'smart-webcomponents-angular/tabs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;

  constructor(private router: Router) { }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
    this.init();
  }

  init(): void {
    // init code.
    const that = this;

    that.tabs.addEventListener('change', function (event: CustomEvent) {
      const tabItemIndex: number = event.detail.index;

      if (event.target !== that.tabs.nativeElement) {
        return;
      }

      const tabItemLabel = (<TabItem>that.tabs.nativeElement.querySelectorAll('smart-tab-item')[tabItemIndex]).label;

      if (tabItemLabel === 'Heores') {
        that.router.navigate(['/superheroes']);
      }
      else {
        that.router.navigate([{ outlets: { crisis: ['crisis'] } }]);
      }
    })
  }
}
