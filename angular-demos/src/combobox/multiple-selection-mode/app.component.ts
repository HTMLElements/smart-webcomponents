import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ComboBoxComponent } from 'smart-webcomponents-angular/combobox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
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

        const comboBox = this.combobox;

        comboBox.dataSource = [
            {
                label: "Andrew",
                value: 1,
                group: "A"
            },
            {
                label: "Natalia",
                value: 5,
                group: "B"
            },
            {
                label: "Michael",
                value: 4,
                group: "B"
            },
            {
                label: "Angel",
                value: 2,
                group: "A"
            },
            {
                label: "Hristo",
                value: 6,
                group: "C"
            },
            {
                label: "Peter",
                value: 13,
                group: "A"
            },
            {
                label: "Albert",
                value: 34,
                group: "A"
            },
            {
                label: "Boyko",
                value: 32,
                group: "A"
            },
            {
                label: "Dimitar",
                value: 113,
                group: "B"
            },
            {
                label: "George",
                value: 31,
                group: "C"
            }
        ];
    }
}