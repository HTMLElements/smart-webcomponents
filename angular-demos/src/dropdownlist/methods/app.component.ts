import { Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None,
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
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;


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
        const list = this.dropdownlist;

        list.dataSource =
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
            list.sorted = false;
        });

        that.buttonSort.addEventListener('click', function (): void {
            list.sorted = true;
        });

        that.buttonUngroup.addEventListener('click', function (): void {
            list.grouped = false;
        });

        that.buttonGroup.addEventListener('click', function (): void {
            list.grouped = true;
        });

        that.buttonOpen.addEventListener('click', function (): void {
            list.open();
        });

        that.buttonClose.addEventListener('click', function (): void {
            list.close();
        });

        that.buttonDefault.addEventListener('click', function (): void {
            list.selectionMode = 'oneOrManyExtended';
        });

        that.buttonCheck.addEventListener('click', function (): void {
            list.selectionMode = 'checkBox';
        });

        that.buttonRadio.addEventListener('click', function (): void {
            list.selectionMode = 'radioButton';
        });
        that.buttonInsert.addEventListener('click', function (): void {
            list.insert(0, "New Item");
        });

        that.buttonUpdate.addEventListener('click', function (): void {
            list.update(0, "Updated Item");
        });

        that.buttonRemove.addEventListener('click', function (): void {
            list.removeAt(0);
        });

        that.buttonDisable.addEventListener('click', function (): void {
            const dropDownList = list;

            dropDownList.disabled = !dropDownList.disabled;
        });
    }
}