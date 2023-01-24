import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { App } from 'smart-webcomponents-angular/source/smart.core';
import 'smart-webcomponents-angular/source/smart.element';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    app = new App({
        data: {
            itemClick: function (event) {
                alert(event.target.innerHTML);
            },
            items: [
                {
                    label: "Employee 1",
                    details: {
                        firstName: "John",
                        lastName: "Brown",
                        jobPosition: "Support Officer"
                    }
                },
                {
                    label: "Employee 2",
                    details: {
                        firstName: "Michael",
                        lastName: "Roberts",
                        jobPosition: "Support Officer"
                    }
                },
                {
                    label: "Employee 3",
                    details: {
                        firstName: "Nancy",
                        lastName: "Smith",
                        jobPosition: "Sales Representative"
                    }
                }
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