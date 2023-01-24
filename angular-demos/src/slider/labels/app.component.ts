import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { SliderComponent } from 'smart-webcomponents-angular/slider';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
    @ViewChild('radiobutton5', { read: RadioButtonComponent, static: false }) radiobutton5!: RadioButtonComponent;
    @ViewChild('radiobutton6', { read: RadioButtonComponent, static: false }) radiobutton6!: RadioButtonComponent;
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

        // labels
        that.radiobutton.addEventListener('change', function () {
            that.slider.labelsVisibility = 'all';
            that.slider2.labelsVisibility = 'all';
        });
        that.radiobutton2.addEventListener('change', function () {
            that.slider.labelsVisibility = 'endPoints';
            that.slider2.labelsVisibility = 'endPoints';
        });
        that.radiobutton3.addEventListener('change', function () {
            that.slider.labelsVisibility = 'none';
            that.slider2.labelsVisibility = 'none';
        });
        // ticks
        that.radiobutton4.addEventListener('change', function () {
            that.slider.ticksVisibility = 'major';
            that.slider2.ticksVisibility = 'major';
        });
        that.radiobutton5.addEventListener('change', function () {
            that.slider.ticksVisibility = 'minor';
            that.slider2.ticksVisibility = 'minor';
        });
        that.radiobutton6.addEventListener('change', function () {
            that.slider.ticksVisibility = 'none';
            that.slider2.ticksVisibility = 'none';
        });
    }
}