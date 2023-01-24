import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CardComponent } from 'smart-webcomponents-angular/card';
import { MenuComponent } from 'smart-webcomponents-angular/menu';
import { GridComponent, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('card', { read: CardComponent, static: false }) card: CardComponent;
    @ViewChild('card2', { read: CardComponent, static: false }) card2: CardComponent;
    @ViewChild('card3', { read: CardComponent, static: false }) card3: CardComponent;
    @ViewChild('card4', { read: CardComponent, static: false }) card4: CardComponent;
    @ViewChild('card5', { read: CardComponent, static: false }) card5: CardComponent;
    @ViewChild('card6', { read: CardComponent, static: false }) card6: CardComponent;
    @ViewChild('card7', { read: CardComponent, static: false }) card7: CardComponent;
    @ViewChild('card8', { read: CardComponent, static: false }) card8: CardComponent;
    @ViewChild('card9', { read: CardComponent, static: false }) card9: CardComponent;
    @ViewChild('menu', { read: MenuComponent, static: false }) menu2: MenuComponent;

    sorting: object = {
        enabled: true
    };

    layout: object = {
        rowHeight: 95
    };

    dataSource: DataAdapter = new Smart.DataAdapter({
        dataSource: [
            {
                date: '9:44 AM',
                bug: 'Can each series in a line chart have its own dataCollection?',
                status: 'Complete',
            },
            {
                date: '11:52 AM',
                bug: 'Datatable editing within multiview',
                status: 'Pending',
            },
            {
                date: '12:37 AM',
                bug: 'Error: [DOM] Found 7 elements with non-unique id',
                status: 'Open',
            },
            {
                date: '1:18 PM',
                bug: 'Prevent clearing CSS added to node after filterByAll() in datatable filter',
                status: 'Open',
            },
            {
                date: '3:44 PM',
                bug: 'How to apply fewer options of drop down menu for specific rows of datatable?',
                status: 'Open',
            },
            {
                date: '8:20 PM',
                bug: 'Links in the upper right menu',
                status: 'Pending',
            },
            {
                date: '11:49 PM',
                bug: 'Document export is empty',
                status: 'Open',
            },
        ],
        dataFields: [
            'date: string',
            'bug: string',
            'status: string',
        ]
    });

    columns: Array<object> = [
        { label: 'Date', dataField: 'date', cellsAlign: 'center', align: 'center', width: '20%' },
        { label: 'Bug', dataField: 'bug', width: '60%' },
        {
            label: 'Status', dataField: 'status', width: '20%',
            formatFunction(settings: any): void {
                settings.template = '<span class="status-' + settings.row.data.status.toLowerCase() + '">' + settings.row.data.status + '</span>';
            }
        },
    ];

    ngOnInit(): void {
        // onInit code.

    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        "use strict";

        const that = this;

        that.card9.addEventListener('click', function (e) {
            let qaCards = [that.card2, that.card3, that.card4, that.card5, that.card6, that.card7];

            for (let i = 0; i < qaCards.length; i++) {
                if (qaCards[i].nativeElement.classList.contains('active')) {
                    qaCards[i].nativeElement.classList.remove('active');
                }
            }

            (<HTMLElement>e.target).closest('smart-card').classList.add('active');
        });
    };
}