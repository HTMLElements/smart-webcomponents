import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';
import { GetData } from './../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

    dataSource = new window.Smart.DataAdapter({
        virtualDataSourceLength: 100000,
        virtualDataSourceCache: true,
        virtualDataSource: function (resultCallbackFunction: Function, details: any) {
            const that = this;

            if (that.timer) {
                clearTimeout(that.timer);
            }

            // Timer simulates AJAX data request.	
            that.timer = setTimeout(function () {
                let data = GetData(100000).slice(0);
				/*
					The details argument has the following properties: 'sorting', 'filtering', 'grouping' and 'action'.
					The 'action' could be 'dataBind', 'scroll', 'sort', 'filter', 'group', 'pageIndexChange' and 'pageSizeChange'.
					'sorting' is an array with sorted columns and sort orders.
					'filtering' is an array with filtered columns and Smart.FilterGroup objects.
					'filterOperator' is the operator between the filters of different columns ('and' or 'or')
					'grouping' is an array of grouped columns.
				*/
                // Sorts the data. 
                if (details.sorting.length > 0 && (details.action === 'sort' || details.action === 'dataBind')) {
                    let sortColumns = [];
                    let sortOrders = [];
                    for (let dataField in details.sorting) {
                        const sortOrder = details.sorting[dataField].sortOrder;
                        sortColumns.push(dataField);
                        sortOrders.push(sortOrder);
                    }
                    that.sortedData = window.Smart.DataAdapter.Sort(data, sortColumns, sortOrders);
                }
                else if (details.sorting.length === 0) {
                    that.sortedData = null;
                }

                if (that.sortedData) {
                    data = that.sortedData;
                }

                // Filters the data.
                if (details.filtering.length > 0 && (details.action === 'sort' || details.action === 'filter' || details.action === 'dataBind')) {
                    let filterColumns = [];
                    let filters = [];
                    for (let dataField in details.filtering) {
                        const filter = details.filtering[dataField];
                        filterColumns.push(dataField);
                        filters.push(filter);
                    }
                    that.filteredData = window.Smart.DataAdapter.Filter(data, filterColumns, filters, undefined, details.filterOperator);
                }
                else if (details.filtering.length === 0) {
                    that.filteredData = null;
                }

                if (that.filteredData) {
                    data = that.filteredData;
                }

                // This callback returns the data to be displayed in the Grid. If virtualDataSourceLength is changed, updates the scroll height and pages count, too.
                resultCallbackFunction({
                    dataSource: data.slice(details.first, details.last),
                    virtualDataSourceLength: data.length
                });
            }, 500);
        },
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'quantity: number',
            'price: number',
            'total: number'
        ]
    });

    filtering: Boolean = true;

    filterRow: Boolean = true;

    paging: Boolean = true;

    pageIndex: Number = 0;

    pageSize: Number = 10;

    sortMode: String = 'many';

    columns: TableColumn[] = [{
        label: 'id',
        dataField: 'id',
        dataType: 'number'
    },
    {
        label: 'First Name',
        dataField: 'firstName',
        dataType: 'string'
    },
    {
        label: 'Last Name',
        dataField: 'lastName',
        dataType: 'string'
    },
    {
        label: 'Product Name',
        dataField: 'productName',
        dataType: 'string'
    },
    {
        label: 'Quantity',
        dataField: 'quantity',
        dataType: 'number'
    },
    {
        label: 'Price',
        dataField: 'price',
        dataType: 'number'
    },
    {
        label: 'Total',
        dataField: 'total',
        dataType: 'number'
    }];


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