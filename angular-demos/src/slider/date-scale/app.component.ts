import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SliderComponent } from 'smart-webcomponents-angular/slider';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('slider', { read: SliderComponent, static: false }) slider!: SliderComponent;
    @ViewChild('slider2', { read: SliderComponent, static: false }) slider2!: SliderComponent;
    @ViewChild('slider3', { read: SliderComponent, static: false }) slider3!: SliderComponent;
    @ViewChild('slider4', { read: SliderComponent, static: false }) slider4!: SliderComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
    }

    slider2LabelFormatFunction(value): string {
        if (value.year() === 2018 && value.month() === 5 && value.day() === 17) {
            return '<div id="birthday">' + value.toString('MMM d, yyyy') + '<br/>★Peter\'s birthday★</div>';
        }
        return value.toString('MMM d, yyyy');
    }
}