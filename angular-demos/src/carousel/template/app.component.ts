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

        this.carousel.dataSource = [
            {
                label: 'Mauris eget nisi ipsum',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nisi ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                            per inceptos himenaeos.In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.Sed eu facilisis lectus.
                            In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.`,
                image: `${basePath}carousel-square-1.jpg`
            },
            {
                label: 'Ut faucibus commodo velit',
                content: `Duis non viverra nisl, at varius arcu. Ut faucibus commodo velit id blandit. In diam nisi, congue in leo quis, sodales pharetra elit. Sed eu facilisis lectus.
                            In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.Sed eu facilisis lectus.
                            In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.`,
                image: `${basePath}carousel-square-2.jpg`
            },
            {
                label: 'Donec tincidunt',
                content: `Nulla imperdiet eleifend laoreet. Fusce tincidunt ligula nisi, ac lobortis neque aliquet ac. Donec tincidunt, justo et viverra feugiat, metus neque efficitur arcu,
                            vel condimentum diam dolor ut mi.In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.Donec tincidunt, justo et viverra feugiat, metus neque efficitur arcu,
                            vel condimentum diam dolor ut mi.In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.`,
                image: `${basePath}carousel-square-3.jpg`
            }
        ];
    }
}