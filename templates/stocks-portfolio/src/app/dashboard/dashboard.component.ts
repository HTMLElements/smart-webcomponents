import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { GridComponent, Smart } from 'smart-webcomponents-angular/grid';

import { MenuComponent } from 'smart-webcomponents-angular/menu';
import { WindowComponent } from 'smart-webcomponents-angular/window';
import { SplitterComponent } from 'smart-webcomponents-angular/splitter';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { ListBoxComponent } from 'smart-webcomponents-angular/listbox';
import { GetdataService } from './getdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class DashboardComponent implements AfterViewInit, OnInit {
  @ViewChild('chart', { read: ChartComponent, static: false }) chart: ChartComponent;
  @ViewChild('grid', { read: GridComponent, static: false }) grid: GridComponent;
  @ViewChild('menu', { read: MenuComponent, static: false }) menu: MenuComponent;
  @ViewChild('window', { read: WindowComponent, static: false }) window: WindowComponent;
  @ViewChild('splitter', { read: SplitterComponent, static: false }) splitter: SplitterComponent;
  @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist: DropDownListComponent;
  @ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox: ListBoxComponent;

  naming: string = 'My Stocks Portfolio';
  customerName: string = 'Anne Dodsworth';
  customWindowHeaderName: string = 'Stocks Portfolio Details';
  footerContent: string = 'Copyright © 2021 jQWidgets';
  rightSide: string = '25%';
  menuItems: any[] = [
    {
      label: 'Chart',
      items: [
        {
          label: 'Column',
          items: [
            { label: 'Column', value: 'column' },
            { label: 'Stacked Column Series', value: 'stackedcolumn' },
            { label: 'Percentage Stacked Columns', value: 'stackedcolumn100' }
          ]
        },
        {
          label: 'Line',
          items: [
            { label: 'Line', value: 'line' },
            { label: 'Stacked Lines', value: 'stackedline' },
            { label: 'Percentage Stacked Lines', value: 'stackedline100' },
            { label: 'Step Line', value: 'stepline' },
            { label: 'Stacked Step Line', value: 'stackedstepline' },
            { label: 'Percentage Stacked Step Line', value: 'stackedstepline100' }
          ]
        },
        {
          label: 'Spline',
          items: [
            { label: 'Smooth Lines Connecting The Value Points', value: 'spline' },
            { label: 'Smooth Stacked Lines', value: 'stackedspline' },
            { label: 'Percentage Stacked Smooth Lines', value: 'stackedspline100' }
          ]
        },
        {
          label: 'Area',
          items: [
            { label: 'Area Connecting The Value Points With Straight Lines', value: 'area' },
            { label: 'Stacked Area With Straight Lines Between The Points', value: 'stackedarea' },
            { label: 'Percentage Stacked Area With Straight Lines Between The Points', value: 'stackedarea100' },
            { label: 'Step Area Connecting The Value Points', value: 'steparea' },
            { label: 'Step Stacked Area', value: 'stackedsteparea' },
            { label: 'Percentage Stacked Step Area', value: 'stackedsteparea100' }
          ]
        },
        {
          label: 'Spline Area',
          items: [
            { label: 'Smooth Area Connecting The Value Points', value: 'splinearea' },
            { label: 'Stacked Smooth Area Connecting The Value Points', value: 'stackedsplinearea' },
            { label: 'Percentage Stacked Smooth Area', value: 'stackedsplinearea100' }
          ]
        },
        {
          label: 'Pie & Donut',
          items: [
            { label: 'Pie - Circular Chart Divided Into Sectors, Illustrating Proportion', value: 'pie' },
            { label: 'Donut - Chart Divided Into Circular Sectors With Different Inner And Outer Radius', value: 'donut' }
          ]
        },
        {
          label: 'Scatter',
          items: [
            { label: 'Data Is Displayed As A Collection Of Points', value: 'scatter' },
            { label: 'Data Is Displayed As A Collection Of Points And The Values Are Stacked', value: 'stackedscatter' },
            { label: 'Data Is Displayed As A Collection Of Points And The Values Are Percentage Stacked', value: 'stackedscatter100' }
          ]
        },
        {
          label: 'Bubble',
          items: [
            { label: 'Data Is Displayed As A Collection Of Bubbles', value: 'bubble' },
            { label: 'Data Is Displayed As A Collection Of Bubbles And The Values Are Stacked', value: 'stackedbubble' },
            { label: 'Data Is Displayed As A Collection Of Bubbles And The Values Are Percentage Stacked', value: 'stackedbubble100' }
          ]
        }
      ]
    },
    { label: 'Export Data', value: 'xlsx' }
  ];
  colorSchemes: any[] = [
    { label: 'Scheme 02', value: 'scheme02' },
    { label: 'Scheme 07', value: 'scheme07' },
    { label: 'Scheme 21', value: 'scheme21' },
    { label: 'Scheme 29', value: 'scheme29' }
  ];
  itemTemplate: string = 'multiLineTemplate';
  private isCollapsed = true;
  chartTypes: any[] = new Array();
  simpleArray: any[] = new Array();
  seriesGroups: any = [
    {
      type: 'column',
      columnsGapPercent: 50,
      seriesGapPercent: 10,
      valueAxis:
      {
        displayValueAxis: true,
        axisSize: 'auto'
      },
      series: [
        { dataField: 'last', displayText: 'Last' },
        { dataField: 'previousprice', displayText: 'Previous Price' }
      ]
    }
  ];
  rawData: any;
  gridDataCsvUrl: string = './assets/screener-results.csv';
  gridData: any[] = [];
  gridRawData: any;
  constructor(private getdataservice: GetdataService) {
    this.makeSimpleFlatArray(this.menuItems);
    this.chartTypes = this.simpleArray.slice(0, 8);
  }

  getData() {
    this.getdataservice.getInfo().subscribe(data => {
      const list = data.split('\n');
      const rawResult = list.slice(1).join('\n');
      const clearedResult = rawResult.trim().split('"').join('');
      this.rawData = clearedResult;
      let sourceData = {
        dataSource: clearedResult,
        dataFields:
          [
            { name: 'Name', dataType: 'string' },
            { name: 'Symbol', dataType: 'string' },
            { name: 'Last', dataType: 'number' },
            { name: 'Change', dataType: 'string' },
            { name: 'MarketCap', dataType: 'string' },
            { name: 'Volume', dataType: 'string' },
            { name: 'DayChanges', dataType: 'string' }
          ]
      };
      let dataAdapterData = new Smart.DataAdapter(sourceData, {
        beforeLoadComplete: function (records) {
          return records;
        }
      });
      this.grid.dataSource = dataAdapterData;
    });
  }

  makeSimpleFlatArray(array) {
    array.forEach((element, index) => {
      if (!!element.items) {
        this.makeSimpleFlatArray(element.items);
      } else {
        this.simpleArray.push(element.value);
      }
    });
  }

  initChart() {
    this.chart.caption = 'Details per Stock';
    this.chart.description = '';
    this.chart.showLegend = true;
    this.chart.showBorderLine = false;
    this.chart.padding = { left: 2, top: 2, right: 2, bottom: 2 };
    this.chart.titlePadding = { left: 40, top: 0, right: 0, bottom: 10 };
    this.chart.dataSource = [
      { name: 'Apple', last: 128.70, previousprice: 128.70 * (0.70 / 100 + 1) },
      { name: 'Microsoft', last: 219.42, previousprice: 219.42 * (0.06 / 100 + 1) }
    ];
    this.chart.animationDuration = 0;
    this.chart.xAxis = {
      dataField: 'name',
      visible: false
    };

    if (document.body.hasAttribute('theme') && document.body.getAttribute('theme').indexOf('dark') >= 0) {
      this.chart.theme = 'dark';
    }

    this.chart.colorScheme = 'scheme29';
    this.chart.seriesGroups = this.seriesGroups;
  }

  source = {
    dataSource: '',
    dataFields:
      [
        { name: 'Name', dataType: 'string' },
        { name: 'Symbol', dataType: 'string' },
        { name: 'Last', dataType: 'number' },
        { name: 'Change', dataType: 'string' },
        { name: 'MarketCap', dataType: 'string' },
        { name: 'Volume', dataType: 'string' },
        { name: 'DayChanges', dataType: 'string' }
      ]
  }
  dataAdapter = new Smart.DataAdapter(this.source);

  initGrid() {
	const that = this;
	
    that.grid.layout.rowHeight = 50;
    that.grid.columns = [
      { label: 'Name', dataField: 'Name', width: 200 },
      { label: 'Symbol', dataField: 'Symbol', align: 'center', cellsAlign: 'center', width: 150 },
      {
        label: 'Last',
        dataField: 'Last',
        width:  150,
        template: function (formatObject: any) {
          const value = formatObject.value;
          let result = value;
          if (value >= 1000) {
            result = value / 1000 + 'K';
          }

          formatObject.template = `<div style='padding-right: 8px;' class='align-right smart-label'>${result}</div>`;
        }
      },
      {
        label: 'Change %',
        dataField: 'Change',
        width: 200,
        align: 'center',
        cellsAlign: 'center',
        template: function (formatObject: any) {
          const value: number = formatObject.value * 1;
          if (value === 0) {
            formatObject.template = value;
          }
          else {
            formatObject.template = `<div style='padding-left: 8px;' class='change-container ${value < 0 ? 'negative' : 'positive'}'>${value}%</div><div class='value-container'>${value}</div>`;
          }
        }
      },
      { label: 'Market Cap', width: 200, dataField: 'MarketCap' },
      { label: 'Volume',  width: 200,dataField: 'Volume' },
      {
        label: 'Statistic',
        dataField: 'DayChanges',
        minWidth: 200,
        template: function (formatObject) {
          const change = formatObject.row.data.Change;
          const currentDayDataRaw = formatObject.row.data.DayChanges.split("&");
          const dailyData = currentDayDataRaw.map(x => x * 1);

		  let result = `<div id='chart-${formatObject.row.index}' class='simplechart'>loading</div>`;

		  if (formatObject.template) {
		    const chart = formatObject.template;			
			
			chart.seriesGroups[0].series[0].fillColor = change < 0 ? 'rgba(229, 57, 53, 0.4)' : 'rgba(67, 160, 71, 0.4)';
			
			chart.dataSource = dailyData;   
			return;
		  }	
		
		  const chart = document.createElement('smart-chart');
            chart.style.width = '100%';
            chart.style.height = '50px';
            chart.style.border = 'none';
            chart.style.margin = '0px';
            chart.style.padding = '0px';

			chart.animation = "none";
            chart.caption = '';
            chart.description = '';
            chart.showLegend = false;
            chart.dataSource = dailyData;
            chart.colorScheme = 'scheme29';
            chart.padding = { left: -10, right: -5, top: 4, bottom: 0 };
            chart.backgroundColor = 'transparent';

            chart.xAxis = {
              unitInterval: 2,
              tickMarks: { visible: false, unitInterval: 1 },
              gridLines: { visible: false, unitInterval: 1 },
              valuesOnTicks: false,
              padding: { bottom: 10 },
              displayText: '',
              labels: { visible: false }
            };
            chart.valueAxis = {
              tickMarks: { visible: false },
              labels: { visible: false, horizontalAlignment: 'right' },
              gridLines: { visible: false }
            }
			
			chart.showTooltip = false;
			
            chart.seriesGroups = [
              {
                type: 'spline',
                series:
                  [
                    {
                      fillColor: change < 0 ? 'rgba(229, 57, 53, 0.4)' : 'rgba(67, 160, 71, 0.4)',
                      labels:
                      {
                        visible: false,
                        backgroundColor: '#00FE00',
                        backgroundOpacity: 0.1,
                        borderColor: '#FE0000',
                        borderOpacity: 0.7,
                        padding: { left: 0, right: 0, top: 0, bottom: 0 }
                      }
                    }
                  ]
              }
            ];


            formatObject.template = chart;
        }
      }
    ];
   
    that.grid.appearance = {
      showRowHeaderNumber: false,
      showColumnLines: false,
      showColumnHeaderLines: false,
      allowHover: true
    }
	
    that.grid.selection.enabled = true;
    that.grid.selection.checkBoxes.enabled = true;
    that.grid.selection.checkBoxes.position = 'near';
	
	that.grid.selectRows([0, 3, 5]);
  }

  initContextMenu() {
    this.menu.dataSource = this.menuItems;
  }

  attachEvents() {
    // Context Menu
    const that = this;

    document.addEventListener('contextmenu', (event: any) => {
      event.preventDefault();
    });

    document.addEventListener('mousedown', (event: any) => {
      if (!that.menu.nativeElement.contains(event.target)) {
        that.menu.close();
      }
    });

    document.addEventListener('mouseup', (event: any) => {
      if (event.which === 3 && !that.menu.nativeElement.contains(event.target)) {
        let target = event.target;
        let targetName = target.nodeName.toLowerCase();
        if (targetName == 'span') {
          target = target.parentNode;
        }

        let listOfAvailableNames = ['smart-grid-cell', 'smart-grid-column'];

        if (target.classList.contains('smart-label') || listOfAvailableNames.indexOf(targetName) != -1) {
          that.menu.open(event.pageX, event.pageY - 150);

          setTimeout(() => {
            this.chart.refresh();
          }, 1800);
        }
      }
    });
  }

  ngOnInit() {
    this.getData();
  }

  ngAfterViewInit() {
    this.initChart();
    this.initGrid();
    this.initContextMenu();
    this.attachEvents();
  }

  windowClose() {
    if (!this.isCollapsed) {
      this.handleSettings();
    }
  }

  itemClick(event: any): void {
    const selectedRowsCheck: Promise<any> = this.grid.getSelectedRows();
    selectedRowsCheck
      .then(data => {
        const rawDataArray = this.rawData.split('\n');
        let newChartRawData = [];
        data.forEach(element => {
          newChartRawData.push(rawDataArray[element]);
        });

        let preparedChartData = newChartRawData.map(item => {
          // debugger;
          let itemParts = item.split(',');
          const name = itemParts[0];
          const last = itemParts[2] * 1;
          // const previousprice = (last * (itemParts[3] / 100 + 1)).toFixed(2);

          // More contrasted data for the demo purposes
          const previousprice = (last * (itemParts[3] / 100 + 1) * Math.random()).toFixed(2);
          return { name, last, previousprice };
        });

        this.chart.dataSource = preparedChartData;
      });

    const { label, value } = event.detail;
    if (label != 'Export Data') {
      if (!!value) {
        this.window.open();
        this.splitter.hideBar(0);
        if (value == 'pie') {
          let series = [
            {
              dataField: 'last',
              displayText: 'type',
              labelRadius: 80,
              initialAngle: 15,
              radius: 115,
              centerOffset: 0,
              useGradientColors: false
            }
          ];

          this.chart.seriesGroups = [{ type: value, series: series }];
        } else if (value == 'donut') {
          let series = [
            {
              dataField: 'last',
              displayText: 'type',
              labelRadius: 80,
              initialAngle: 15,
              radius: 115,
              centerOffset: 0,
              innerRadius: 80,
              useGradientColors: false
            }
          ];

          this.chart.seriesGroups = [{ type: value, series: series }];
        } else {
          let oldSeriesGroups = [
            {
              type: value,
              columnsGapPercent: 50,
              seriesGapPercent: 10,
              valueAxis:
              {
                displayValueAxis: true,
                axisSize: 'auto'
              },
              series: [
                { dataField: 'last', displayText: 'Last' },
                { dataField: 'previousprice', displayText: 'Previous Price' }
              ]
            }
          ];

          this.chart.seriesGroups = oldSeriesGroups;
        }

        this.chart.description = 'Chart Type: ' + (label.length > 20 ? '<br>' : '') + label;

        setTimeout(() => {
          this.chart.refresh();
        }, 200);
      }
    } else {
      this.grid.exportData(value);
    }
  }

  exportToImage() {
    this.chart.saveAsPNG('StocksChart.png');
  }

  handleSettings() {
    if (this.isCollapsed) {
      this.splitter.expand(1);
    } else {
      this.splitter.collapse(1);
    }

    this.isCollapsed = !this.isCollapsed;
  }

  openSettings() {
    this.handleSettings();
  }

  selectType(event: any) {
    let oldSeriesGroups = [
      {
        type: event.detail.value,
        columnsGapPercent: 50,
        seriesGapPercent: 10,
        valueAxis:
        {
          displayValueAxis: true,
          axisSize: 'auto'
        },
        series: [
          { dataField: 'last', displayText: 'Last' },
          { dataField: 'previousprice', displayText: 'Previous Price' }
        ]
      }
    ];

    this.chart.seriesGroups = oldSeriesGroups;
    this.chart.description = 'Chart Type: ' + event.detail.label;
    this.chart.refresh();
  }

  closeDropDownList(event: any) {
    event.stopPropagation();
  }

  onReady() {
    let listBoxLightSecondaryAction: HTMLCollection = this.listbox.nativeElement.getElementsByClassName('smart-list-item');

    this.colorSchemes.forEach((schemeData, index) => {
      this.chart.getColorScheme(schemeData.value)
        .then(schemeColors => {
          listBoxLightSecondaryAction[index].innerHTML = '';
          schemeColors.forEach((color, j) => {
            if (j == 0) {
              listBoxLightSecondaryAction[index].innerHTML += `<div style='margin-top: 2px; float: left; border-radius: 100%; width: 25px; height: 25px; border: none; background: ${color}; margin-left: 2px;'></div>`;
            } else {
              listBoxLightSecondaryAction[index].innerHTML += `<div style='margin-top: 2px; float: left; border-radius: 100%; width: 25px; height: 25px; border: none; background: ${color}; margin-left: 4px;'></div>`;
            }
          });
        });
    });
  }

  selectColorScheme(event: any) {
    let details = event.detail;
    let scheme = details.value;
    this.chart.animationDuration = 0;
    this.chart.colorScheme = scheme;
  }
}
