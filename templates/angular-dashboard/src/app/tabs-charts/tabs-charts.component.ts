import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';

@Component({
  selector: 'app-tabs-charts',
  templateUrl: './tabs-charts.component.html',
  styleUrls: ['./tabs-charts.component.css']
})
export class TabsChartsComponent implements OnInit {
  @ViewChild('activeChart', { read: ChartComponent, static: false }) activeChart: ChartComponent;
  @ViewChild('closedChart', { read: ChartComponent, static: false }) closedChart: ChartComponent;
  @ViewChild('openChart', { read: ChartComponent, static: false }) openChart: ChartComponent;
  @ViewChild('allIssuesChart', { read: ChartComponent, static: false }) allIssuesChart: ChartComponent;

  constructor() { }

  @Input() chartData;

  padding = { left: 0, top: 0, right: 0, bottom: 0 };
  titlePadding = { left: 0, top: 0, right: 0, bottom: 0 };
  colorScheme = 'custom';
  xAxis = {
      dataField: 'month',
      valuesOnTicks: true,
      gridLines: {
        visible: false
      }
  };
  valueAxis = {
      visible: false,
      labels: {
        offset: { x: -25, y: 0 }
      }
  };
  seriesGroups = [
      {
          type: 'splinearea',
          series: [
              { dataField: 'count' }
          ]
      }
  ];
  seriesGroups1 = [
    {
        type: 'splinearea',
        series: [
            { dataField: 'count' }
        ]
    }
  ];
  seriesGroups2 = [
    {
        type: 'splinearea',
        series: [
            { dataField: 'count' }
        ]
    }
  ];
  seriesGroups3 = [
    {
        type: 'splinearea',
        series: [
            { dataField: 'closed', opacity: 0.5 },
            { dataField: 'open', opacity: 0.7 }
        ]
    }
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {   
    this.activeChart.addColorScheme('custom', ['#888888']);
    this.activeChart.refresh();

    this.closedChart.addColorScheme('custom', ['#dc3545']);
    this.closedChart.refresh();

    this.openChart.addColorScheme('custom', ['#28a745']);
    this.openChart.refresh();

    this.allIssuesChart.addColorScheme('custom', ['#dc3545', '#28a745']);
    this.allIssuesChart.refresh();
  }
}
