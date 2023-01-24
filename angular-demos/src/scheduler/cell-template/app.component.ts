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
	
    today: Date = new Date();

    currentYear: number = this.today.getFullYear();

    specialDates: object[] = [{
            date: new Date(this.currentYear, 11, 24),
            label: 'Christmas Eve',
            icon: 'christmas-eve'
        },
        {
            date: new Date(this.currentYear, 11, 25),
            label: 'Christmas Day',
            icon: 'santa'
        },
        {
            date: new Date(this.currentYear, 11, 26),
            label: 'Day After Christmas',
            icon: 'christmas'
        },
        {
            date: new Date(this.currentYear, 11, 8),
            label: 'Happy Birthday',
            icon: 'birthday'
        },
        {
            date: new Date(this.currentYear, 11, 14),
            label: 'Christmas Party',
            icon: 'celebration2'
        },
        {
            date: new Date(this.currentYear, 11, 31),
            label: 'New Year\'s Eve',
            icon: 'celebration'
        },
        {
            date: new Date(this.currentYear, 0, 1),
            label: 'First Day of the Year',
            icon: 'first-day'
        },
        {
            date: new Date(this.currentYear, 2, 3),
            label: 'Liberation Day',
            icon: 'liberty'
        },
        {
            date: new Date(this.currentYear, 4, 1),
            label: 'Labour Day',
            icon: 'labour'
        },
        {
            date: new Date(this.currentYear, 2, 8),
            label: 'Women\'s Day',
            icon: 'flowers'
        },
        {
            date: new Date(this.currentYear, 1, 14),
            label: 'Valentine\'s Day',
            icon: 'love'
        },
        {
            date: new Date(this.currentYear, 1, 14),
            label: 'Party Time',
            icon: 'party'
        },
        {
            date: new Date(this.currentYear, 0, 21),
            label: 'Happy Birthday',
            icon: 'celebration3'
        },
        {
            date: new Date(this.currentYear, 3, 12),
            label: 'Happy Birthday',
            icon: 'party2'
        },
        {
            date: new Date(this.currentYear, 5, 7),
            label: 'Happy Birthday',
            icon: 'party3'
        },
        {
            date: new Date(this.currentYear, 6, 15),
            label: 'Happy Birthday',
            icon: 'party4'
        },
        {
            date: new Date(this.currentYear, 7, 24),
            label: 'Happy Birthday',
            icon: 'party'
        },
        {
            date: new Date(this.currentYear, 8, 4),
            label: 'Happy Birthday',
            icon: 'party2'
        }
    ];
    
    dataSource: SchedulerEvent[] = [
        {
            label: 'Google AdWords Strategy',
            dateStart: new Date(this.currentYear, 11, 10, 9, 0),
            dateEnd: new Date(this.currentYear, 11, 11, 10, 30)
        }, {
            label: 'New Brochures',
            dateStart: new Date(this.currentYear, 11, 11, 11, 30),
            dateEnd: new Date(this.currentYear, 11, 12, 14, 15)
        }, {
            label: 'Brochure Design Review',
            dateStart: new Date(this.currentYear, 11, 12, 13, 15),
            dateEnd: new Date(this.currentYear, 11, 14, 16, 15)
        }, {
            label: 'Website Re-Design Plan',
            dateStart: new Date(this.currentYear, 11, 16, 16, 45),
            dateEnd: new Date(this.currentYear, 11, 20, 11, 15)
        },
        {
            label: 'Rollout of New Website and Marketing Brochures',
            dateStart: new Date(this.currentYear, 11, 2, 8, 15),
            dateEnd: new Date(this.currentYear, 11, 2, 10, 45)
        }, {
            label: 'Update Sales Strategy Documents',
            dateStart: new Date(this.currentYear, 11, 2, 12, 0),
            dateEnd: new Date(this.currentYear, 11, 2, 13, 45),
        }, {
            label: 'Non-Compete Agreements',
            dateStart: new Date(this.currentYear, 11, 3, 8, 15),
            dateEnd: new Date(this.currentYear, 11, 3, 9, 0)
        }, {
            label: 'Approve Hiring of John Jeffers',
            dateStart: new Date(this.currentYear, 11, 3, 10, 0),
            dateEnd: new Date(this.currentYear, 11, 3, 11, 15)
        }, {
            label: 'Update NDA Agreement',
            dateStart: new Date(this.currentYear, 11, 3, 11, 45),
            dateEnd: new Date(this.currentYear, 11, 3, 13, 45)
        }, {
            label: 'Update Employee Files with New NDA',
            dateStart: new Date(this.currentYear, 11, 3, 14, 0),
            dateEnd: new Date(this.currentYear, 11, 3, 16, 45)
        }, {
            label: 'Submit Questions Regarding New NDA',
            dateStart: new Date(this.currentYear, 11, 6, 8, 0),
            dateEnd: new Date(this.currentYear, 11, 6, 9, 30)
        }, {
            label: 'Submit Signed NDA',
            dateStart: new Date(this.currentYear, 11, 6, 12, 45),
            dateEnd: new Date(this.currentYear, 11, 6, 14, 0)
        }
    ];

    dateCurrent: Date = new Date(2021, 11, 1);

    view: SchedulerViewType = 'month';
   
    cellTemplate: Function = (cell: HTMLElement, date: Date) => {
        const scheduler = this.scheduler;
        let cellDate = date.getDate();

        if (cellDate === 1) {
            cell.textContent = new Intl.DateTimeFormat(scheduler.locale, { month: 'short', day: 'numeric' }).format(date);
        }
        else {
            cell.textContent = cellDate + '';
        }
        const year = date.getFullYear(), month = date.getMonth(), dayNumber = date.getDate();
        const holiday = this.specialDates.find((d: { date: Date}) => {
            const date = d.date;
            return date.getFullYear() === year && date.getMonth() === month && date.getDate() === dayNumber;
        }) as { label: 'string', icon: 'string' };

        if (holiday) {
            cell.classList.add('custom-cell');
            cell.setAttribute('holiday-name', holiday.label);
            cell.style.setProperty('--cell-icon', `url(./../../../src/images/icons/${holiday.icon}.svg)`);
        }
        else {
            cell.removeAttribute('holiday-name');
            cell.classList.remove('custom-cell');
            cell.style.removeProperty('--cell-icon');
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
    }
}