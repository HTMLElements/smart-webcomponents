import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ThreeDChartComponent } from 'smart-webcomponents-angular/threedchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ThreeDChartComponent, static: false }) chart!: ThreeDChartComponent;

    dataSource = [
      {
        Day: 'Jan',
        Website1: {
          Referral: 800,
          Paid: 500,
          Organic: 1400,
        },
        Website2: {
          Referral: 1000,
          Paid: 600,
          Organic: 1600,
        }
      },
      {
        Day: 'Feb',
        Website1: {
          Referral: 1000,
          Paid: 600,
          Organic: 1200,
        },
        Website2: {
          Referral: 800,
          Paid: 650,
          Organic: 1700,
        }
      },
      {
        Day: 'Mar',
        Website1: {
          Referral: 1200,
          Paid: 700,
          Organic: 1000,
        },
        Website2: {
          Referral: 1600,
          Paid: 1600,
          Organic: 1200,
        }
      },
      {
        Day: 'Apr',
        Website1: {
          Referral: 1400,
          Paid: 800,
          Organic: 800,
        },
        Website2: {
          Referral: 1000,
          Paid: 600,
          Organic: 1600,
        }
      },
    
    
    ];

    caption = 'Interent Traffic Sources'

    description = 'Visitors by source for two websites';

    showLegend = false;

    colorScheme = 'scheme05';

    xAxis = {
        dataField: 'Day',
    };

    valueAxis = {
        formatSettings: {
            prefix: '$',
        }
    };

    cameraPosition = {
      x: 15,
      y: 30,
      z: 70,
    };

    seriesGroups = [
          {
            type: 'stackedline100',
            dataField: 'Website1',
            displayText: 'Website #1',
            series: [
              {
                dataField: 'Referral',
                displayText: 'Referral Traffic',
              },
              {
                dataField: 'Paid',
                displayText: 'Paid Search Traffic',
              },
              {
                dataField: 'Organic',
                displayText: 'Organic Search Traffic',
              },
            ],
          },
          {
            type: 'stackedline100',
            dataField: 'Website2',
            displayText: 'Website #2',
            series: [
              {
                dataField: 'Referral',
                displayText: 'Referral Traffic',
              },
              {
                dataField: 'Paid',
                displayText: 'Paid Search Traffic',
              },
              {
                dataField: 'Organic',
                displayText: 'Organic Search Traffic',
              },
            ],
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
    }
}