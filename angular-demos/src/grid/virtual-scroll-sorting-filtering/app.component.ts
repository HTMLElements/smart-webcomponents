import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    data = GetData(100000);
    timer = null;
    sortedData = [];
    filteredData = [];

    sorting = {
        enabled: true
    }

    filtering = {
        enabled: true
    }

    dataSource = new Smart.DataAdapter({
        virtualDataSourceLength: 100000,
        virtualDataSource: (resultCallbackFunction, details) => {
              const that = this;
			  if (that.timer) {
				clearTimeout(that.timer);
			  }
			  // Timer simulates AJAX data request.
			  that.timer = setTimeout(function() {
				let data = that.data.slice(0);
				/*
									The details argument has the following properties: 'sorting', 'filtering', 'grouping' and 'action'.
									The 'action' could be 'dataBind', 'scroll', 'sort', 'filter', 'group', 'pageIndexChange' and 'pageSizeChange'.
									'sorting' is an array with sorted columns and sort orders.
									'filtering' is an array with filtered columns and jqxFilterGroup objects.
									'grouping' is an array of grouped columns.
								*/
				// Sorts the data.
				if (
				  details.sorting.length > 0 &&
				  (details.action === "sort" || details.action === "dataBind")
				) {
				  let sortColumns = [];
				  let sortOrders = [];
				  for (let dataField in details.sorting) {
					const sortOrder = details.sorting[dataField].sortOrder;
					sortColumns.push(dataField);
					sortOrders.push(sortOrder);
				  }
				  that.sortedData = window.Smart.DataAdapter.Sort(
					data,
					sortColumns,
					sortOrders
				  );
				} else if (details.sorting.length === 0) {
				  that.sortedData = null;
				}
				if (that.sortedData) {
				  data = that.sortedData;
				}
				// Filters the data.
				if (
				  details.filtering.length > 0 &&
				  (details.action === "sort" ||
					details.action === "filter" ||
					details.action === "dataBind")
				) {
				  let filterColumns = [];
				  let filters = [];
				  for (let dataField in details.filtering) {
					const filter = details.filtering[dataField];
					filterColumns.push(dataField);
					filters.push(filter);
				  }
				  that.filteredData = window.Smart.DataAdapter.Filter(
					data,
					filterColumns,
					filters
				  );
				} else if (details.filtering.length === 0) {
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
			  }, 100);
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
    })

    columns = [
        'id',
        {
            label: 'First Name', dataField: 'firstName'
        },
        { label: 'Last Name', dataField: 'lastName' },
        { label: 'Product', dataField: 'productName' },
        { label: 'Quantity', dataField: 'quantity' },
        { label: 'Unit Price', dataField: 'price', cellsFormat: 'c2' },
        { label: 'Total', dataField: 'total', cellsFormat: 'c2' }
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

    }
}