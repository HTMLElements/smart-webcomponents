import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { Menu } from 'smart-webcomponents-angular/menu';
import { StylingService } from 'src/app/services/styling.service';

@Component({
  selector: 'sm-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Dashboard3Component implements AfterViewInit {

  @ViewChild('trafficChart', { read: ChartComponent, static: false }) trafficChart!: ChartComponent;

  sourceData = [
    { market: 'Direct', revenue: 2873, value: 11 },
    { market: 'Google Ads', revenue: 7201, value: -9 },
    { market: 'Facebook', revenue: 1254, value: 27 },
    { market: 'Other', revenue: 901, value: 0.2 }
  ]

  clientsData = [
    { name: 'Marcia Gomez', subject: 'Problem with delivery', email: 'marcia.gomez@example.com', date: '01.01.2021' },
    { name: 'Marvin George', subject: 'Cancellation of order', email: 'marvin.george@example.com', date: '11.13.2020' },
    { name: 'Carole Pearson', subject: 'Order change.', email: 'carole.pearson@example.com', date: '08.28.2020' },
    { name: 'Leroy Shelton', subject: 'Delivery issue', email: 'leroy.shelton@example.com', date: '06.21.2020' },
    { name: 'Daisy Murphy', subject: 'Order cancel', email: 'daisy.murphy@example.com', date: '05.15.2020' }
  ];

  customColors = ['#16736F', '#DB4437', '#1877f2', '#62B773'];

  trafficDataSettings = {
    animation: 'none',
    theme: this.styling.getTheme(),
    caption: 'Caption',
    description: 'Description',
    showLegend: true,
    showBorderLine: true,
    padding: { left: 0, top: 0, right: 0, bottom: 0 },
    dataSource: this.sourceData,
    seriesGroups: [
      {
        type: 'pie',
        series: [
          {
            dataField: 'revenue',
            displayText: 'market',
            radius: 70,
            selectedRadiusChange: 2

          }
        ]
      }
    ]
  }

  trafficTableDataSettings = {
    dataSource: this.sourceData,
    columns: [
      {
        label: 'Source', dataField: 'market', dataType: 'string', formatFunction(settings: any) {
          settings.template = `<div class="color-box-container"><div class="color-box ${settings.value.toLowerCase()}"></div>${settings.value}</div>`;
        }
      },
      {
        label: 'Total', dataField: 'revenue', dataType: 'number', formatFunction(settings: any) {
          settings.template = `${settings.value} visits`;
        }
      },
      {
        label: 'Value', dataField: 'value', dataType: 'number', formatFunction(settings: any) {
          settings.cell.classList.add(settings.value > 0 ? 'positive' : 'negative');

          settings.template = settings.value + '%';
        }
      }
    ]
  }

  messagesTableSettings = {
    dataSource: this.clientsData,
    tooltip: false,
    columns: [
      { label: 'Name', dataField: 'name', dataType: 'string' },
      { label: 'Subject', dataField: 'subject', dataType: 'string' },
      { label: 'E-mail', dataField: 'email', dataType: 'string' },
      { label: 'Date', dataField: 'date', dataType: 'date' },
      {
        label: 'Action', dataField: 'action', formatFunction: function (settings:any) {
          settings.template = '<div class="text-center"><a href="#" class="btn btn-sm btn-outline-danger"><i class="material-icons">delete</i></a><a href="#" class="btn btn-sm btn-outline-primary"><i class="material-icons">visibility</i></a></div>';
        }
      }
    ]
  }

  constructor(private styling: StylingService) { }

  ngAfterViewInit(): void {
    this.trafficChart.addColorScheme('custom', this.customColors);
    this.trafficChart.colorScheme = 'custom';
    this.trafficChart.refresh();
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
