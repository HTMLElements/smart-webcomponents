import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('radiobuttonnone', { read: RadioButtonComponent, static: false }) radiobuttonnone!: RadioButtonComponent;
    @ViewChild('radiobuttonauto', { read: RadioButtonComponent, static: false }) radiobuttonauto!: RadioButtonComponent;
    @ViewChild('radiobuttoninline', { read: RadioButtonComponent, static: false }) radiobuttoninline!: RadioButtonComponent;
    @ViewChild('radiobuttonmanual', { read: RadioButtonComponent, static: false }) radiobuttonmanual!: RadioButtonComponent;
    @ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;


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

        const textBox = that.textbox;

        that.radiobuttonnone.addEventListener('change', function (event: any): void {
            textBox.autoComplete = 'none';
        });
        that.radiobuttonauto.addEventListener('change', function (event: any): void {
            textBox.autoComplete = 'auto';
        });
        that.radiobuttoninline.addEventListener('change', function (event: any): void {
            textBox.autoComplete = 'inline';
        });
        that.radiobuttonmanual.addEventListener('change', function (event: any): void {
            textBox.autoComplete = 'manual';
        });


    }
}