import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';
import { ToastComponent } from 'smart-webcomponents-angular/toast';
import { TooltipComponent } from 'smart-webcomponents-angular/tooltip';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;
    @ViewChild('toast', { read: ToastComponent, static: false }) toast!: ToastComponent;
    @ViewChild('tooltip', { read: TooltipComponent, static: false }) tooltip!: TooltipComponent;
    @ViewChild('tooltip2', { read: TooltipComponent, static: false }) tooltip2!: TooltipComponent;

    billingData = (() => {
        let data = [];

        for (let i = 0; i < 15; i++) {
            data.push({
                date: new Date(2019, 15 - i, 19),
                amount: i > 5 ? 11.99 : 13.99,
                description: 'Netflix subscription',
                status: i === 0 ? 'Failed' : 'Successful',
                actions: ''
            });
        }

        return data
    })();

    dataSource = new window.Smart.DataAdapter({
        dataSource: this.billingData,
        dataFields: [
            'date: date',
            'amount: number',
            'description: string',
            'status: string'
        ]
    });

    freezeHeader: Boolean = true;

    selection: Boolean = true;

    columns: TableColumn[] = [{
        label: 'Date',
        dataField: 'date',
        dataType: 'date',
        formatFunction: (settings: any) => {
            const formattedValue = new window.Smart.Utilities.DateTime(settings.value).toString('MMM dd, yyyy');

            if (this.billingData[settings.row].status === 'Failed') {
                settings.template = `<div class="icons-container"><span class="material-icons status" style="color: #a80a0a;">cancel</span><span>${formattedValue}</span><span id="errorInfo" class="material-icons info">info</span></div>`;
            } else {
                settings.template = `<div class="icons-container"><span class="material-icons status" style="color: #61a617;">check_circle</span><span>${formattedValue}</span></div>`;
            }
        }
    },
    {
        label: '<div class="icons-container">Amount<span id="amountInfo" class="material-icons info">info</span></div>',
        dataField: 'amount',
        dataType: 'number',
        formatFunction: (settings: any) => {
            settings.template = '$' + settings.value;
        }
    },
    {
        label: 'Description',
        dataField: 'description',
        dataType: 'string'
    },
    {
        label: 'Status',
        dataField: 'status',
        dataType: 'number',
        formatFunction: (settings: any) => {
            if (settings.value === 'Failed') {
                settings.template = `<div class="icons-container"><span class="material-icons status">credit_card</span><strong style="color: #a80a0a;">${settings.value}</strong></div>`;
            } else {
                settings.template = `<div class="icons-container"><span class="material-icons status">credit_card</span><strong style="color: #61a617;">${settings.value}</strong></div>`;
            }
        }
    },
    {
        label: 'Actions',
        dataField: 'actions',
        dataType: 'string',
        formatFunction: (settings: any) => {
            if (this.billingData[settings.row].status === 'Failed') {
                settings.template = '';
            } else {
                settings.template = '<span class="material-icons">print</span><span class="material-icons">remove_red_eye</span><span class="material-icons">email</span>';
            }
        }
    }
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

        const table = this.table,
            toast = this.toast,
            amountTooltip = this.tooltip,
            errorTooltip = this.tooltip2,
            actionIcons = Array.from(document.querySelectorAll('td[data-field="actions"] .material-icons'));

        table.nativeElement.rows[0].allowSelect = false;
        amountTooltip.selector = 'amountInfo';
        errorTooltip.selector = 'errorInfo';
        actionIcons.forEach(icon => {
            icon.addEventListener('click', function (event) {
                const innerHTML = icon.innerHTML;
                let value;
                if (innerHTML === 'print') {
                    value = 'Print';
                }
                else if (innerHTML === 'remove_red_eye') {
                    value = 'View Document';
                }
                else {
                    value = 'Email Document';
                }
                toast.closeAll();
                toast.value = value;
                toast.open();
                event.stopPropagation();
            });
        });
    }
}