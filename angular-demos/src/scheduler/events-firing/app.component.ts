import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { SchedulerComponent, SchedulerEvent, SchedulerViewType } from 'smart-webcomponents-angular/scheduler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;
    @ViewChild('log', { read: ElementRef, static: false }) log: ElementRef;

    dataSource: SchedulerEvent[] = (() => {
        const today = new Date(),
            currentDate = today.getDate(),
            currentYear = today.getFullYear(),
            currentMonth = today.getMonth();

        return [
            {
                label: 'Brochure Design Review',
                dateStart: new Date(currentYear, currentMonth, currentDate + 2, 13, 15),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 16, 15),
                backgroundColor: '#00C853'
            }, {
                label: 'Website Re-Design Plan',
                dateStart: new Date(currentYear, currentMonth, 16, 16, 45),
                dateEnd: new Date(currentYear, currentMonth, 20, 11, 15),
                backgroundColor: '#00ACC1'
            },
            {
                label: 'Rollout of New Website and Marketing Brochures',
                dateStart: new Date(currentYear, currentMonth, 2, 8, 15),
                dateEnd: new Date(currentYear, currentMonth, 2, 10, 45),
                backgroundColor: '#FFA000'
            }, {
                label: 'Update Sales Strategy Documents',
                dateStart: new Date(currentYear, currentMonth, 2, 12, 0),
                dateEnd: new Date(currentYear, currentMonth, 2, 13, 45),
                backgroundColor: '#7986CB'
            }, {
                label: 'Non-Compete Agreements',
                dateStart: new Date(currentYear, currentMonth, currentDate, 8, 15),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 9, 0),
                backgroundColor: '#9575CD'
            }, {
                label: 'Approve Hiring of John Jeffers',
                dateStart: new Date(currentYear, currentMonth, currentDate, 10, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 15),
                backgroundColor: '#EF5350'
            }, {
                label: 'Update NDA Agreement',
                dateStart: new Date(currentYear, currentMonth, currentDate, 11, 45),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 13, 45),
                backgroundColor: '#5D4037'
            }, {
                label: 'Update Employee Files with New NDA',
                dateStart: new Date(currentYear, currentMonth, currentDate, 14, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 16, 45),
                backgroundColor: '#E040FB'
            }, {
                label: 'Compete Agreements',
                dateStart: new Date(currentYear, currentMonth, currentDate, 8, 15),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 9, 0),
                backgroundColor: '#FB8C00'
            }, {
                label: 'Approve Hiring of Mark Waterberg',
                dateStart: new Date(currentYear, currentMonth, currentDate, 10, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 15),
                backgroundColor: '#BF360C'
            }, {
                label: 'Update NBA Contracts',
                dateStart: new Date(currentYear, currentMonth, currentDate, 11, 45),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 13, 45),
                backgroundColor: '#00897B'
            }, {
                label: 'Update Employees Information',
                dateStart: new Date(currentYear, currentMonth, currentDate, 14, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 16, 45),
                backgroundColor: '#9575CD'
            },
            {
                label: 'Customer Feedback Report Analysis',
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9, 30),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 30),
                backgroundColor: '#9C27B0'
            }, {
                label: 'Prepare Shipping Cost Analysis Report',
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 30),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 30),
                backgroundColor: '#00C853'
            }, {
                label: 'Provide Feedback on Shippers',
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 14, 15),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 16, 0),
                backgroundColor: '#FFA726'
            }, {
                label: 'Select Preferred Shipper',
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 17, 30),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 20, 0),
                backgroundColor: '#9575CD'
            }, {
                label: 'Complete Shipper Selection Form',
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 8, 30),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
                backgroundColor: '#00B8D4'
            }, {
                label: 'Upgrade Server Hardware',
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 14, 15),
                backgroundColor: '#0097A7'
            }, {
                label: 'Upgrade Personal Computers',
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 14, 45),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 16, 30),
                backgroundColor: '#9575CD'
            }, {
                label: 'Upgrade Apps to Windows RT or stay with WinForms',
                dateStart: new Date(currentYear, currentMonth, currentDate + 2, 10, 30),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 13, 0),
                backgroundColor: '#00ACC1'
            }, {
                label: 'Estimate Time Required to Touch-Enable Apps',
                dateStart: new Date(currentYear, currentMonth, currentDate + 2, 14, 45),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 16, 30),
                backgroundColor: '#EF6C00'
            }, {
                label: 'Report on Tranistion to Touch-Based Apps',
                dateStart: new Date(currentYear, currentMonth, currentDate + 2, 18, 30),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 19, 0),
                backgroundColor: '#3F51B5'
            }, {
                label: 'Submit New Website Design',
                dateStart: new Date(currentYear, currentMonth, currentDate + 5, 8, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 5, 10, 0),
                backgroundColor: '#E57373'
            }, {
                label: 'Create Icons for Website',
                dateStart: new Date(currentYear, currentMonth, currentDate + 5, 11, 30),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 5, 13, 15),
                backgroundColor: '#C51162'
            }
        ];
    })();

    view: SchedulerViewType = 'week';

    handleSchedulerEvent(e: CustomEvent) {
        this.log.nativeElement.innerHTML += e.type + '<br />';
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

        //     const scheduler = document.querySelector('smart-scheduler'),
        //         log = document.getElementById('log'),
        //         eventNames = ['change', 'viewChange', 'closing', 'dragStart', 'dragEnd',
        //             'resizeStart', 'resizeEnd', 'progressChangeStart', 'editDialogOpening', 'editDialogOpen', 'editDialogClose', 'editDialogClosing',
        //             'contextMenuOpen', 'contextMenuOpening', 'contextMenuClose', 'contextMenuClosing', 'eventMenuOpen', 'eventMenuOpening',
        //             'eventMenuClose', 'eventMenuClosing', 'dateMenuOpen', 'dateMenuClose', 'viewMenuOpen', 'viewMenuClose',
        //             'notificationOpen', 'notificationClose', 'itemRemove', 'itemInsert', 'itemUpdate', 'itemClick', 'eventShortcutKey', 'dateChange'];

        //     for (let i = 0; i < eventNames.length; i++) {
        //         scheduler.addEventListener(eventNames[i], function (e) {
        //             this.log.nativeElement.innerHTML += e.type + '<br />';
        //         });
        //     }
        // };
    }
}