import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { SwitchButton, SwitchButtonComponent } from 'smart-webcomponents-angular/switchbutton';
import { SchedulerComponent, SchedulerEvent, SchedulerViews, SchedulerViewType, SchedulerTimelineDayScale } from 'smart-webcomponents-angular/scheduler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('input', { read: InputComponent, static: false }) input!: InputComponent;
    @ViewChild('input2', { read: InputComponent, static: false }) input2: InputComponent;
    @ViewChild('switchbutton', { read: SwitchButtonComponent, static: false }) switchbutton!: SwitchButtonComponent;
    @ViewChild('switchbutton2', { read: SwitchButtonComponent, static: false }) switchbutton2!: SwitchButtonComponent;
    @ViewChild('switchbutton3', { read: SwitchButtonComponent, static: false }) switchbutton3!: SwitchButtonComponent;
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    dataSource: SchedulerEvent[] = (() => {
        const today = new Date(),
            todayDate = today.getDate(),
            currentYear = today.getFullYear(),
            currentMonth = today.getMonth(),
            data = [
                {
                    label: 'Apply Marketing Strategy',
                    dateStart: new Date(currentYear, currentMonth, todayDate - 1, 0, 0),
                    dateEnd: new Date(currentYear, currentMonth, todayDate + 3, 0, 0),
                    backgroundColor: '#F9A825'
                }, {
                    label: 'Google AdWords Strategy',
                    dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
                    dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
                    backgroundColor: '#FF3D00'
                }, {
                    label: 'New Brochures',
                    dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
                    dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
                    backgroundColor: '#3F51B5'
                }, {
                    label: 'Brochure Design Review',
                    dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
                    dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
                    backgroundColor: '#616161'
                }
            ];

        return data
    })();

    view: SchedulerViewType = 'week';

    views: SchedulerViews[] = ['day', 'week', 'month'];

    firstDayOfWeek: number = 1;

    hourStart: number = 7;

    hourEnd: number = 21;

    timelineDayScale: SchedulerTimelineDayScale = 'halfHour';

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
            scheduler = that.scheduler;

        scheduler.scrollToDate(new Date());

        document.querySelector('.options').addEventListener('change', function (event: CustomEvent): void {
            const target = event.target as HTMLElement,
                schedulerNativeElement = scheduler.nativeElement;

            if (target instanceof window.Smart.SwitchButton) {
                scheduler[target.id] = (<SwitchButton>event.target).checked;
            }
            else if (target.classList.contains('size-selector')) {
                let size: string,
                    type = target.id;

                schedulerNativeElement.classList.remove(`${type}-size-small`, `${type}-size-medium`, `${type}-size-large`);
                switch ((<SwitchButton>target).value) {
                    case '1':
                        size = 'small';
                        break;
                    case '2':
                        size = 'medium';
                        break;
                    default:
                        size = 'large';
                        break;
                }

                schedulerNativeElement.classList.add(`${type}-size-${size}`);
            }
            else if (target.classList.contains('color-selector')) {
                const color = event.detail.value, type = target.id;
                switch (type) {
                    case 'indicator':
                        schedulerNativeElement.style.setProperty('--smart-scheduler-current-time-indicator-background', color);
                        return;
                    case 'line-horizontal':
                        schedulerNativeElement.style.setProperty('--smart-scheduler-day-week-view-hour-color', color);
                        return;
                    case 'line-vertical':
                        schedulerNativeElement.style.setProperty('--smart-scheduler-day-week-view-vertical-line-color', color);
                        return;
                    case 'shader':
                        schedulerNativeElement.style.setProperty('--smart-scheduler-shader-background', color);
                        return;
                }
            }
        });
    };
}