import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CheckBoxComponent, CheckBox } from 'smart-webcomponents-angular/checkbox';
import { SchedulerComponent, SchedulerEvent, SchedulerViews, SchedulerViewType } from 'smart-webcomponents-angular/scheduler';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
    @ViewChild('checkbox3', { read: CheckBoxComponent, static: false }) checkbox3!: CheckBoxComponent;
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    dataSource: SchedulerEvent[] = (() => {
        const today = new Date(),
            todayDate = today.getDate(),
            currentYear = today.getFullYear(),
            currentMonth = today.getMonth();

        return [
            {
                label: 'Apple Marketing Strategy',
                dateStart: new Date(currentYear, currentMonth, todayDate - 1),
                dateEnd: new Date(currentYear, currentMonth, todayDate + 1),
                backgroundColor: '#FF5722'
            }, {
                label: 'Google AdWords Strategy',
                dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
                dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
                backgroundColor: '#7CB342'
            }, {
                label: 'New Brochures',
                dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
                dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
                backgroundColor: '#2196F3'
            }, {
                label: 'Brochure Design Review',
                dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
                dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
                backgroundColor: '#FFD600'
            }
        ]
    })();

    view: SchedulerViewType = 'week';

    views: SchedulerViews[] = ['week', 'month'];

    nonworkingDays: number[] = [2, 4];

    handleViewChange(event: CustomEvent) {
        const view = event.detail.value;

        this.checkbox3.nativeElement.classList[view === 'month' ? 'add' : 'remove']('smart-hidden');
    }

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

        const scheduler = this.scheduler;

        document.querySelector('.options').addEventListener('change', function (event: CustomEvent) {
            if (!(event.target instanceof window.Smart.CheckBox)) {
                return;
            }

            const target = event.target as CheckBox;

            scheduler[target.id] = target.checked;
        });
    };
}