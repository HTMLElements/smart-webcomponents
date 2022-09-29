import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { StylingService } from 'src/app/services/styling.service';

@Component({
  selector: 'sm-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements AfterViewInit {

  @ViewChild('lineChart', { read: ChartComponent, static: false }) lineChart!: ChartComponent;
  @ViewChild('columnChart', { read: ChartComponent, static: false }) columnChart!: ChartComponent;
  @ViewChild('donutChart', { read: ChartComponent, static: false }) donutChart!: ChartComponent;
  @ViewChild('pieChart', { read: ChartComponent, static: false }) pieChart!: ChartComponent;
  @ViewChild('spiderChart', { read: ChartComponent, static: false }) spiderChart!: ChartComponent;
  @ViewChild('polarChart', { read: ChartComponent, static: false }) polarChart!: ChartComponent;

  salesData = [
    { month: 'Jan', sales: 22330, orders: 9302 },
    { month: 'Feb', sales: 21323, orders: 8902 },
    { month: 'Mar', sales: 28200, orders: 10043 },
    { month: 'Apr', sales: 31889, orders: 10992 },
    { month: 'May', sales: 30056, orders: 9980 },
    { month: 'Jun', sales: 42024, orders: 13489 },
    { month: 'Jul', sales: 44995, orders: 19048 },
    { month: 'Aug', sales: 41045, orders: 12334 },
    { month: 'Sep', sales: 38012, orders: 11102 },
    { month: 'Oct', sales: 40045, orders: 11894 },
    { month: 'Nov', sales: 27542, orders: 8301 },
    { month: 'Dec', sales: 29012, orders: 10632 }
  ];

  salesComparisonData = [
    { month: 'Jan', current: 77, last: 98 },
    { month: 'Feb', current: 70, last: 89 },
    { month: 'Mar', current: 67, last: 79 },
    { month: 'Apr', current: 82, last: 81 },
    { month: 'May', current: 93, last: 99 },
    { month: 'Jun', current: 112, last: 122 },
    { month: 'Jul', current: 130, last: 129 },
    { month: 'Aug', current: 118, last: 125 },
    { month: 'Sep', current: 92, last: 99 },
    { month: 'Oct', current: 75, last: 83 },
    { month: 'Nov', current: 78, last: 90 },
    { month: 'Dec', current: 90, last: 112 }
  ];

  interestsData = [
    { field: 'Entertainment', male: 53, female: 48 },
    { field: 'Technology', male: 80, female: 13 },
    { field: 'Politics', male: 13, female: 11 },
    { field: 'Art', male: 19, female: 62 },
    { field: 'Sports', male: 49, female: 7 },
  ];

  sourceData = [
    { market: 'Direct', revenue: 2873, value: 11 },
    { market: 'Partner', revenue: 7201, value: -9 },
    { market: 'Online', revenue: 1254, value: 27 },
    { market: 'Other', revenue: 901, value: 0.2 }
  ];

  theme = this.styling.getTheme();

  customColors = [
    this.styling.getComputedStyleVars('primary'),
    this.styling.getComputedStyleVars('info'),
    this.styling.getComputedStyleVars('warning'),
    this.styling.getComputedStyleVars('success'),
    this.styling.getComputedStyleVars('danger'),
    this.styling.getComputedStyleVars('secondary')
  ];

  lineChartData = {
    animation: 'none',
    theme: this.theme,
    caption: 'Caption',
    description: 'Description',
    showLegend: true,
    showBorderLine: true,
    padding: { left: 5, top: 15, right: 25, bottom: 5 },
    dataSource: this.salesData,
    xAxis: {
      dataField: 'month',
      displayText: 'Month'
    },
    colorScheme: 'custom',
    seriesGroups: [
      {
        type: 'spline',
        valueAxis: {
          labels: {
            horizontalAlignment: 'right',
            formatSettings: { decimalPlaces: 0 }
          },
          gridLines: {
            visible: false
          }
        },
        series: [
          { dataField: 'sales', displayText: 'Sales ($)', symbolSize: 8, symbolType: 'circle' },
          { dataField: 'orders', displayText: 'Orders', symbolSize: 8, symbolType: 'circle', dashStyle: '5,4' }
        ]
      }
    ]
  }

  columnChartData = {
    animation: 'none',
    theme: this.theme,
    caption: 'Caption',
    description: 'Description',
    showLegend: true,
    showBorderLine: true,
    padding: { left: 5, top: 15, right: 25, bottom: 5 },
    dataSource: this.salesComparisonData,
    colorScheme: 'custom',
    xAxis: {
      dataField: 'month',
      displayText: 'Month',
      gridLines: {
        visible: false
      }
    },
    seriesGroups: [
      {
        type: 'column',
        valueAxis: {
          labels: {
            horizontalAlignment: 'right',
            formatSettings: { decimalPlaces: 0 }
          },
          gridLines: {
            visible: false
          }
        },
        series: [
          { dataField: 'last', displayText: 'Last year' },
          { dataField: 'current', displayText: 'This year' }
        ]
      }
    ]
  }

  donutChartData = {
    animation: 'none',
    theme: this.theme,
    caption: 'Caption',
    description: 'Description',
    showLegend: true,
    showBorderLine: true,
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    dataSource: this.sourceData,
    colorScheme: 'custom',
    seriesGroups: [
      {
        type: 'donut',
        series: [
          {
            dataField: 'revenue',
            displayText: 'market',
            radius: 120,
            innerRadius: 80

          }
        ]
      }
    ]
  }

  pieChartData = {
    animation: 'none',
    theme: this.theme,
    caption: 'Caption',
    description: 'Description',
    showLegend: true,
    showBorderLine: true,
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    dataSource: this.sourceData,
    colorScheme: 'custom',
    seriesGroups: [
      {
        type: 'pie',
        series: [
          {
            dataField: 'revenue',
            displayText: 'market',
            radius: 120
          }
        ]
      }
    ]
  }

  spiderChartData = {
    animation: 'none',
    theme: this.theme,
    caption: 'Caption',
    description: 'Description',
    showLegend: true,
    showBorderLine: true,
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    dataSource: this.interestsData,
    colorScheme: 'custom',
    xAxis:
    {
      dataField: 'field',
      displayText: 'Field',
      valuesOnTicks: true,
      labels: { autoRotate: true }
    },
    seriesGroups:
      [
        {
          spider: true,
          startAngle: 0,
          endAngle: 360,
          radius: 100,
          type: 'area',
          series: [
            { dataField: 'male', displayText: 'Male', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' },
            { dataField: 'female', displayText: 'Female', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'diamond' }
          ]
        }
      ]
  }

  polarChartData = {
    animation: 'none',
    theme: this.theme,
    caption: 'Caption',
    description: 'Description',
    showLegend: true,
    showBorderLine: true,
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    dataSource: this.interestsData,
    colorScheme: 'custom',
    xAxis:
    {
      dataField: 'field',
      displayText: 'Field',
      valuesOnTicks: true,
      labels: { autoRotate: true }
    },
    seriesGroups:
      [
        {
          polar: true,
          startAngle: 0,
          endAngle: 360,
          radius: 120,
          type: 'column',
          series: [
            { dataField: 'male', displayText: 'Male', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' },
            { dataField: 'female', displayText: 'Female', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'diamond' }
          ]
        }
      ]
  }
  constructor(private styling: StylingService) { }

  ngAfterViewInit(): void {

    this.lineChart.addColorScheme('custom', this.customColors);
    this.lineChart.refresh();

    this.columnChart.addColorScheme('custom', this.customColors);
    this.columnChart.refresh();

    this.donutChart.addColorScheme('custom', this.customColors);
    this.donutChart.refresh();

    this.pieChart.addColorScheme('custom', this.customColors);
    this.pieChart.refresh();

    this.spiderChart.addColorScheme('custom', this.customColors);
    this.spiderChart.refresh();

    this.polarChart.addColorScheme('custom', this.customColors);
    this.polarChart.refresh();
  }

}
