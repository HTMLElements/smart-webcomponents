import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SliderComponent } from 'smart-webcomponents-angular/slider';
import { ToggleButtonComponent } from 'smart-webcomponents-angular/button';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('slider', { read: SliderComponent, static: false }) slider!: SliderComponent;
    @ViewChild('slider2', { read: SliderComponent, static: false }) slider2!: SliderComponent;
    @ViewChild('togglebutton', { read: ToggleButtonComponent, static: false }) togglebutton!: ToggleButtonComponent;


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

        that.togglebutton.addEventListener('change', function (event: CustomEvent) {
            that.slider.showButtons = event.detail.value;
            that.slider2.showButtons = event.detail.value;
        });
    }
}