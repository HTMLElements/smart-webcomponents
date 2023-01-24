import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { TankComponent } from 'smart-webcomponents-angular/tank';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
    @ViewChild('tank', { read: TankComponent, static: false }) tank!: TankComponent;
    @ViewChild('tank2', { read: TankComponent, static: false }) tank2!: TankComponent;
    @ViewChild('tank3', { read: TankComponent, static: false }) tank3!: TankComponent;


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

            that.tank.customInterval = checked;
            that.tank2.customInterval = checked;
            that.tank3.customInterval = checked;
        });

        that.checkbox2.addEventListener('change', function (event: CustomEvent) {
            const checked = event.detail.value;

            that.tank.coerce = checked;
            that.tank2.coerce = checked;
            that.tank3.coerce = checked;
        });
    }
}