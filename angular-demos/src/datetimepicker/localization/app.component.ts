import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DateTimePickerComponent } from 'smart-webcomponents-angular/datetimepicker';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('datetimepicker', { read: DateTimePickerComponent, static: false }) datetimepicker!: DateTimePickerComponent;
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

        that.datetimepicker.messages.bg = { now: 'Сега', dateTabLabel: 'ДАТА', timeTabLabel: 'ВРЕМЕ' };
        that.datetimepicker.messages.fr = { now: 'À présent', dateTabLabel: 'DATE', timeTabLabel: 'TEMPS' };
        that.datetimepicker.messages.de = { now: 'Jetzt', dateTabLabel: 'DATUM', timeTabLabel: 'ZEIT' };
        that.datetimepicker.messages.it = { now: 'Adesso', dateTabLabel: 'DATA', timeTabLabel: 'TEMPO' };
        that.datetimepicker.messages.ja = { now: '今', dateTabLabel: '日付', timeTabLabel: '時間' };
        that.datetimepicker.messages.es = { now: 'Ahora', dateTabLabel: 'FECHA', timeTabLabel: 'HORA' };

        that.dropdownlist.addEventListener('change', function (event: any) {
            that.datetimepicker.locale = event.detail.value;
        });
    }
}