import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { TreeComponent } from 'smart-webcomponents-angular/tree';
import { SchedulerComponent, SchedulerEvent, SchedulerViews, SchedulerViewType } from 'smart-webcomponents-angular/scheduler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('tree', { read: TreeComponent, static: false }) tree!: TreeComponent;
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    rooms: { label: string, value: number, dateStart!: Date, dateEnd!: Date, backgroundColor: string, color: string }[] = (() => {
        const today = new Date(),
            todayDate = today.getDate(),
            currentYear = today.getFullYear(),
            currentMonth = today.getMonth();

        return [
            {
                label: 'Room 406',
                value: 406,
                dateStart: new Date(currentYear, currentMonth, 26, 0, 0),
                dateEnd: new Date(currentYear, currentMonth, 31, 0, 0),
                backgroundColor: '#D50000',
                color: '#ffffff'
            },
            {
                label: 'Room 107',
                value: 107,
                dateStart: new Date(currentYear, currentMonth, 23, 0, 0),
                dateEnd: new Date(currentYear, currentMonth, 26, 0, 0),
                backgroundColor: '#FFD600',
                color: '#000000'
            },
            {
                label: 'Room 212',
                value: 212,
                dateStart: new Date(currentYear, currentMonth, todayDate - 2, 0, 0),
                dateEnd: new Date(currentYear, currentMonth, todayDate + 3, 0, 0),
                backgroundColor: '#00C853',
                color: '#000000'
            },
            {
                label: 'Room 309',
                value: 309,
                dateStart: new Date(currentYear, currentMonth, 5, 0, 0),
                dateEnd: new Date(currentYear, currentMonth, 8, 0, 0),
                backgroundColor: '#0091EA',
                color: '#ffffff'
            },
            {
                label: 'Room 111',
                selected: true,
                value: 111,
                backgroundColor: '#C51162',
                color: '#000000'
            },
            {
                label: 'Room 207',
                value: 207,
                backgroundColor: '#9CCC65',
                color: '#000000'
            },
            {
                label: 'Room 208',
                value: 208,
                backgroundColor: '#9E9E9E',
                color: '#000000'
            },
            {
                label: 'Room 305',
                value: 305,
                backgroundColor: '#FFD740',
                color: '#000000'
            },
            {
                label: 'Room 401',
                value: 401,
                backgroundColor: '#9C27B0',
                color: '#ffffff'
            },
            {
                label: 'Room 101',
                value: 101,
                backgroundColor: '#00897B',
                color: '#ffffff'
            },
            {
                label: 'Room 102',
                value: 102,
                backgroundColor: '#AB47BC',
                color: '#ffffff'
            },
            {
                label: 'Room 103',
                value: 103,
                backgroundColor: '#FDD835',
                color: '#000000'
            },
            {
                label: 'Room 204',
                value: 204,
                backgroundColor: '#40C4FF',
                color: '#000000'
            },
            {
                label: 'Room 302',
                value: 302,
                backgroundColor: '#1A237E',
                color: '#ffffff'
            },
            {
                label: 'Room 408',
                value: 408,
                backgroundColor: '#B2FF59',
                color: '#000000'
            },
            {
                label: 'Room 109',
                value: 109,
                backgroundColor: '#EA80FC',
                color: '#000000'
            }
        ]
    })();

    dataSource: SchedulerEvent[] = this.rooms.filter((i, index) => index < 5);

    view: SchedulerViewType = 'month';

    views: SchedulerViews[] = ['month', 'timelineMonth'];

    treeDataSource: object[] = [
        {
            label: 'Hotel All Seasons',
            expanded: true,
            items: this.rooms.filter((i, index) => index > 4)
        }
    ];

    allowDrag: boolean = true;

    allowDrop: boolean = true;

    sorted: boolean = true;

    handleTreeDragStart(event: CustomEvent) {
        if (event.detail.item instanceof window.Smart.TreeItemsGroup) {
            event.preventDefault();
        }
    }

    handleTreeDragEnd(event: CustomEvent) {
        const item = event.detail.item,
            schedulerCell = event.detail.target.closest('.smart-scheduler-cell');

        if (!schedulerCell) {
            return;
        }

        const scheduler = this.scheduler;

        scheduler.getCellDateRange(schedulerCell).then(cellDateRange => {
            const colorData = this.rooms.find((r) => r.value === item.value);

            if (scheduler.nativeElement.contains(schedulerCell)) {
                scheduler.insertEvent({
                    label: item.label,
                    value: item.value,
                    dateStart: cellDateRange.dateStart,
                    dateEnd: cellDateRange.dateEnd,
                    backgroundColor: colorData.backgroundColor,
                    color: colorData.color
                } as SchedulerEvent);

                this.tree.removeItem(item);
            }
        })
    }

    handleSchedulerDragEnd(event: CustomEvent) {
        const item = event.detail.item,
            target = event.detail.target,
            tree = this.tree,
            scheduler = this.scheduler;

        if (!tree.nativeElement.contains(event.detail.target) && tree !== target) {
            return;
        }
        
        scheduler.removeEvent(item);
        tree.insert({ label: item.label, value: item.value }, '0.1');
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