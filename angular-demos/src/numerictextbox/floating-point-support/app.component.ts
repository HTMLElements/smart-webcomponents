import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('numerictextbox', { read: NumericTextBoxComponent, static: false }) numerictextbox!: NumericTextBoxComponent;


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
            that.numerictextbox.significantDigits = 5;
        });

        that.button2.addEventListener('click', function () {
            that.numerictextbox.precisionDigits = 5;
        });
    }
}