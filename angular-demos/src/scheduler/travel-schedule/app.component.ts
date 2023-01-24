import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { SchedulerComponent, SchedulerViewType, SchedulerEvent, SchedulerViews } from 'smart-webcomponents-angular/scheduler';

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

    data = function () {
        const data = [], airways = [
            {
                label: 'Airways 1',
                backgroundColor: '#e67c73b3',
            },
            {
                label: 'Airways 2',
                backgroundColor: '#0b8043b3'
            },
            {
                label: 'Airways 3',
                backgroundColor: '#7986cbb3'
            }
        ];

        const today = new Date(),
            currentYear = today.getFullYear(),
            currentMonth = today.getMonth();
        let monthDays: Date | number = new Date();

        monthDays.setDate(1);
        monthDays.setDate(32);
        monthDays.setDate(0);

        monthDays = monthDays.getDate();

        for (let i = 1; i < monthDays + 1; i++) {
            for (let a = 0; a < airways.length; a++) {
                const airway = Object.assign({}, airways[a]),
                    random = Math.round(Math.random() * 100),
                    hourStart = random % 23,
                    minutesStart = random % 59,
                    hourEnd = Math.min(23, hourStart + random % 6),
                    minutesEnd = Math.min(59, minutesStart + random % 29),
                    price = '$' + (Math.random() * 1000).toFixed(2);

                data.push(Object.assign(airway, {
                    dateStart: new Date(currentYear, currentMonth, i, hourStart, minutesStart),
                    hourStart: `${hourStart}:${minutesStart < 10 ? minutesStart + '0' : minutesStart}`,
                    hourEnd: `${hourEnd}:${minutesEnd < 10 ? minutesEnd + '0' : minutesEnd}`,
                    dateEnd: new Date(currentYear, currentMonth, i, hourEnd, minutesEnd),
                    price: price
                }));
            }
        }
        return data;
    }();

    lowestPriceEvent = null;

    getLowestPriceEvent(airways!: string[]) {
        const events = this.scheduler.events;

        let lowestPriceEvent;
        for (let i = 0; i < events.length; i++) {
            const d = this.data[i];
            if (airways && !airways.includes(d.label)) {
                continue;
            }
            if (!lowestPriceEvent) {
                lowestPriceEvent = d;
                continue;
            }
            const lowestPrice = parseFloat(lowestPriceEvent.price.slice(1)), currentPrice = parseFloat(d.price.slice(1));
            if (lowestPrice > currentPrice) {
                lowestPriceEvent = d;
            }
        }

        return lowestPriceEvent;
    }

    isLowestPriceEvent(eventObj: any) {
        const eventDateStart = eventObj.dateStart;
        let lowestPriceEvent = eventObj;

        //Find the lowest price airway for the Date
        for (let i = 0; i < this.data.length; i++) {
            const d = this.data[i],
                dateStart = d.dateStart;

            if (dateStart.getFullYear() === eventDateStart.getFullYear() &&
                dateStart.getMonth() === eventDateStart.getMonth() && dateStart.getDate() === eventDateStart.getDate()) {
                const lowestPrice = parseFloat(lowestPriceEvent.price.slice(1)),
                    currentPrice = parseFloat(d.price.slice(1));

                if (lowestPrice > currentPrice) {
                    lowestPriceEvent = d;
                }
            }
        }

        return lowestPriceEvent === eventObj
    }

    view: SchedulerViewType = 'month';

    dataSource: SchedulerEvent[] = this.data;

    views: SchedulerViews[] = ['month'];

    disableWindowEditor: boolean = true;

    disableDrag: boolean = true;

    disableResize: boolean = true;

    headerTemplate: Function = (header: HTMLElement) => {
        header.innerHTML = '<b class="scheduler-title">The Travel Schedule For The Current Month</b>';
    };

    eventTemplate: string = 'eventTemplate';

    cellTemplate: Function = (cell: HTMLElement, date: Date) => {
        const that = this;

        if (!that.lowestPriceEvent) {
            that.lowestPriceEvent = that.getLowestPriceEvent();
        }

        let cellDate: string | number = date.getDate();

        if (cellDate === 1) {
            cellDate = new Intl.DateTimeFormat(that.scheduler.locale, { month: 'short', day: that.scheduler.dayFormat as any }).format(date);
        }

        if (that.lowestPriceEvent) {
            const lowestPriceDate = that.lowestPriceEvent.dateStart;
            if (lowestPriceDate.getFullYear() === date.getFullYear() &&
                lowestPriceDate.getMonth() === date.getMonth() && lowestPriceDate.getDate() === date.getDate()) {
                cell.classList.add('best-price-cell');
            }
            else {
                cell.classList.remove('best-price-cell');
            }
        }

        cell.textContent = cellDate as string;
    };

    filterable: boolean = true;

    filter: Function = (eventObj: SchedulerEvent) => this.isLowestPriceEvent(eventObj)

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const options = document.querySelector('.options');
        const that = this;

        options.addEventListener('change', function (event) {
            const target = event.target,
                airways = Array.from(options.querySelectorAll('smart-check-box[checked]')).map((checkBox) => checkBox.textContent.trim());

            if (target instanceof window.Smart.CheckBox) {
                that.lowestPriceEvent = that.getLowestPriceEvent(airways);

                that.scheduler.filter = (eventObj: SchedulerEvent) => {
                    if (!airways.includes(eventObj.label)) {
                        return false;
                    }
                    else {
                        return that.isLowestPriceEvent(eventObj);
                    }
                }
            }
        })
    }
}