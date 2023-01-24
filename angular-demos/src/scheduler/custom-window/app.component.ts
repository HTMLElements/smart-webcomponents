import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent, SchedulerEvent, SchedulerViews, Scheduler } from 'smart-webcomponents-angular/scheduler';
import { Window } from 'smart-webcomponents-angular/window';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    dataSource: SchedulerEvent[] = (() => {
        const today = new Date();

        today.setHours(0, 0, 0, 0);

        const data = [
            {
                label: 'World Climate Changes',
                dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3, 12, 0, 0),
                dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3, 15, 30, 0),
                allDay: true,
                image: './../../../src/images/carousel-square-7.jpg',
                speaker: ['Linda', 'Maria'],
                backgroundColor: '#F4511E'
            },
            {
                label: 'Technologies',
                dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 10, 0, 0),
                dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 12, 0, 0),
                allDay: true,
                image: './../../../src/images/smart-home-3148026_1920.jpg',
                speaker: ['Christopher', 'Nina'],
                backgroundColor: '#7986CB'
            },
            {
                label: 'Company Strategy',
                dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6, 0, 0),
                dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 22, 30, 0),
                allDay: true,
                image: './../../../src/images/digital-marketing-1725340_960_720.jpg',
                speaker: ['Michael', 'Ivan'],
                backgroundColor: '#039BE5'
            }, {
                label: 'Marketing',
                dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6, 0, 0),
                dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 22, 0, 0),
                image: './../../../src/images/store.jpg',
                speaker: ['Marian'],
                backgroundColor: '#8E24AA'
            }, {
                label: 'Workflow',
                dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0, 0),
                dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 0, 0),
                image: './../../../src/images/office-1209640_960_720.jpg',
                speaker: ['Michelle', 'Christy', 'Nicole'],
                backgroundColor: '#616161'
            }, {
                label: 'Team Building',
                dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 10, 0, 0),
                dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 18, 30, 0),
                image: './../../../src/images/carousel-square-4.jpg',
                speaker: ['Natalie'],
                backgroundColor: '#3F51B5'
            }
        ];

        return data
    })();

    view: string = 'month';

    views: SchedulerViews | undefined[] = [];

    firstDayOfWeek: number = 1;

    windowCustomizationFunction: Function = (target: Window, type: string, event: SchedulerEvent): void => {
        //We want to constomize the event window, so if the window is type 'confirm' return
        if (type) {
            return;
        }

        const scheduler = document.querySelector('smart-scheduler') as Scheduler,
            events = scheduler.events;

        target.footerPosition = 'none';
        target.label = 'Events';

        let container = target.querySelector('.custom-container');

        if (!container) {
            //Empty the window
            target.clear();
            container = document.createElement('div');
            container.classList.add('custom-container');
        }

        container.remove();
        container.innerHTML = '';

        if (!scheduler.containsEvent(event)) {
            //A cell is clicked. Show all events for the target cell
            for (let i = 0; i < events.length; i++) {
                const e = events[i];

                if ((<Date>e.dateStart).getTime() >= (<Date>event.dateStart).getTime() && (<Date>e.dateEnd).getTime() <= (<Date>event.dateEnd).getTime()) {
                    container.appendChild(this.createCard(events[i] as any));
                }
            }
        }
        else {
            //Event is clicked. Show the event
            container.appendChild(this.createCard(event as any));
        }

        //Show placeholder if no events
        if (!container.innerHTML) {
            container.innerHTML = 'No events at this time';
        }

        target.appendChild(container);
    }

    createCard(event: { dateStart: Date, dateEnd: Date, label: string, speaker: string[], image: string } ): HTMLElement {
        const token = document.createElement('div'),
            scheduler = document.querySelector('smart-scheduler') as Scheduler,
            dateTimeObject = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

        token.classList.add('event-token');
        token.innerHTML = `
        <div class="content-section">
            <label>From:</label>
            <div class="date-start"></div>
        </div>
        <div class="content-section">
            <label>To:</label>
            <div class="date-end"></div>
        </div>
        <div class="content-section">
            <label>Topic:</label>
            <div class="label"></div>
        </div>
        <div class="content-section">
            <label>Speaker:</label>
            <div class="speaker"></div>
        </div>
        <div class="content-section">
            <img class="image"></div>
        </div>`;

        token.querySelector('.date-start').innerHTML = event.dateStart.toLocaleDateString(scheduler.locale, dateTimeObject as any);
        token.querySelector('.date-end').innerHTML = event.dateEnd.toLocaleDateString(scheduler.locale, dateTimeObject as any);
        token.querySelector('.label').innerHTML = event.label || '';
        token.querySelector('.speaker').innerHTML = event.speaker ? event.speaker.toString() : '';
        (<HTMLImageElement>token.querySelector('.image')).src = event.image || '';

        return token;
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
    }
}