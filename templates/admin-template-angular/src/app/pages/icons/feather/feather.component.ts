import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sm-feather',
  templateUrl: './feather.component.html',
  styleUrls: ['./feather.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeatherComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    
    const windowWithFeather = window as any;

    windowWithFeather.feather.replace();
    
  }
}
