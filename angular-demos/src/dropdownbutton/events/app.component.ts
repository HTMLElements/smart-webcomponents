import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { DropDownButtonComponent } from 'smart-webcomponents-angular/dropdownbutton';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('dropdownbutton', { read: DropDownButtonComponent, static: false }) dropdownbutton!: DropDownButtonComponent;
    @ViewChild('radiobuttonDefault', { read: RadioButtonComponent, static: false }) radiobuttonDefault!: RadioButtonComponent;
    @ViewChild('radiobuttonDropDownButton', { read: RadioButtonComponent, static: false }) radiobuttonDropDownButton!: RadioButtonComponent;
    @ViewChild('log', { read: ElementRef, static: false }) log!: ElementRef;

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
            dropDownButton = that.dropdownbutton,
            log = that.log.nativeElement;

        that.radiobuttonDefault.addEventListener('change', function (): void {
            dropDownButton.dropDownOpenMode = 'default';
            dropDownButton.placeholder = 'Button';
        });

        that.radiobuttonDropDownButton.addEventListener('change', function (): void {
            dropDownButton.dropDownOpenMode = 'dropDownButton';
            dropDownButton.placeholder = 'Action';
        });

        dropDownButton.addEventListener('actionButtonClick', function (event: any): void {
            log.innerHTML += event.type + '<br />';
        });

        dropDownButton.addEventListener('dropDownButtonClick', function (event: any): void {
            log.innerHTML += event.type + '<br />';
        });

        dropDownButton.addEventListener('opening', function (event: any): void {
            log.innerHTML += event.type + '<br />';
        });

        dropDownButton.addEventListener('closing', function (event: any): void {
            log.innerHTML += event.type + '<br />';
        });
    }
}