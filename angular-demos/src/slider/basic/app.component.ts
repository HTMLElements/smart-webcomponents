import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
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
    @ViewChild('horizontalSliderValue', { read: ElementRef, static: false }) horizontalSliderValue!: ElementRef;
    @ViewChild('verticalSliderValue', { read: ElementRef, static: false }) verticalSliderValue!: ElementRef;
    @ViewChild('invertedHorizontalSliderValue', { read: ElementRef, static: false }) invertedHorizontalSliderValue!: ElementRef;
    @ViewChild('invertedVerticalSliderValue', { read: ElementRef, static: false }) invertedVerticalSliderValue!: ElementRef;

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const that = this,
            sliders = [that.slider, that.slider2, that.slider3, that.slider4];

        for (let i = 0; i < sliders.length; i++) {
            const slider = sliders[i];

            slider.addEventListener('change', function (event: CustomEvent) {
                const value = event.detail.value;
                that[slider.nativeElement.id + 'Value'].nativeElement.innerHTML = parseFloat('' + value).toFixed(2);
            });
        }
    }
}