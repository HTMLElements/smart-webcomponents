import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Smart } from 'smart-webcomponents-angular/button';

Smart('smart-greeting', class SmartGreeting extends Smart.BaseElement {
    // Declare properties
    static get properties() {
        return {
            'name': {
                value: 'World!',
                type: 'string'
            }
        };
    }
    // Define a template
    template() {
        return '<p>Hello, <span>{{name}}</span></p>';
    }
});

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {


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