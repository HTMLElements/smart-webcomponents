import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { GridComponent, GridCell } from 'smart-webcomponents-angular/grid';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    today: Date = new Date();
    tradingData = [
        { commodity: 'Crude Oil', price: 38.1900, day: -2.00, week: 2.63, month: 58.53, year: -28.16, date: this.today },
        { commodity: 'Brent', price: 40.5200, day: -1.63, week: 2.04, month: 37.02, year: -34.82, date: this.today },
        { commodity: 'Natural Gas', price: 1.7370, day: 0.58, week: -4.35, month: -4.92, year: -27.55, date: this.today },
        { commodity: 'Gasoline', price: 1.2073, day: -0.49, week: 8.36, month: 29.60, year: -31.07, date: this.today },
        { commodity: 'Gold', price: 1720.00, day: 0.23, week: 1.30, month: 1.43, year: 29.67, date: this.today },
        { commodity: 'Silver', price: 17.6600, day: 0.56, week: 0.20, month: 13.83, year: 20.41, date: this.today },
        { commodity: 'Wheat', price: 506.2500, day: 0.40, week: -0.93, month: -1.65, year: -1.98, date: this.today },
        { commodity: 'Palm Oil', price: 2306.00, day: -6.07, week: -5.69, month: 2.40, year: -5.57, date: new Date(this.today.getTime() - 86400000) },
        { commodity: 'Cheese', price: 2.1620, day: 1.84, week: 65.67, month: 72.96, year: 27.70, date: this.today },
        { commodity: 'Rice', price: 16.3200, day: -7.09, week: -20.64, month: -2.91, year: 40.99, date: new Date(this.today.getTime() - 86400000) },
        { commodity: 'Copper', price: 2.6180, day: 0.67, week: 5.46, month: 10.32, year: -1.87, date: this.today },
        { commodity: 'Steel', price: 3716.00, day: 0.19, week: 3.65, month: 9.07, year: -0.91, date: new Date(this.today.getTime() - 2 * 86400000) },
        { commodity: 'Aluminum', price: 1605.50, day: 0.03, week: 3.78, month: 7.21, year: -9.70, date: this.today },
        { commodity: 'Tin', price: 16922, day: 1.54, week: 5.70, month: 11.04, year: -11.68, date: new Date(this.today.getTime() - 2 * 86400000) }
    ];

    changeTemplate(formatObject: any) {
        const value: number = formatObject.value, opacity: number = Math.abs(value) / 100;
        if (value < 0) {
            formatObject.cell.background = `rgba(229, 57, 53, ${opacity})`;
        }
        else if (value > 0) {
            formatObject.cell.background = `rgba(67, 160, 71, ${opacity})`;
        }
        formatObject.template = value + '%';
    }

    appearance = {
        alternationCount: 2,
        showColumnLines: false,
        showColumnHeaderLines: false
    };
    behavior = { columnResizeMode: 'growAndShrink' };
    dataSource = new window.Smart.DataAdapter({
        dataSource: this.tradingData,
        dataFields: [
            'commodity: string',
            'price: number',
            'priceChange: number',
            'day: number',
            'week: number',
            'month: number',
            'year: number',
            'date: date'
        ]
    });
    columns = [
        { label: 'Commodity', dataField: 'commodity' },
        {
            label: 'Price', dataField: 'price', align: 'left', cellsAlign: 'left', template: function (formatObject: any) {
                const value: number = formatObject.value.toFixed(2), priceChange: number = (this as any).grid.dataSource[formatObject.row.index].priceChange;
                if (priceChange === 0) {
                    formatObject.template = value;
                }
                else {
                    formatObject.template = `<div class="change-container ${priceChange < 0 ? 'negative' : 'positive'}">${priceChange}</div><div class="value-container">${value}</div>`;
                }
            }
        },
        { label: 'Weekly', dataField: 'week', template: this.changeTemplate },
        { label: 'Monthly', dataField: 'month', template: this.changeTemplate },
        { label: 'Yearly', dataField: 'year', template: this.changeTemplate },
        {
            label: 'Date', dataField: 'date', align: 'right', cellsAlign: 'right', template: function (formatObject: any) {
                const value: Date = formatObject.value;
                if (value.getDate() === new Date().getDate()) {
                    formatObject.template = new window.Smart.Utilities.DateTime(value).toString('HH:mm:ss');
                }
                else {
                    formatObject.template = new window.Smart.Utilities.DateTime(value).toString('MMM/dd');
                }
            }
        }
    ];

    colors = ['#EE6352', '#59CD90', '#3FA7D6', '#FAC05E', '#F79D84', '#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#fdc5f5', '#BFD200', '#E07A5F', '#FFFF3F', '#81B29A'];

    caption = '';
    description = '';
    showLegend = false;
    showToolTips = false;
    padding = { left: 5, top: 15, right: 5, bottom: 5 };
    xAxis = {
        dataField: 'commodity',
        gridLines: {
            visible: true,
            dashStyle: '4,4'
        }
    };
    colorScheme = 'scheme29';
    seriesGroups = [
        {
            type: 'column',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            valueAxis: {
                logarithmicScale: true,
                logarithmicScaleBase: 10,
                displayValueAxis: true,
                axisSize: 'auto',
                gridLines: {
                    visible: true,
                    dashStyle: '4,4'
                }
            },
            series: [
                {
                    dataField: 'price', displayText: 'Price',
                    labels: {
                        visible: true,
                        verticalAlignment: 'top',
                        offset: { x: 0, y: -20 }
                    },
                    colorFunction: (value: number, itemIndex: number) => {
                        return this.colors[itemIndex];
                    }
                }
            ]
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
        const that = this,
            grid = that.grid,
            chart = that.chart;

        const updateValues: () => void = function () {
            grid.beginUpdate();

            for (let i: number = 0; i < grid.rows.length; i++) {
                const cells: GridCell[] = grid.rows[i].cells!,
                    cell: GridCell = cells[1],
                    value: any = cell.value,
                    date: Date = cells[5].value,
                    dataSource: any = grid.dataSource;

                if (date.getDate() !== new Date().getDate()) {
                    continue;
                }

                if (Math.random() > 3 / 5) {
                    cell.value = value + 1e-10;
                    dataSource[i].priceChange = 0;
                    continue;
                }

                let valueChange: number = (Math.random() > 0.5 ? 1 : -1) * value * ((Math.random() * 15 + 1) / 100);

                valueChange = parseFloat(valueChange.toFixed(2));

                cell.value = Math.max(1, parseFloat((value + valueChange).toFixed(2)));
                cells[5].value = new Date();
                that.tradingData[i].price = cell.value;
                dataSource[i].priceChange = valueChange;
            }

            grid.endUpdate();
            chart.update();
        }

        // update every second.
        setInterval(function () {
            updateValues();
        }, 1000);
    }
}