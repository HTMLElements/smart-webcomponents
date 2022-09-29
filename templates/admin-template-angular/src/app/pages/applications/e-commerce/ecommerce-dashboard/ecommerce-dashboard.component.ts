import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Menu } from 'smart-webcomponents-angular';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { StylingService } from 'src/app/services/styling.service';

@Component({
  selector: 'sm-ecommerce-dashboard',
  templateUrl: './ecommerce-dashboard.component.html',
  styleUrls: ['./ecommerce-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EcommerceDashboardComponent implements AfterViewInit {

  @ViewChild('revenueChart', { read: ChartComponent, static: false }) revenueChart!: ChartComponent;
  @ViewChild('salesComparisonChart', { read: ChartComponent, static: false }) salesComparisonChart!: ChartComponent;

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

  bestSellingData = [
    { name: 'UX-Generator', language: 'JavaScript', sales: 54000 },
    { name: 'Smart HTML Elements', language: 'JavaScript', sales: 163030 },
    { name: 'Hawk UI', language: 'C#', sales: 13000 },
    { name: 'Styler-CSS', language: 'CSS', sales: 3400 },
    { name: 'TypeWriterJS', language: 'TypeScript', sales: 18900 },
    { name: 'UX-Paradigm', language: 'JavaScript', sales: 920 },
    { name: 'Mobile-enhancer', language: 'CSS', sales: 7570 },
    { name: 'Async-script', language: 'Java', sales: 15030 }
  ];

  customColors = [
    this.styling.getComputedStyleVars('primary'),
    this.styling.getComputedStyleVars('info'),
    this.styling.getComputedStyleVars('warning'),
    this.styling.getComputedStyleVars('success'),
    this.styling.getComputedStyleVars('danger'),
    this.styling.getComputedStyleVars('secondary')
  ];

  theme = this.styling.getTheme();

  revenueChartData = {
    theme: this.theme,
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

  salesComparisonChartData = {
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

  bestSellingTableData = {
    dataSource: this.bestSellingData,
    sortMode: 'one',
    columns: [
      { label: 'Product Name', dataField: 'name', dataType: 'string' },
      {
        label: 'Language', dataField: 'language', dataType: 'string', formatFunction(settings: any) {
          const value = settings.value;

          settings.template = `<span class="smart-badge smart-badge-pill ${value.replace('#', '-sharp').toLowerCase()}"">${value}</span>`;
        }
      },
      { label: 'Sales', dataField: 'sales', dataType: 'number' }
    ]
  }
  constructor(private styling: StylingService) { }

  ngAfterViewInit(): void {

    this.revenueChart.addColorScheme('custom', this.customColors);
    this.revenueChart.refresh();

    this.salesComparisonChart.addColorScheme('custom', this.customColors);
    this.salesComparisonChart.refresh();
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

  toggleMenu(button: HTMLElement) {

    const todayMenu = document.querySelector('#todayMenu') as Menu;
    const rect = button.getBoundingClientRect();

    Array.from(document.getElementsByTagName('smart-menu'))
      .filter(currentMenu => currentMenu !== todayMenu)
      .forEach(currentMenu => currentMenu.close());

    document.querySelectorAll('.dropdown-menu-show').forEach(e => {
      e.classList.remove('dropdown-menu-show');
    })

    document.querySelectorAll('.dropdown-button')
      .forEach(menu => menu.classList.remove('dropdown-button-active'));

    if (!todayMenu.opened) {

      todayMenu.open(rect.right - todayMenu.offsetWidth, rect.bottom + window.scrollY);

    } else {

      todayMenu.close();

    }

  }
}
