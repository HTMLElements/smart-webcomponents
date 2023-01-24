import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import 'smart-webcomponents-angular/source/smart.element';
import { App } from 'smart-webcomponents-angular/source/smart.core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    app = new App({
        data: {
            columns: [
                'ID',
                'First Name',
                'Last Name'
            ],
            rows: [
                { id: 1, firstName: "Peter", lastName: "Johnes" },
                { id: 2, firstName: "Michael", lastName: "Roberts" },
                { id: 3, firstName: "Nancy", lastName: "Davolio" },
                { id: 4, firstName: "Thomas", lastName: "Purdy" },
                { id: 5, firstName: "John", lastName: "Wilkinson" }
            ]
        }
    });

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
    }
}