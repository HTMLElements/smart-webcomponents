import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { ComboBoxComponent } from 'smart-webcomponents-angular/combobox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('buttonUnsort', { read: ButtonComponent, static: false }) buttonUnsort!: ButtonComponent;
    @ViewChild('buttonSort', { read: ButtonComponent, static: false }) buttonSort!: ButtonComponent;
    @ViewChild('buttonUngroup', { read: ButtonComponent, static: false }) buttonUngroup!: ButtonComponent;
    @ViewChild('buttonGroup', { read: ButtonComponent, static: false }) buttonGroup!: ButtonComponent;
    @ViewChild('buttonOpen', { read: ButtonComponent, static: false }) buttonOpen!: ButtonComponent;
    @ViewChild('buttonClose', { read: ButtonComponent, static: false }) buttonClose!: ButtonComponent;
    @ViewChild('buttonDefault', { read: ButtonComponent, static: false }) buttonDefault!: ButtonComponent;
    @ViewChild('buttonCheck', { read: ButtonComponent, static: false }) buttonCheck!: ButtonComponent;
    @ViewChild('buttonRadio', { read: ButtonComponent, static: false }) buttonRadio!: ButtonComponent;
    @ViewChild('buttonInsert', { read: ButtonComponent, static: false }) buttonInsert!: ButtonComponent;
    @ViewChild('buttonUpdate', { read: ButtonComponent, static: false }) buttonUpdate!: ButtonComponent;
    @ViewChild('buttonRemove', { read: ButtonComponent, static: false }) buttonRemove!: ButtonComponent;
    @ViewChild('buttonDisable', { read: ButtonComponent, static: false }) buttonDisable!: ButtonComponent;
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
        comboBox = that.combobox;

        comboBox.dataSource =
            [{
                label: "Andrew",
                value: 1,
                group: "Product Owners"
            },
            {
                label: "Natalia",
                value: 2,
                group: "Developers"
            },
            {
                label: "Michael",
                value: 3,
                group: "Developers"
            },
            {
                label: "Angel",
                value: 4,
                group: "Product Owners"
            },
            {
                label: "Hristo",
                value: 5,
                group: "Developers"
            },
            {
                label: "Peter",
                value: 6,
                group: "Developers"
            },
            {
                label: "Albert",
                value: 7,
                group: "Support"
            },
            {
                label: "George",
                value: 8,
                group: "Support"
            }];

       that.buttonUnsort.addEventListener('click', function (): void {
            comboBox.sorted = false;
        });

        that.buttonSort.addEventListener('click', function (): void {
            comboBox.sorted = true;
        });

        that.buttonUngroup.addEventListener('click', function (): void {
            comboBox.grouped = false;
        });

        that.buttonGroup.addEventListener('click', function (): void {
            comboBox.grouped = true;
        });

        that.buttonOpen.addEventListener('click', function (): void {
            comboBox.open();
        });

        that.buttonClose.addEventListener('click', function (): void {
            comboBox.close();
        });

        that.buttonDefault.addEventListener('click', function (): void {
            comboBox.selectionMode = 'oneOrManyExtended';
        });

        that.buttonCheck.addEventListener('click', function (): void {
            comboBox.selectionMode = 'checkBox';
        });

        that.buttonRadio.addEventListener('click', function (): void {
            comboBox.selectionMode = 'radioButton';
        });
        that.buttonInsert.addEventListener('click', function (): void {
            comboBox.insert(0, "New Item");
        });

        that.buttonUpdate.addEventListener('click', function (): void {
            comboBox.update(0, "Updated Item");
        });

        that.buttonRemove.addEventListener('click', function (): void {
            comboBox.removeAt(0);
        });

        that.buttonDisable.addEventListener('click', function (): void {
            comboBox.disabled = !comboBox.disabled;
        });
    }
}