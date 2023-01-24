import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { SliderComponent } from 'smart-webcomponents-angular/slider';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
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
        const that = this,
            sliders = [that.slider, that.slider2];

        that.button.addEventListener('click', function () {
            for (let i = 0; i < sliders.length; i++) {
                const slider = sliders[i];
                if (slider.tooltipPosition === 'near') {
                    slider.tooltipPosition = 'far';
                }
                else {
                    slider.tooltipPosition = 'near';
                }
            }
        });

        that.button2.addEventListener('click', function () {
            that.slider.showTooltip = false;
            that.slider2.showTooltip = false;
            that.button.disabled = true;
            that.button2.disabled = true;
        });
    }
}