import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent, SchedulerEvent, SchedulerViewType, SchedulerViews } from 'smart-webcomponents-angular/scheduler';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    view: SchedulerViewType = 'month';

    views: SchedulerViews[] = ['day', 'week', 'month', 'timelineDay', 'timelineWeek', 'timelineMonth', 'agenda'];

    dataSource: SchedulerEvent[] = (() => {
        const today = new Date(),
            currentYear = today.getFullYear(),
            colors = ['#D50000', '#E67C73', '#F4511E', '#F6BF26',
                '#33B679', '#0B8043', '#039BE5', '#3F51B5',
                '#7986CB', '#8E24AA', '#616161'],
            labels = ['Quarterly Project Review Meeting', 'IT Group Mtg', 'New Projects Planning', 'Interview with James', 'Interview with Nancy'];
        let data = [];

        //Load 100 000 events
        for (let i = 0; i < 100000; i++) {
            const year = Math.round(Math.random() * (currentYear + 5 - currentYear) + currentYear), month = Math.round(Math.random() * 12), day = Math.round(Math.random() * 31), offset = Math.round(Math.random() * 5);
            data.push({
                label: labels[Math.round(Math.random() * 4)],
                dateStart: new Date(year, month, day),
                dateEnd: new Date(year, month, day + offset),
                backgroundColor: colors[Math.round(Math.random() * 10)]
            });
        }

        return data
    })();

    hourStart: number = 7;

    hourEnd: number = 19;

    firstDayOfWeek: number = 1;

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