import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { TableColumn, TableComponent } from 'smart-webcomponents-angular/table';
import { SchedulerComponent, DataAdapter, SchedulerViewType, SchedulerEvent } from 'smart-webcomponents-angular/scheduler';

declare global {
    interface Window {
        demoServer: any;
        query: HTMLElement;
        data: any;
        alasql: any;
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    view: SchedulerViewType = 'month';

    dateCurrent: Date = new Date(2021, 0, 25);

    keyboardNavigation: boolean = true;

    columns: object[] = [
        { label: 'Id', dataField: 'id', width: 50 },
        { label: 'Label', dataField: 'label' },
        {
            label: 'Date Start', dataField: 'dateStart',
            formatFunction: (settings: { value: string }) => settings.value = new Date(settings.value).toString()
        },
        {
            label: 'Date End', dataField: 'dateEnd',
            formatFunction: (settings: { value: string }) => settings.value = new Date(settings.value).toString()
        },
        { label: 'Description', dataField: 'description' },
        { label: 'All Day', dataField: 'allDay' }
    ];

    refreshData(action: string, eventItem: SchedulerEvent) {
        const that = this,
            scheduler = that.scheduler,
            eventDateStart = eventItem.dateStart as Date,
            eventDateEnd = eventItem.dateEnd as Date;
        let newData;

        switch (action) {
            case 'update':
                newData = window.demoServer.getData({
                    action: 'update',
                    query: `SET Label = "${eventItem.label}", DateStart = "${eventDateStart.toISOString()}", DateEnd = "${eventDateEnd.toISOString()}", Description = "${eventItem.description}", AllDay = "${!!eventItem.allDay}" 
                            WHERE EventID = ${eventItem.id};`
                });
                break;
            case 'insert':
                newData = window.demoServer.getData({
                    action: 'insert',
                    query: `("${eventItem.label}","${eventDateStart.toISOString()}","${eventDateEnd.toISOString()}","${eventItem.description || ''}","${!!eventItem.allDay}");`
                });
                break;
            case 'delete':
                newData = window.demoServer.getData({
                    action: 'delete',
                    query: `EventID = ${eventItem.id};`
                });
                break;
        }
        if (newData) {
            //Update the Scheduler
            scheduler.dataSource = new window.Smart.DataAdapter({
                dataSource: newData,
                dataSourceType: 'array',
                dataFields: [
                    { name: 'id', map: 'EventID', dataType: 'number' },
                    { name: 'label', map: 'Label', dataType: 'string' },
                    { name: 'dateStart', map: 'DateStart', dataType: 'string' },
                    { name: 'dateEnd', map: 'DateEnd', dataType: 'string' },
                    { name: 'description', map: 'Description', dataType: 'string' },
                    { name: 'allDay', map: 'AllDay', dataType: 'string' }
                ]
            });
        }
    };

    // In this sample, we use http://alasql.org/ to show how to use SQL queries with Smart.Grid
    DemoServer() {
        const that = this,
            alasql = window.alasql;

        alasql.options.cache = false;

        //Create the DataBase Table
        alasql('CREATE TABLE Events (EventID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,Label NVARCHAR(255),DateStart NVARCHAR(255), DateEnd NVARCHAR(255), Description NVARCHAR(255),AllDay NVARCHAR(255))');
        alasql('INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ("Prepare Documentation","2021-01-25T22:00:00.000Z","2021-01-30T22:00:00.000Z","Prepare the documentation for tommorow\'s release","true")');
        alasql('INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ("Release Notes","2021-01-22T22:00:00.000Z","2021-01-25T22:00:00.000Z","Add release notes to the commits.","false")');
        alasql('INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ("Invite Customers For Discussion","2021-01-23T22:00:00.000Z","2021-01-28T22:00:00.000Z","Invite potential customers to a brief descussion on the products.","false")');
        alasql('INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ("Preview Customer Feedback","2021-01-04T22:00:00.000Z","2021-01-07T22:00:00.000Z","Preview the feedback from the customers.","false")');
        alasql('INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ("Meeting With A Major Client","2021-01-05T22:00:00.000Z","2021-01-06T22:00:00.000Z","Have a meeting with a big client from the states.","false")');
        return {
            getData: function (request) {
                return executeSql(request);
            },
        };

        function executeSql(request) {
            const table = that.table,
                scheduler = that.scheduler;
            let lastId;

            if (request) {
                // Deletes a Row.
                if (request.action === 'delete') {
                    const sqlDeleteQuery = 'DELETE FROM Events WHERE ' + request.query;
                    window.alasql(sqlDeleteQuery);
                    window.query.innerHTML = sqlDeleteQuery;
                }
                // Adds a Row.
                else if (request.action === 'insert') {
                    const sqlAddQuery = 'INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ' + request.query;
                    window.alasql(sqlAddQuery);
                    window.query.innerHTML = sqlAddQuery;
                }
                // Updates a Row.
                else if (request.action === 'update') {
                    const sqlUpdateQuery = 'UPDATE Events ' + request.query;
                    window.alasql(sqlUpdateQuery);
                    window.query.innerHTML = sqlUpdateQuery;
                }
            }
            else {
                window.query.innerHTML = '';
            }

            // SQL Select query.
            const sql = 'SELECT * FROM Events', result = window.alasql(sql);

            //Update the Table
            table.dataSource = new window.Smart.DataAdapter({
                dataSource: result,
                dataFields: [
                    { name: 'id', map: 'EventID', dataType: 'number' },
                    { name: 'label', map: 'Label', dataType: 'string' },
                    { name: 'dateStart', map: 'DateStart', dataType: 'string' },
                    { name: 'dateEnd', map: 'DateEnd', dataType: 'string' },
                    { name: 'description', map: 'Description', dataType: 'string' },
                    { name: 'allDay', map: 'AllDay', dataType: 'string' }
                ]
            });

            return result;
        }
    }

    handleDragEnd(event: CustomEvent) {
        const detail = event.detail,
            item = detail.item,
            newDates = detail.itemDateRange;

        if (newDates.dateStart && newDates.dateEnd) {
            item.dateStart = newDates.dateStart;
            item.dateEnd = newDates.dateEnd;

            this.refreshData('update', item);
        }
    }

    handleResizeEnd(event: CustomEvent) {
        const detail = event.detail,
            item = detail.item,
            newDates = detail.itemDateRange;

        item.dateStart = newDates.dateStart;
        item.dateEnd = newDates.dateEnd;

        this.refreshData('update', item);
    }

    handleItemUpdate(event: CustomEvent) {
        this.refreshData('update', event.detail.item);
    }

    handleItemRemove(event: CustomEvent) {
        this.refreshData('delete', event.detail.item);
    }

    handleItemInsert(event: CustomEvent) {
        this.refreshData('insert', event.detail.item);
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
        const that = this,
            scheduler = that.scheduler;

        window.demoServer = that.DemoServer();

        scheduler.dataSource = new window.Smart.DataAdapter({
            dataSource: window.demoServer.getData(),
            dataSourceType: 'array',
            dataFields: [
                { name: 'id', map: 'EventID', dataType: 'number' },
                { name: 'label', map: 'Label', dataType: 'string' },
                { name: 'dateStart', map: 'DateStart', dataType: 'string' },
                { name: 'dateEnd', map: 'DateEnd', dataType: 'string' },
                { name: 'description', map: 'Description', dataType: 'string' },
                { name: 'allDay', map: 'AllDay', dataType: 'string' }
            ]
        });
    };
}