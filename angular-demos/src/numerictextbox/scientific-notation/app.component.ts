import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';
import { ToggleButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('numerictextbox', { read: NumericTextBoxComponent, static: false }) numerictextbox!: NumericTextBoxComponent;
    @ViewChild('numerictextbox2', { read: NumericTextBoxComponent, static: false }) numerictextbox2!: NumericTextBoxComponent;
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
            const enabled = event.detail.value;

            that.numerictextbox.scientificNotation = enabled;
            that.numerictextbox2.scientificNotation = enabled;
        });
    }
}