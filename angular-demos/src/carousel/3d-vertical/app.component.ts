import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CarouselComponent } from 'smart-webcomponents-angular/carousel';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('carousel', { read: CarouselComponent, static: false }) carousel!: CarouselComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.	       
        const basePath = './../../../src/images/';

        this.carousel.dataSource = generateDataSource(7);

        function generateDataSource(items: number) {
            let dataSource = [];
            for (let i = 0; i < items; i++) {
                const item = { image: `${basePath}carousel-square-${i + 1}.jpg` };
                dataSource.push(item);
            }
            return dataSource;
        }
    }
}