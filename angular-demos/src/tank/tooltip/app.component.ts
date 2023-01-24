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

        that.checkbox.addEventListener('change', function () {
            that.tank.showTooltip = that.checkbox.checked;
        });

        that.checkbox2.addEventListener('change', function () {
            if (that.checkbox2.checked) {
                that.tank.tooltipPosition = 'far';
            }
            else {
                that.tank.tooltipPosition = 'near';
            }
        });
    }
}