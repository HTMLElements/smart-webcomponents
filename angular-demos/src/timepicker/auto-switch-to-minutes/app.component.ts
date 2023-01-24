import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TimePickerComponent } from 'smart-webcomponents-angular/timepicker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('timepicker', { read: TimePickerComponent, static: false }) timepicker!: TimePickerComponent;


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