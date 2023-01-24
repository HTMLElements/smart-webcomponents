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
    @ViewChild('slider3', { read: SliderComponent, static: false }) slider3: SliderComponent;
    @ViewChild('smartSlider1Value', { read: ElementRef, static: false }) smartSlider1Value: ElementRef;
    @ViewChild('smartSlider2Value', { read: ElementRef, static: false }) smartSlider2Value: ElementRef;
    @ViewChild('smartSlider3Value', { read: ElementRef, static: false }) smartSlider3Value: ElementRef;

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
            sliders = [that.slider, that.slider2, that.slider3];

        for (let i = 0; i < sliders.length; i++) {
            const slider = sliders[i];
            slider.addEventListener('change', function (event: CustomEvent) {
                const value = event.detail.value;

                that[slider.nativeElement.id + 'Value'].nativeElement.innerHTML = parseFloat(value).toFixed(2);
            });
        }
    }
}