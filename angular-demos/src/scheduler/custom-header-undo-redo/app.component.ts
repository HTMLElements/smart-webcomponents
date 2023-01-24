import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent, SchedulerEvent, SchedulerViewType, SchedulerHeaderViewPosition } from 'smart-webcomponents-angular/scheduler';
import { Button } from 'smart-webcomponents-angular/button';


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
                    dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30)
                }, {
                    label: 'New Brochures',
                    dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
                    dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15)
                }, {
                    label: 'Brochure Design Review',
                    dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
                    dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15)
                }
            ];

        return data
    })();

    view: SchedulerViewType = 'day';

    headerViewPosition: SchedulerHeaderViewPosition = 'near';

    headerTemplate: Function = (header: HTMLElement) => {
        const that = this;

        if (header.querySelector('.quick-controls')) {
            return;
        }

        const controlsContainer = document.createElement('div');

        controlsContainer.classList.add('quick-controls');

        controlsContainer.innerHTML = '<label>Quick Settings:</label>' +
            '<smart-button disabled class="undo" title="Undo"><span class="icon"></span></smart-button>' +
            '<smart-button disabled class="redo" title="Redo"><span class="icon"></span></smart-button>';
        controlsContainer.addEventListener('click', that.buttonHandler.bind(that));

        header.appendChild(controlsContainer);
    }

    buttonHandler(event: CustomEvent) {
        const target = event.target as HTMLElement,
            scheduler = this.scheduler;

        if (!target.closest) {
            return;
        }
        if (target.closest('.smart-button.undo')) {
            scheduler.undo();
        }
        else if (target.closest('.smart-button.redo')) {
            scheduler.redo();
        }

        this.updateButtons();
    }

    updateButtons() {
        const scheduler = this.scheduler.nativeElement,
            buttonUndo = scheduler.querySelector('.smart-button.undo') as Button,
            buttonRedo = scheduler.querySelector('.smart-button.redo') as Button;

        if (buttonUndo) {
            buttonUndo.disabled = !scheduler.canUndo();
        }
        if (buttonRedo) {
            buttonRedo.disabled = !scheduler.canRedo();
        }
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