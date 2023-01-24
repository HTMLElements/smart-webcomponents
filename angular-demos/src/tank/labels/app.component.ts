import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { TankComponent } from 'smart-webcomponents-angular/tank';


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
    @ViewChild('tank', { read: TankComponent, static: false }) tank!: TankComponent;
    @ViewChild('tank2', { read: TankComponent, static: false }) tank2!: TankComponent;


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

        that.radiobutton.addEventListener('change', function () {
            if (that.radiobutton[0].checked) {
                that.tank.labelsVisibility = 'all';
                that.tank2.labelsVisibility = 'all';
            }
        });
        that.radiobutton2.addEventListener('change', function () {
            if (that.radiobutton2.checked) {
                that.tank.labelsVisibility = 'endPoints';
                that.tank2.labelsVisibility = 'endPoints';
            }
        });
        that.radiobutton3.addEventListener('change', function () {
            if (that.radiobutton3.checked) {
                that.tank.labelsVisibility = 'none';
                that.tank2.labelsVisibility = 'none';
            }
        });
        that.radiobutton4.addEventListener('change', function () {
            if (that.radiobutton4.checked) {
                that.tank.ticksVisibility = 'major';
                that.tank2.ticksVisibility = 'major';
            }
        });
        that.radiobutton5.addEventListener('change', function () {
            if (that.radiobutton5.checked) {
                that.tank.ticksVisibility = 'minor';
                that.tank2.ticksVisibility = 'minor';
            }
        });
        that.radiobutton6.addEventListener('change', function () {
            if (that.radiobutton6.checked) {
                that.tank.ticksVisibility = 'none';
                that.tank2.ticksVisibility = 'none';
            }
        });
    }
}