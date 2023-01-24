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
      { Person: 'Planning', M1_From: 2, M1_To: 5, M2_From: 5, M2_To: 10 },
      { Person: 'Dev 1', M1_From: 5, M1_To: 7, M2_From: 9, M2_To: 17 },
      { Person: 'Dev 2', M1_From: 5, M1_To: 12, M2_From: 14, M2_To: 22 },
      { Person: 'QA 1', M1_From: 7, M1_To: 14, M2_From: 14, M2_To: 25 }
    ];

    caption = 'Monthly Project Schedule'

    description = 'Website update plan';

    showLegend = true;

    colorScheme = 'scheme32';

    cameraPosition = {
      x: 40,
      y: 20,
      z: 55,
    };

    xAxis = {
      dataField: 'Person',
      unitInterval: 1,
      tickMarks: {
          visible: true,
          interval: 1,
          color: '#BCBCBC'
      }
    };

    valueAxis = {
      minValue: 1,
      maxValue: 30,
      unitInterval: 6,
      formatFunction: function (value:any) {
        return 'Day ' + value;
      },
    };

      seriesGroups = [
        {
          orientation: 'horizontal',
          type: 'rangecolumn',
          columnsGapPercent: 100,
          series: [
              { dataFieldFrom: 'M2_From', dataFieldTo: 'M2_To', displayText: 'Sprint 2', opacity: 1, displayTextTo: 'End Day', displayTextFrom: 'Start Day' },
              { dataFieldFrom: 'M1_From', dataFieldTo: 'M1_To', displayText: 'Sprint 1', opacity: 1, displayTextTo: 'End Day', displayTextFrom: 'Start Day' }
          ],
          bands: [
              { minValue: 13, maxValue: 16, color: '#00FF00', opacity: 0.30 },
              { minValue: 24, maxValue: 27, color: '#FFBC70', opacity: 0.60 },
              { minValue: 29, maxValue: 29, color: '#FF0000', opacity: 0.45, lineWidth: 3 }
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
    }
}