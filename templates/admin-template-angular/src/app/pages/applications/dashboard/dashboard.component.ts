import { Component, AfterViewInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Menu } from 'smart-webcomponents-angular';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { TableComponent } from 'smart-webcomponents-angular/table';
import { StylingService } from 'src/app/services/styling.service';

@Component({
  selector: 'sm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild('revenueChart', { read: ChartComponent, static: false }) revenueChart!: ChartComponent;
  @ViewChild('salesTable', { read: TableComponent, static: false }) salesTable!: TableComponent;

  reportData = [
    { id: 1, name: 'Ruby', startDate: new Date(2019, 3, 4), status: 'Sale', price: '$24' },
    { id: 2, name: 'Diamond', startDate: new Date(2018, 0, 14), status: 'Extended', price: '$1250' },
    { id: 3, name: 'Alexandrite', startDate: new Date(2020, 8, 1), status: 'Extended', price: '$1250' },
    { id: 4, name: 'Blue Sapphire', startDate: new Date(2019, 3, 19), status: 'Tax', price: '$25' },
    { id: 5, name: 'Tanzanite', startDate: new Date(2009, 11, 11), status: 'Sale', price: '$19' },
    { id: 6, name: 'Pink sapphire', startDate: new Date(2020, 8, 24), status: 'Sale', price: '$200' },
    { id: 7, name: 'Aquamarine', startDate: new Date(2020, 2, 30), status: 'Done', price: '$245' },
    { id: 8, name: 'Violet Sapphire', startDate: new Date(2017, 5, 23), status: 'Done', price: '$199' },
    { id: 9, name: 'Tourmaline', startDate: new Date(2020, 1, 1), status: 'In progress', price: '$1205' },
    { id: 10, name: 'Heliodor', startDate: new Date(2019, 3, 4), status: 'Done', price: '$199' },
    { id: 11, name: 'Red beryl', startDate: new Date(2020, 5, 1), status: 'In progress', price: '$5' }
  ];

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
    padding: { left: 5, top: 15, right: 25, bottom: 5 },
    dataSource: this.salesData,
    xAxis: {
      dataField: 'month',
      displayText: 'Month'
    },
    colorScheme: 'custom',
    seriesGroups: [
      {
        type: 'splinearea',
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

  salesTableData = {
    dataSource: this.reportData,
    columns: [
      { label: '#', dataField: 'id', dataType: 'number', width: '50px' },
      { label: 'Name', dataField: 'name', dataType: 'string' },
      {
        label: 'Status', dataField: 'status', dataType: 'string', formatFunction(settings: any) {
          
          const value = settings.value;

          settings.template = `<span class="smart-badge ${value.replace(' ', '-').toLowerCase()}"">${value}</span>`;

        }
      },
      { label: 'Date', dataField: 'startDate', dataType: 'date' },
      { label: 'Price', dataField: 'price', dataType: 'string' }
    ]
  }

  constructor(private styling: StylingService) { }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }
  
  ngAfterViewInit(): void {

    this.revenueChart.addColorScheme('custom', this.customColors);
    this.revenueChart.refresh();
  }

  toggleMenu(button: HTMLElement) {

    const todayMenu = document.querySelector('#todayMenu') as Menu;
    todayMenu.animation = 'none';

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

    todayMenu.animation = 'simple';

  }

}
