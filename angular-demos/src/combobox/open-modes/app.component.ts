import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { ComboBoxComponent } from 'smart-webcomponents-angular/combobox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('buttonDefault', { read: ButtonComponent, static: false }) buttonDefault!: ButtonComponent;
    @ViewChild('buttonAuto', { read: ButtonComponent, static: false }) buttonAuto!: ButtonComponent;
    @ViewChild('buttonDropDownButton', { read: ButtonComponent, static: false }) buttonDropDownButton!: ButtonComponent;
    @ViewChild('buttonNone', { read: ButtonComponent, static: false }) buttonNone!: ButtonComponent;
    @ViewChild('combobox', { read: ComboBoxComponent, static: false }) combobox!: ComboBoxComponent;

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
            comboBox = that.combobox,
            buttons = [that.buttonDefault, that.buttonAuto, that.buttonDropDownButton, that.buttonNone];

        comboBox.dataSource =
            [{
                label: "Andrew",
                value: 1,
                group: "A"
            },
            {
                label: "Natalia",
                value: 2,
                group: "B"
            },
            {
                label: "Michael",
                value: 3,
                group: "B"
            },
            {
                label: "Angel",
                value: 4,
                group: "A"
            },
            {
                label: "Hristo",
                value: 5,
                group: "C"
            },
            {
                label: "Peter",
                value: 6,
                group: "A"
            },
            {
                label: "Albert",
                value: 7,
                group: "A"
            },
            {
                label: "George",
                value: 8,
                group: "C"
            }];
        buttons[0].addEventListener('click', function (): void {
            comboBox.dropDownOpenMode = 'default';

            for (let b = 0; b < buttons.length; b++) {
                buttons[b].disabled = buttons[b] === this ? true : false;
            }
        });

        buttons[1].addEventListener('click', function (): void {
            comboBox.dropDownOpenMode = 'auto';

            for (let b = 0; b < buttons.length; b++) {
                buttons[b].disabled = buttons[b] === this ? true : false;
            }
        });

        buttons[2].addEventListener('click', function (): void {
            comboBox.dropDownOpenMode = 'dropDownButton';

            for (let b = 0; b < buttons.length; b++) {
                buttons[b].disabled = buttons[b] === this ? true : false;
            }
        });

        buttons[3].addEventListener('click', function (): void {
            comboBox.dropDownOpenMode = 'none';

            for (let b = 0; b < buttons.length; b++) {
                buttons[b].disabled = buttons[b] === this ? true : false;
            }
        });
    }
}