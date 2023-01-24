import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ThreeDChartComponent } from 'smart-webcomponents-angular/threedchart';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ThreeDChartComponent, static: false }) chart!: ThreeDChartComponent;
    @ViewChild('dropDownSerie1Symbol', { read: DropDownListComponent, static: false }) dropDownSerie1Symbol!: DropDownListComponent;
    @ViewChild('dropDownSerie2Symbol', { read: DropDownListComponent, static: false }) dropDownSerie2Symbol!: DropDownListComponent;

    dataSource = [
      { City: 'New York', SalesQ1: 310500, SalesQ2: 210500, YoYGrowthQ1: 1.05, YoYGrowthQ2: 1.25 },
      { City: 'London', SalesQ1: 120000, SalesQ2: 169000, YoYGrowthQ1: 1.15, YoYGrowthQ2: 0.95 },
      { City: 'Paris', SalesQ1: 205000, SalesQ2: 275500, YoYGrowthQ1: 1.45, YoYGrowthQ2: 1.15 },
      { City: 'Tokyo', SalesQ1: 187000, SalesQ2: 130100, YoYGrowthQ1: 0.45, YoYGrowthQ2: 0.55 },
      { City: 'Berlin', SalesQ1: 187000, SalesQ2: 113000, YoYGrowthQ1: 1.65, YoYGrowthQ2: 1.05 },
      { City: 'San Francisco', SalesQ1: 142000, SalesQ2: 102000, YoYGrowthQ1: 0.75, YoYGrowthQ2: 0.15 },
      { City: 'Chicago', SalesQ1: 171000, SalesQ2: 124000, YoYGrowthQ1: 0.75, YoYGrowthQ2: 0.65 }
    ];

    caption = 'Sales by City in Q1 and Q2, and YoY sales growth'

    description = '(the size of the circles represents relative YoY growth)';

    showLegend = true;

    colorScheme = 'scheme32';

    cameraPosition = {
      x: 15,
      y: 30,
      z: 70,
    };

    xAxis = {
      dataField: 'City',
    };

    valueAxis = {
      unitInterval: 50000,
      minValue: 0,
      maxValue: 400000,
      formatFunction: (value:any) => {
        var formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0
        });
        
        return formatter.format(value);
      },
      formatSettings: {
        prefix: '$',
        
      }
    };

    seriesGroups = [{
      type: 'bubble',
      series: [{
          dataField: 'SalesQ1',
          radiusDataField: 'YoYGrowthQ1',
          minRadius: 2,
          maxRadius: 7,
          displayText: 'Sales in Q1',
          symbolType: 'diamond'
        },
        {
          dataField: 'SalesQ2',
          radiusDataField: 'YoYGrowthQ2',
          minRadius: 2,
          maxRadius: 7,
          displayText: 'Sales in Q2',
          symbolType: 'triangle_down'
        }
      ]
    }];

    serieOneChange(event:any){
      this.seriesGroups[0].series[0]!.symbolType = event.detail.value;
      this.chart.refresh();
    }

    serieTwoChange(event:any){
      this.seriesGroups[0].series[1]!.symbolType = event.detail.value;
      this.chart.refresh();
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
    }
}