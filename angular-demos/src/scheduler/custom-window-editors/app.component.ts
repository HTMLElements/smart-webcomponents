import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent, SchedulerEvent } from 'smart-webcomponents-angular/scheduler';
import { Rating } from 'smart-webcomponents-angular/rating';
import { ProgressBar } from 'smart-webcomponents-angular/progressbar';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    dataSource: SchedulerEvent[] = (() => {
        const today = new Date(),
            todayDate = today.getDate(),
            currentYear = today.getFullYear(),
            currentMonth = today.getMonth(),
            data = [
                {
                    label: 'Google AdWords Strategy',
                    dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
                    dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
                    rating: 4,
                    progress: 35,
                    backgroundColor: '#039BE5'
                }, {
                    label: 'New Brochures',
                    dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
                    dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
                    rating: 2.5,
                    progress: 75,
                    backgroundColor: '#0B8043'
                }, {
                    label: 'Brochure Design Review',
                    dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
                    dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
                    rating: 5,
                    progress: 50,
                    backgroundColor: '#3F51B5'
                }
            ];

        return data
    })();

    view: string = 'week';

    firstDayOfWeek: number = 1;

    handleEditDialogOpen(event: CustomEvent): void {
        const scheduler = this.scheduler,
            editors = event.detail.editors;

        if (!editors) {
            return;
        }
        const schedulerEvent = event.detail.item,
            descriptionEditor = editors.description,
            dateStartEditor = editors.dateStart,
            dateEndEditor = editors.dateEnd,
            labelEditor = editors.label,
            allDayEditor = editors.allDay,
            repeatEditor = editors.repeat,
            editorsContainer = editors.description.parentElement;

        dateStartEditor.querySelector('.smart-element').disabled = true;
        dateEndEditor.querySelector('.smart-element').disabled = true;
        
        repeatEditor.classList.add('smart-hidden');
        allDayEditor.classList.add('smart-hidden');

        labelEditor.querySelector('.smart-element').placeholder = 'Enter a label...';
        descriptionEditor.querySelector('.smart-element').placeholder = 'Enter a description for the event..';

        //Rating Element
        let ratingElement = editorsContainer.querySelector('#eventRating');

        if (!ratingElement) {
            const elementContainer = document.createElement('div'),
                label = document.createElement('label');

            label.textContent = 'Rating: ';
            elementContainer.classList.add('smart-scheduler-window-editor');

            elementContainer.appendChild(label);

            ratingElement = document.createElement('smart-rating') as Rating;
            ratingElement.id = 'eventRating';

            elementContainer.append(ratingElement);
            editorsContainer.appendChild(elementContainer);
        }

        ratingElement.value = schedulerEvent.rating || 1;

        //ProgressBar
        let progressElement = editorsContainer.querySelector('#eventProgress');

        if (!progressElement) {
            const elementContainer = document.createElement('div'),
                label = document.createElement('label');

            label.textContent = 'Progress: ';

            elementContainer.classList.add('smart-scheduler-window-editor');
            elementContainer.appendChild(label);

            progressElement = document.createElement('smart-progress-bar') as ProgressBar;
            progressElement.id = 'eventProgress';
            progressElement.showProgressValue = true;

            elementContainer.append(progressElement);
            editorsContainer.appendChild(elementContainer);
        }
        progressElement.value = schedulerEvent.progress || 0;
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
    };
}