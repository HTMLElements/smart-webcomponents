import { Component,ViewEncapsulation,  ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
 	encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
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

        const dropDownList = this.dropdownlist;

        dropDownList.dataSource = [
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
        
        dropDownList.addEventListener('change', function (event: any): void {
            console.log(event.detail);
        });
    }
}