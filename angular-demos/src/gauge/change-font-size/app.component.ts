import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GaugeComponent } from 'smart-webcomponents-angular/gauge';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('gauge', { read: GaugeComponent, static: false }) gauge!: GaugeComponent;


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

        that.button.addEventListener('click', function () {
            that.gauge.nativeElement.style.fontSize = '20px';
        });
        that.button2.addEventListener('click', function () {
            const svg = that.gauge.nativeElement.getElementsByTagName('svg')[0];
            if (svg) {
                svg.style.stroke = 'red';
                svg.style.fill = 'red';
            }
        });
        that.button3.addEventListener('click', function () {
            that.gauge.nativeElement.style.width = '500px';
        });
    }
}