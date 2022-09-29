import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements AfterViewInit {

  basePath = 'assets/images/';

  carouselDataSource = [
    {
      label1: 'Apple Watch Series 6',
      image1: `${this.basePath}products/1.png`,
      brand1: `Apple`,
      price1: '$359',
      label2: 'Apple Macbook Pro',
      image2: `${this.basePath}products/macbook-pro.png`,
      brand2: `Apple`,
      price2: '$1279',
      label3: 'Apple iPhone X',
      image3: `${this.basePath}products/iphone.png`,
      brand3: `Apple`,
      price3: '$679'
    },
    {
      label1: 'Apple Watch Series 6',
      image1: `${this.basePath}products/1.png`,
      brand1: `Apple`,
      price1: '$359',
      label2: 'Apple Macbook Pro',
      image2: `${this.basePath}products/macbook-pro.png`,
      brand2: `Apple`,
      price2: '$1279',
      label3: 'Apple iPhone X',
      image3: `${this.basePath}products/iphone-x.png`,
      brand3: `Apple`,
      price3: '$679'
    }, {
      label1: 'Apple Watch Series 6',
      image1: `${this.basePath}products/1.png`,
      brand1: `Apple`,
      price1: '$359',
      label2: 'Apple Macbook Pro',
      image2: `${this.basePath}products/macbook-pro.png`,
      brand2: `Apple`,
      price2: '$1279',
      label3: 'Apple iPhone X',
      image3: `${this.basePath}products/iphone.png`,
      brand3: `Apple`,
      price3: '$679'
    }
  ];
  constructor() { }

  ngAfterViewInit(): void {

  }

}
