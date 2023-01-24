import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DateTimePickerComponent } from 'smart-webcomponents-angular/datetimepicker';
import { App } from 'smart-webcomponents-angular/source/smart.core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('datetimepicker', { read: DateTimePickerComponent, static: false }) datetimepicker!: DateTimePickerComponent;

    app = new App({
        id: "app1",
        template: {
            "#dateTimePicker": {
                properties: {
                    calendarButton: true
                }
            }
        },
        data: {
            date: new Date('2020-11-15 06:24:00')
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

        this.app.notify(function (changes) {
            console.log('data is updated');
        });
    }
}