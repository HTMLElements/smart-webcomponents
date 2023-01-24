import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent, SchedulerEvent, SchedulerViewType } from 'smart-webcomponents-angular/scheduler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    dataSource: SchedulerEvent[] = (() => {
        const today = new Date(), todayDate = today.getDate(), currentYear = today.getFullYear(), currentMonth = today.getMonth(), data = [
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

    view: SchedulerViewType = 'week';

    footerTemplate: Function = function (footerContainer: HTMLElement): void {
        if (footerContainer.querySelector('.custom-footer')) {
            return;
        }

        const scheduler = this,
            customFooter = document.createElement('div');

        customFooter.classList.add('custom-footer');

        customFooter.addEventListener('change', function (event) {
            const target = event.target as HTMLElement;

            if (target instanceof window.Smart.RadioButton) {
                const schedulerClassList = scheduler.classList;

                //Remove previous classes
                Array.from(schedulerClassList).forEach((c: string[]) => {
                    if (c.indexOf('color-') > -1) {
                        schedulerClassList.remove(c);
                    }
                });
                schedulerClassList.add('color-' + target.id);
            }
        });

        customFooter.innerHTML = `<label>Select an Event color:</label>
                              <smart-radio-button id="green">Green</smart-radio-button><smart-radio-button id="yellow">Yellow</smart-radio-button>
                              <smart-radio-button id="purple">Purple</smart-radio-button><smart-radio-button id="brown">Brown</smart-radio-button>`;
        footerContainer.appendChild(customFooter);
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