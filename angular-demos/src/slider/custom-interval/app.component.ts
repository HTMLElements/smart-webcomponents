import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { SliderComponent } from 'smart-webcomponents-angular/slider';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
    @ViewChild('slider', { read: SliderComponent, static: false }) slider!: SliderComponent;
    @ViewChild('slider2', { read: SliderComponent, static: false }) slider2!: SliderComponent;
    @ViewChild('slider3', { read: SliderComponent, static: false }) slider3: SliderComponent;


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

        that.checkbox.addEventListener('change', function (event: CustomEvent) {
            const checked = event.detail.value;
            that.slider.customInterval = checked;
            that.slider2.customInterval = checked;
            that.slider3.customInterval = checked;
        });
        that.checkbox2.addEventListener('change', function (event: CustomEvent) {
            const checked = event.detail.value;
            that.slider.coerce = checked;
            that.slider2.coerce = checked;
            that.slider3.coerce = checked;
        });
    }
}