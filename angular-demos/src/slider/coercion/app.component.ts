import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';
import { SliderComponent } from 'smart-webcomponents-angular/slider';
import { ToggleButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('numerictextbox', { read: NumericTextBoxComponent, static: false }) numerictextbox!: NumericTextBoxComponent;
    @ViewChild('slider', { read: SliderComponent, static: false }) slider!: SliderComponent;
    @ViewChild('togglebutton', { read: ToggleButtonComponent, static: false }) togglebutton: ToggleButtonComponent;


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

        that.numerictextbox.addEventListener('change', function (event: any) {
            that.slider.interval = that.numerictextbox.value;
        });
        that.togglebutton.addEventListener('change', function (event: any) {
            that.slider.coerce = event.detail.value;
        });
        that.button.addEventListener('click', function () {
            that.slider.val(99);
        });
    }
}