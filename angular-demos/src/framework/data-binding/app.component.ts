import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent, Smart } from 'smart-webcomponents-angular/button';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { ListBoxComponent } from 'smart-webcomponents-angular/listbox';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';
import { App } from 'smart-webcomponents-angular/source/smart.core';
import { smartGrid } from 'smart-webcomponents-angular/source/modules/smart.grid';
import { smartDropDownList } from 'smart-webcomponents-angular/source/modules/smart.dropDownList';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
    @ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox!: ListBoxComponent;
    @ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;
    @ViewChild('textbox2', { read: TextBoxComponent, static: false }) textbox2: TextBoxComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const app = new App({
            id: "app1",
            template: {
                "#textBox1": {
                    properties: {
                        value: "",
                        placeholder: "First Name"
                    },
                    bind: {
                        value: "firstName"
                    }
                },
                "#textBox2": {
                    properties: {
                        value: "",
                        placeholder: "Last Name"
                    },
                    bind: {
                        value: "lastName"
                    }
                },
                "#listBox": {
                    properties: {
                        dataSource: [],
                        selectedIndexes: [0]
                    },
                    listeners: {
                        change: "selectItem"
                    },
                    bind: {
                        dataSource: "items",
                        selectedIndexes: "selectedIndexes"
                    }
                },
                "#dropDownList": {
                    properties: {
                        dataSource: [],
                        selectedIndexes: [0]
                    },
                    listeners: {
                        change: "selectItem"
                    },
                    bind: {
                        dataSource: "items",
                        selectedIndexes: "selectedIndexes"
                    }
                },
                "#button": {
                    properties: {
                        value: "submit",
                        innerHTML: "Submit"
                    },
                    listeners: {
                        click: "addItem"
                    },
                    bind: {
                        innerHTML: "buttonText"
                    }
                }
            },
            data: {
                firstName: "John",
                lastName: "Peterson",
                items: ["George Brown", "Anthony Black", "Mike Jordan"],
                selectedIndexes: [1],
                addItem: function () {
                    this.items.push(this.firstName + " " + this.lastName);
                    this.firstName = this.lastName = "";
                },
                selectItem: function (event) {
                    if (event.detail.selected) {
                        const selectedItem = this.items[this.selectedIndexes[0]];
                        const names = selectedItem.split(" ");
                        this.firstName = names[0];
                        this.lastName = names[1];
                    }
                },
                buttonText: "Add Item",
            }
        });
        app.notify(function (changes) {
            console.log('data is updated');
        });

        Smart.Render();
    }
}