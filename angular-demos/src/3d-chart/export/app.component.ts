import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ThreeDChartComponent } from 'smart-webcomponents-angular/threedchart';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('chart', { read: ThreeDChartComponent, static: false }) chart!: ThreeDChartComponent;
  @ViewChild('includeLegend', { read: CheckBoxComponent, static: false }) includeLegend!: CheckBoxComponent;
  @ViewChild('includeCaption', { read: CheckBoxComponent, static: false }) includeCaption!: CheckBoxComponent;

  dataSource = [
    { Browser: "Chrome", Share: 48.13 },
    { Browser: "Safari", Share: 32.21 },
    { Browser: "Edge", Share: 7.79 },
    { Browser: "Samsung Internet", Share: 4.02 },
    { Browser: "Firefox", Share: 3.74 },
  ];

  caption = "Desktop browsers share";

  description = "(source: gs.statcounter.com)";

  showLegend = true;

  legendLayout = {
    flow: "vertical",
  };

  colorScheme = "scheme01";

  cameraPosition = {
    y: 18,
    z: 20,
  };

  seriesGroups = [
    {
      type: "pie",
      showLabels: true,
      series: [
        {
          dataField: "Share",
          displayText: "Browser",
          initialAngle: 0,
          radius: 15,
          labelRadius: 17,
          centerOffset: 0,
          height: 1.5,
          formatFunction: function (value:any) {
            if (isNaN(value)) {
              // Legend labels formatting
              return value;
            }

            return parseFloat(value).toFixed(2) + "%";
          },
        },
      ],
    },
  ];

  ExportPDF(): void {
    this.chart.saveAsPDF("myChart", this.includeLegend.checked, this.includeCaption.checked);
  }

  ExportPNG(): void {
    this.chart.saveAsPNG("myChart", this.includeLegend.checked, this.includeCaption.checked);
  }

  ExportJPEG(): void {
    this.chart.saveAsJPEG("myChart", this.includeLegend.checked, this.includeCaption.checked);
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