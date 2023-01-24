import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { GetData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;

    columnLabels = {
        'en': {
            'firstName': 'First Name',
            'lastName': 'Last Name',
            'date': 'Date',
            'price': 'Price',
            'quantity': 'Quantity',
            'total': 'Total',
        },
        'de': {
            'firstName': 'Vorname',
            'lastName': 'Familienname',
            'price': 'Preis',
            'quantity': 'Quantität',
            'date': 'Datum',
            'total': 'Gesamt',
        }
    };

    sorting = {
        enabled: true
    }
    locale: 'de'
    messages: {
        'en': {
            'columnMenuItemSortAsc': 'Sort {{mode}}',
            'columnMenuItemSortDesc': 'Sort {{mode}}',
            'columnMenuItemRemoveSort': 'Remove Sort'
        },
        'de': {
            'columnMenuItemSortAsc': 'Sortieren {{mode}}',
            'columnMenuItemSortDesc': 'Sortieren {{mode}}',
            'columnMenuItemRemoveSort': 'Sortierung entfernen',
        }
    }
    dataSource = new Smart.DataAdapter({
        dataSource: GetData(50),
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'quantity: number',
            'price: number',
            'date: date',
            'total: number'
        ]
    })

    columns = [
        { label: this.columnLabels['de'].firstName, dataField: 'firstName' },
        { label: this.columnLabels['de'].lastName, dataField: 'lastName' },
        {
            label: this.columnLabels['de'].date, dataField: 'date', cellsFormat: 'D', formatSettings: {
                Intl: {
                    DateTimeFormat: {
                        dateStyle: 'full'
                    }
                }
            }
        },
        {
            label: this.columnLabels['de'].quantity, dataField: 'quantity'
        },
        {
            label: this.columnLabels['de'].price, dataField: 'price', cellsFormat: 'c2', formatSettings: {
                Intl: {
                    NumberFormat: {
                        style: 'currency',
                        currency: 'EUR'
                    }
                }
            }
        },
        {
            label: this.columnLabels['de'].total, dataField: 'total', cellsFormat: 'c2', formatSettings: {
                Intl: {
                    NumberFormat: {
                        style: 'currency',
                        currency: 'EUR'
                    }
                }
            }
        }
    ]

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const that = this;

        const radioButtons = document.querySelectorAll('smart-radio-button.language');
        // Defines the number format.
        const setFormat = function (column, locale) {
            if (column.dataField === 'total' || column.dataField === 'price') {
                column.formatSettings = {
                    Intl: {
                        NumberFormat: {
                            style: 'currency',
                            currency: locale === 'de' ? 'EUR' : (locale === 'enUK' ? 'GBP' : 'USD')
                        }
                    }
                };
            }
            if (column.dataField === 'date') {
                column.formatSettings = {
                    Intl: {
                        DateTimeFormat: {
                            dateStyle: 'full'
                        }
                    }
                };
            }
        };

        for (let i = 0; i < radioButtons.length; i++) {
            const radioButton = radioButtons[i];
            radioButton.addEventListener('change', function (event: CustomEvent) {
                const radioButton = event.target as HTMLElement;
                // apply localization.
                if (event.detail.value) {
                    // begin updating the grid.
                    that.grid.beginUpdate();
                    const locale = radioButton.id !== 'de' ? 'en' : 'de';
                    const columns = that.grid.columns as GridColumn[];
                    that.grid.locale = locale;
                    for (let i = 0; i < columns.length; i++) {
                        const column = columns[i];
                        column.label = that.columnLabels[locale][column.dataField];
                        setFormat(column, radioButton.id);
                    }
                    // end update and refresh.
                    that.grid.endUpdate(false);
                }
            });
        }
    }
}