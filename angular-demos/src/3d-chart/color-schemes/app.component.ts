import {
  Component,
  ViewChild,
  OnInit,
  AfterViewInit
} from '@angular/core';
import {
  ThreeDChartComponent
} from 'smart-webcomponents-angular/threedchart';
import {
  DropDownListComponent
} from 'smart-webcomponents-angular/dropdownlist';
import {
  ButtonComponent
} from 'smart-webcomponents-angular/button';
import {
  CheckBoxComponent
} from 'smart-webcomponents-angular/checkbox';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('chart', {
    read: ThreeDChartComponent,
    static: false
  }) chart!: ThreeDChartComponent;
  @ViewChild('colorSchemes', {
    read: DropDownListComponent,
    static: false
  }) colorSchemes!: DropDownListComponent;
  @ViewChild('useCustomScheme', {
    read: CheckBoxComponent,
    static: false
  }) useCustomScheme!: CheckBoxComponent;
  @ViewChild('darkModeButton', {
    read: CheckBoxComponent,
    static: false
  }) darkModeButton!: CheckBoxComponent;

  dataSource = [{
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

  showLegendTable = true;

  colorScheme = "scheme32";

  cameraPosition = {
    x: 15,
    y: 30,
    z: 70,
  };

  xAxis = {
    dataField: "Year",
  };

  seriesGroups = [{
    type: "stackedcolumn",
    dataField: "Keith",
    displayText: "Keith",
    series: [{
      dataField: "Running",
      displayText: "Running",
    },
    {
      dataField: "Cycling",
      displayText: "Cycling",
    },
    {
      dataField: "Swimming",
      displayText: "Swimming",
    },
    ],
  },
  {
    type: "stackedcolumn",
    dataField: "Erica",
    displayText: "Erica",
    series: [{
      dataField: "Running",
      displayText: "Running",
    },
    {
      dataField: "Cycling",
      displayText: "Cycling",
    },
    {
      dataField: "Swimming",
      displayText: "Swimming",
    },
    ],
  },
  {
    type: "stackedcolumn",
    dataField: "George",
    displayText: "George",
    series: [{
      dataField: "Running",
      displayText: "Running",
    },
    {
      dataField: "Cycling",
      displayText: "Cycling",
    },
    {
      dataField: "Swimming",
      displayText: "Swimming",
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
    const that = this;

    const customColors = ['#1A6642', '#46C26F', '#F9B956', '#F38443', '#DE513D'];
    let defaultScheme: string;

    that.chart.addColorScheme('custom', customColors);
    customColors.forEach(function (color, index) {
      document.getElementById('customScheme' + (index + 1))!.style.backgroundColor = color;
    });
    that.colorSchemes.addEventListener('change', function (event:any) {
      defaultScheme = event.detail.value;
      that.colorSchemes.placeholder = event.detail.label;
      if (!that.useCustomScheme.checked) {
        that.colorScheme = defaultScheme;
      }
    });
    that.colorSchemes.placeholder = '<div class="circle" style="background-color: #307DD7;"></div><div class="circle" style="background-color: #AA4643;"></div><div class="circle" style="background-color: #89A54E;"></div><div class="circle" style="background-color: #71588F;"></div><div class="circle" style="background-color: #4198AF;"></div>';
    that.useCustomScheme.addEventListener('change', function (event:any) {
      if (event.detail.value) {
        that.colorScheme = 'custom';
      } else {
        that.colorScheme = defaultScheme;
      }
    });
    that.darkModeButton.addEventListener('click', function (event:any) {
      if (document.body.getAttribute('theme') === 'dark') {
        document.body.removeAttribute('theme');
        that.chart.backgroundColor = 'white';
      }
      else {
        document.body.setAttribute('theme', 'dark');
        that.chart.backgroundColor = 'black';
      }
    });
  }
}