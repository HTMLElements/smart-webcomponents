import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { PathComponent } from 'smart-webcomponents-angular/path';
import { SliderComponent } from 'smart-webcomponents-angular/slider';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('path', { read: PathComponent, static: false }) path: PathComponent;
    @ViewChild('path2', { read: PathComponent, static: false }) path2: PathComponent;
    @ViewChild('slider', { read: SliderComponent, static: false }) slider!: SliderComponent;
    @ViewChild('slider2', { read: SliderComponent, static: false }) slider2!: SliderComponent;


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

        function updatePathControls(event: CustomEvent, dimension: string): void {
            const pathControls: Array<PathComponent> = [that.path, that.path2];

            for (let p = 0; p < pathControls.length; p++) {
                pathControls[p].nativeElement.style[dimension] = event.detail.value + 'px';
            }
        }

        that.slider.addEventListener('change', function (event: CustomEvent): void {
            updatePathControls(event, 'width');
        });

        that.slider2.addEventListener('change', function (event: CustomEvent): void {
            updatePathControls(event, 'height');
        });


    }
}