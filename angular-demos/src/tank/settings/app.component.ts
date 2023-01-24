import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';
import { TankComponent } from 'smart-webcomponents-angular/tank';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('numerictextbox', { read: NumericTextBoxComponent, static: false }) numerictextbox!: NumericTextBoxComponent;
    @ViewChild('tank', { read: TankComponent, static: false }) tank!: TankComponent;
    @ViewChild('tank2', { read: TankComponent, static: false }) tank2!: TankComponent;
    @ViewChild('tank3', { read: TankComponent, static: false }) tank3: TankComponent;
    @ViewChild('tank4', { read: TankComponent, static: false }) tank4: TankComponent;

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
            tanks = [that.tank, that.tank2, that.tank3, that.tank4];
        let value;

        that.numerictextbox.addEventListener('change', function (event: CustomEvent) {
            value = event.detail.value;
            for (let i = 0; i < tanks.length; i++) {
                const tank = tanks[i];

                tank.value = value;
            }
        });
        that.checkbox.addEventListener('change', function () {
            for (let i = 0; i < tanks.length; i++) {
                const tank = tanks[i];

                tank.showUnit = that.checkbox.checked;
            }
        });
    }
}