import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ThreeDChartComponent } from 'smart-webcomponents-angular/threedchart';
import { NumberInputComponent } from 'smart-webcomponents-angular/numberinput';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { ColorPickerComponent } from 'smart-webcomponents-angular/colorpicker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('chart', { read: ThreeDChartComponent, static: false }) chart!: ThreeDChartComponent;
  @ViewChild('dynamicWidth', { read: CheckBoxComponent, static: false }) dynamicWidth!: CheckBoxComponent;
  @ViewChild('gridHeight', { read: NumberInputComponent, static: false }) gridHeight!: NumberInputComponent;
  @ViewChild('gridWidth', { read: NumberInputComponent, static: false }) gridWidth!: NumberInputComponent;
  @ViewChild('gridCellWidthX', { read: NumberInputComponent, static: false }) gridCellWidthX!: NumberInputComponent;
  @ViewChild('gridCellWidthZ', { read: NumberInputComponent, static: false }) gridCellWidthZ!: NumberInputComponent;
  @ViewChild('gridLines', { read: ColorPickerComponent, static: false }) gridLines!: ColorPickerComponent;
  @ViewChild('formatLabels', { read: ButtonComponent, static: false }) formatLabels!: ButtonComponent;

  dataSource = [
    {
      Day: "Monday",
      Keith: {
        Running: 10,
        Swimming: 20,
        Cycling: 30,
      },
      Erica: {
        Running: 13,
        Swimming: 30,
        Cycling: 23,
      },
      George: {
        Running: 15,
        Swimming: 70,
        Cycling: 10,
      },
    },
    {
      Day: "Tuesday",
      Keith: {
        Running: 15,
        Swimming: 15,
        Cycling: 40,
      },
      Erica: {
        Running: 10,
        Swimming: 15,
        Cycling: 40,
      },
      George: {
        Running: 35,
        Swimming: 15,
        Cycling: 40,
      },
    },
    {
      Day: "Wednesday",
      Keith: {
        Running: 55,
        Swimming: 15,
        Cycling: 10,
      },
      Erica: {
        Running: 15,
        Swimming: 60,
        Cycling: 5,
      },
      George: {
        Running: 50,
        Swimming: 5,
        Cycling: 10,
      },
    },
    {
      Day: "Thursday",
      Keith: {
        Running: 15,
        Swimming: 15,
        Cycling: 40,
      },
      Erica: {
        Running: 15,
        Swimming: 15,
        Cycling: 40,
      },
      George: {
        Running: 15,
        Swimming: 15,
        Cycling: 5,
      },
    },
    {
      Day: "Friday",
      Keith: {
        Running: 15,
        Swimming: 15,
        Cycling: 40,
      },
      Erica: {
        Running: 15,
        Swimming: 15,
        Cycling: 40,
      },
      George: {
        Running: 5,
        Swimming: 5,
        Cycling: 40,
      },
    },
  ];

  caption = "Fitness & exercise weekly scorecard";

  description = "Time spent in vigorous exercise by 3 people";

  showLegend = true;

  colorScheme = "scheme29";

  cameraPosition = {
    x: 15,
    y: 30,
    z: 70,
  };

  xAxis = {
    dataField: "Day",
  };

  seriesGroups = [
    {
      type: "column",

      series: [
        { dataField: "Keith", displayText: "Keith" },
        { dataField: "Erica", displayText: "Erica" },
        { dataField: "George", displayText: "George" },
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
    const that = this;
    this.dynamicWidth.addEventListener('change', function (event: any) {
      that.chart.gridOptions.dynamicWidth = event.target.checked;
      that.gridWidth.disabled = event.target.checked;
      that.gridCellWidthX.disabled = !event.target.checked;
    });
    this.gridHeight.addEventListener('change', function (event: any) {
      that.chart.gridOptions.height = event.detail.value;
    });
    this.gridWidth.addEventListener('change', function (event: any) {
      that.chart.gridOptions.width = event.detail.value;
    });
    this.gridCellWidthX.addEventListener('change', function (event: any) {
      that.chart.gridOptions.slotWidthX = event.detail.value;
    });
    this.gridCellWidthZ.addEventListener('change', function (event: any) {
      that.chart.gridOptions.slotWidthZ = event.detail.value;
    });
    this.gridLines.addEventListener('change', function (event: any) {
      that.chart.gridOptions.lineColor = event.detail.value;

    });
    this.formatLabels.addEventListener('click', function (event) {
      that.chart.valueAxis.formatSettings!.sufix = ' min';

    });
  }
}