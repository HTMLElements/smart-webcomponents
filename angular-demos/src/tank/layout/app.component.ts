import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { TankComponent } from 'smart-webcomponents-angular/tank';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('tank', { read: TankComponent, static: false }) tank!: TankComponent;
    @ViewChild('tank2', { read: TankComponent, static: false }) tank2!: TankComponent;
    @ViewChild('tank3', { read: TankComponent, static: false }) tank3!: TankComponent;
    @ViewChild('tank4', { read: TankComponent, static: false }) tank4!: TankComponent;
    @ViewChild('horizontalTankValue', { read: ElementRef, static: false }) horizontalTankValue!: ElementRef;
    @ViewChild('verticalTankValue', { read: ElementRef, static: false }) verticalTankValue!: ElementRef;
    @ViewChild('invertedHorizontalTankValue', { read: ElementRef, static: false }) invertedHorizontalTankValue!: ElementRef;
    @ViewChild('invertedVerticalTankValue', { read: ElementRef, static: false }) invertedVerticalTankValue!: ElementRef;


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

        that.tank.addEventListener('change', function (event: CustomEvent) {
            const value = event.detail.value;
            that.horizontalTankValue.nativeElement.innerHTML = parseFloat(value).toFixed(2);
        });
        that.tank3.addEventListener('change', function (event: CustomEvent) {
            const value = event.detail.value;
            that.verticalTankValue.nativeElement.innerHTML = parseFloat(value).toFixed(2);
        });
        that.tank2.addEventListener('change', function (event: CustomEvent) {
            const value = event.detail.value;
            that.invertedHorizontalTankValue.nativeElement.innerHTML = parseFloat(value).toFixed(2);
        });
        that.tank4.addEventListener('change', function (event: CustomEvent) {
            const value = event.detail.value;
            that.invertedVerticalTankValue.nativeElement.innerHTML = parseFloat(value).toFixed(2);
        });
    }
}