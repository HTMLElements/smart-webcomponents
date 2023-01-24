import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ThreeDChartComponent } from 'smart-webcomponents-angular/threedchart';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { NumberInputComponent } from 'smart-webcomponents-angular/numberinput';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('chart', { read: ThreeDChartComponent, static: false }) chart!: ThreeDChartComponent;
  @ViewChild('itemIndex', { read: NumberInputComponent, static: false }) itemIndex!: NumberInputComponent;

  dataSource = [
    { Type: "Completed", Count: 22 },
    { Type: "In Progress", Count: 19 },
    { Type: "Cancelled", Count: 13 },
    { Type: "Remaining", Count: 34 },
  ];

  caption = "Website Project";

  description = "Progress of the tasks";

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
      dataSource: this.dataSource,
      series: [
        {
          dataField: "Count",
          displayText: "Type",
          initialAngle: 0,
          radius: 15,
          labelRadius: 17,
          centerOffset: 0,
          height: 1.5,
        },
      ],
    },
  ];

  showItem($event: any) {
    this.chart.showItem(this.itemIndex.value, 0, 0);
  }

  hideItem($event: any) {
    this.chart.hideItem(this.itemIndex.value, 0, 0);
  }

  selectItem($event: any) {
    this.chart.selectItem(this.itemIndex.value, 0, 0);
  }

  unselectItem($event: any) {
    this.chart.unselectItem(this.itemIndex.value, 0, 0);
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
    let events = ['itemClick', 'hide', 'show', 'unselect', 'select'];
    events.forEach(ev => this.chart.addEventListener(ev, function (e: any) {
      document.getElementById('box')!.innerHTML +=
        `${ev}, itemIndex:${e.detail.itemIndex}<br/>`
    }))
  }
}