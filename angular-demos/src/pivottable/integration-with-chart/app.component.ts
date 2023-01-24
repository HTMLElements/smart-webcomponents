import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { PivotTableComponent } from 'smart-webcomponents-angular/pivottable';
import { GeneratePivotData } from './../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
    @ViewChild('pivottable', { read: PivotTableComponent, static: false }) pivottable!: PivotTableComponent;

    columnTotals = true;
    dataSource = GeneratePivotData(300, 3);
    freezeHeader = true;
    keyboardNavigation = true;
    columns = [
        { label: 'Continent', dataField: 'continent', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'City', dataField: 'city', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'Year', dataField: 'year', dataType: 'number', allowPivot: true, pivot: true },
        { label: 'Quarter', dataField: 'quarter', dataType: 'string', allowPivot: true, pivot: true },
        { label: 'Revenue', dataField: 'revenue', dataType: 'number', summary: 'sum', summarySettings: { prefix: '$' } }
    ];

    caption = '';
    description = '';
    showLegend = true;
    legendLayout = { flow: 'vertical', width: 100, height: 500, left: 1070, top: 50 };
    padding = { left: 5, top: 5, right: 150, bottom: 5 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    borderLineWidth = 0;
    xAxis = {
        dataField: 'Period',
        gridLines: {
            visible: false
        },
        type: 'basic'
    };
    colorScheme = 'scheme28';
    seriesGroups = [
        {
            type: 'column',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            valueAxis: {
                description: 'Revenue',
                axisSize: 'auto'
            },
            series: []
        }
    ];

    continents = ['Africa', 'Asia', 'Australia', 'Europe', 'North America', 'South America'];
    currentYear = new Date().getFullYear();
    years = [this.currentYear - 2, this.currentYear - 1, this.currentYear];
    expandedColumns = [];
    expandedRows = [];
    aggregatedData: any[];

    getInitialData() {
        const that = this,
            continentsDataOnly = that.aggregatedData.filter(dataPoint => dataPoint.level === 0),
            series = that.continents.map(continent => ({ dataField: continent, displayText: continent })),
            dataSource = [];

        that.years.forEach(year => dataSource.push({ Period: year }));

        for (const aggregatedDataPoint of continentsDataOnly) {
            for (const column in aggregatedDataPoint) {
                if (column.indexOf('TOTAL') !== -1 && /_Q\d_/.test(column) === false) {
                    // process only year total columns
                    const dataPoint = dataSource.find(dP => dP.Period === parseFloat(column.slice(0, 4))), value = aggregatedDataPoint[column];
                    dataPoint[aggregatedDataPoint.id.slice(0, aggregatedDataPoint.id.length - 1)] = value;
                }
            }
        }

        that.chart.seriesGroups[0].series = series;
        that.chart.dataSource = dataSource;
    }

    getDataBasedOnExpandedGroups() {
        const that = this,
            expandedColumns = that.expandedColumns,
            expandedRows = that.expandedRows;

        if (expandedColumns.length === 0 && expandedRows.length === 0) {
            that.getInitialData();
            return;
        }

        const dataSource = [];
        let series = [],
            yearsToDisplay = [];

        if (expandedColumns.length > 0) {
            yearsToDisplay = expandedColumns.sort().map(col => parseFloat(col.slice(0, 4)));
            yearsToDisplay.forEach(year => {
                for (let i = 1; i <= 4; i++) {
                    // Create a data point for each quarter (Q) of each year to display
                    dataSource.push({ Period: `${year}/Q${i}` });
                }
            });
        }
        else {
            yearsToDisplay = that.years;
            that.years.forEach(year => dataSource.push({ Period: year }));
        }

        if (expandedRows.length === 0) {
            series = that.continents.map(continent => ({ dataField: continent, displayText: continent }));
        }

        that.aggregatedData.forEach(sourceDataPoint => {
            if (sourceDataPoint.level === 0 && expandedRows.length > 0 ||
                sourceDataPoint.level === 1 && expandedRows.length === 0) {
                return;
            }
            if (expandedRows.length > 0 &&
                expandedRows.indexOf(sourceDataPoint.id.replace(/^(.+0).+/, '$1')) !== -1) {
                // Create a Chart series for each expanded continent's city
                const city = sourceDataPoint.id.replace(/.+0(.+)1/, '$1');
                series.push({ dataField: city, displayText: city });
            }
            for (const column in sourceDataPoint) {
                if (column.indexOf('TOTAL') === -1 ||
                    /_Q\d_/.test(column) === false && expandedColumns.length > 0 ||
                    /_Q\d_/.test(column) === true && expandedColumns.length === 0) {
                    continue;
                }

                let dataPoint: any;

                if (expandedColumns.length > 0) {
                    dataPoint = dataSource.find(dP => dP.Period === column.slice(0, 7).replace('_', '/'));
                }
                else {
                    dataPoint = dataSource.find(dP => dP.Period + '_TOTAL' === column);
                }

                if (!dataPoint) {
                    continue;
                }

                let value = sourceDataPoint[column];

                if (expandedRows.length > 0) {
                    const city = sourceDataPoint.id.replace(/.+0(.+)1/, '$1');

                    dataPoint[city] = value;
                }
                else {
                    dataPoint[sourceDataPoint.id.slice(0, sourceDataPoint.id.length - 1)] = value;
                }
            }
        });

        that.chart.seriesGroups[0].series = series;
        that.chart.dataSource = dataSource;
    }

    collapseTotalColumnHandler = (event: CustomEvent) => {
        const that = this;

        that.expandedColumns = that.expandedColumns.filter(col => col !== event.detail.columnDefinition.id);
        that.getDataBasedOnExpandedGroups();
    }

    expandTotalColumnHandler = (event: CustomEvent) => {
        const that = this;

        that.expandedColumns.push(event.detail.columnDefinition.id);
        that.getDataBasedOnExpandedGroups();
    }

    expandHandler = (event: CustomEvent) => {
        const that = this;

        that.expandedRows.push(event.detail.record.id);
        that.getDataBasedOnExpandedGroups();
    }

    collapseHandler = (event: CustomEvent) => {
        const that = this;

        that.expandedRows = that.expandedRows.filter(row => row !== event.detail.record.id);
        that.getDataBasedOnExpandedGroups();
    }

    readyHandler = () => {
        const that = this;

        that.aggregatedData = that.pivottable.nativeElement.rows.toArray();
        that.getInitialData();
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
            messagesEn = Object.assign({}, that.pivottable.messages.en, { total: 'Revenue' });

        that.pivottable.messages = Object.assign({}, that.pivottable.messages, { en: messagesEn });
    }
}