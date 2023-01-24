import { Component, ViewChild, OnInit, AfterViewInit,ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GanttChartComponent } from 'smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    nonworkingDays = [0, 6];

    nonworkingHours = [[18, 6]];

    durationUnit = 'day';

    view = 'week';

    treeSize = '25%';

    disableSelection = true;

    keyboardNavigation = true;

    taskColumns = [
        {
            label: 'Tasks',
            value: 'label',
            size: '40%'
        },
        {
            label: 'Expected End Date',
            value: 'dateEnd'
        },
        {
            label: 'Duration (days)',
            value: 'duration'
        }
    ];

    dataSource = [
        {
            label: 'Review announcement blog',
            dateStart: '2021-01-10',
            dateEnd: '2021-01-15'
        },
        {
            label: 'Company dogs email newsletter',
            dateStart: '2021-01-01',
            dateEnd: '2021-01-05'
        },
        {
            label: 'Launch new home page',
            dateStart: '2021-01-11',
            dateEnd: '2021-01-16'
        },
        {
            label: 'Establish Mars Colony',
            dateStart: '2021-01-17',
            dateEnd: '2021-01-19'
        },
        {
            label: 'Choose flight menu',
            dateStart: '2021-01-02',
            dateEnd: '2021-01-06'
        },
        {
            label: 'Find crew',
            dateStart: '2021-01-01',
            dateEnd: '2021-01-10'
        },
        {
            label: 'Test hibernation boxes',
            dateStart: '2021-01-24',
            dateEnd: '2021-01-28'
        }
    ];

    buttonClickHandler() {
        const that = this;

        that.ganttChart.adjustToNonworkingTime = !that.ganttChart.adjustToNonworkingTime;
        that.button.innerHTML = 'Click to ' + (that.ganttChart.adjustToNonworkingTime ? 'Disable' : 'Enable');
    }

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code
    };
}