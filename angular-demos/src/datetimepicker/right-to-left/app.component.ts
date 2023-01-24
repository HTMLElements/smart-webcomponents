import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DateTimePickerComponent } from 'smart-webcomponents-angular/datetimepicker';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('datetimepicker', { read: DateTimePickerComponent, static: false }) datetimepicker!: DateTimePickerComponent;


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
            messages = Object.assign({}, that.datetimepicker.messages);

        messages['he'] = {
            'now': 'עכשיו',
            'dateTabLabel': 'תאריך',
            'timeTabLabel': 'זמן'
        };

        that.datetimepicker.messages = messages;
        that.datetimepicker.placeholder = 'הזן תאריך';
    }
}