import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Menu } from 'smart-webcomponents-angular';
import { Smart } from 'smart-webcomponents-angular/chart';
import { StylingService } from 'src/app/services/styling.service';

interface Datapoint {
  price?: number,
  btc?: number,
  eth?: number,
  sum?: number
}

@Component({
  selector: 'sm-cryptodashboard',
  templateUrl: './cryptodashboard.component.html',
  styleUrls: ['./cryptodashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CryptodashboardComponent implements OnInit {

  btcToUsdtExchangeData = [
    { date: new Date(2020, 6, 25), o: 9538.82, h: 9733.33, l: 9529.46, c: 9703.25 },
    { date: new Date(2020, 6, 26), o: 9703.22, h: 10160, l: 9652.03, c: 9927.02 },
    { date: new Date(2020, 6, 27), o: 9929.12, h: 11377.5, l: 9922.14, c: 11023.7 },
    { date: new Date(2020, 6, 28), o: 11031.4, h: 11241.7, l: 10569, c: 10919.3 },
    { date: new Date(2020, 6, 29), o: 10910.4, h: 11344.6, l: 10834.1, c: 11100.9 },
    { date: new Date(2020, 6, 30), o: 11100.9, h: 11172.5, l: 10834.5, c: 11101.6 },
    { date: new Date(2020, 6, 31), o: 11102.7, h: 11438.7, l: 10963.8, c: 11339 }
  ];

  monthFormatter = new Intl.DateTimeFormat('en', { month: 'short' });

  currencyPrices = [
    { currency: 'BTC', price: 10732.6, volume: 50315567171, change: 0.37 },
    { currency: 'ETH', price: 356.26, volume: 12148917583, change: 0.93 },
    { currency: 'USDT', price: 1, volume: 36915715574, change: -0.07 },
    { currency: 'XRP', price: 0.240869, volume: 1651813883, change: -0.41 },
    { currency: 'BCH', price: 228.84, volume: 1440967601, change: 1.15 },
    { currency: 'BNB', price: 28.58, volume: 612001852, change: 3.69 },
    { currency: 'POT', price: 4.36, volume: 469759239, change: -3.33 },
    { currency: 'LINK', price: 9.74, volume: 1924067658, change: -4.59 },
    { currency: 'BSV', price: 175.64, volume: 625571669, change: 4.48 },
    { currency: 'CRO', price: 0.152656, volume: 62829032, change: -0.14 }
  ];

  numberRenderer = new Smart.Utilities.NumberRenderer();

  baseLinePrices = { price: 0.03892189, eth: 7.81612747, btc: 0.08005164, sum: 1.51080382 };

  sellOrdersData: Datapoint[] = [];

  buyOrdersData: Datapoint[] = [];

  exchangeChartData = {
    animation: 'none',
    theme: this.styling.getTheme(),
    caption: 'Caption',
    description: 'Description',
    showLegend: true,
    showBorderLine: true,
    enableCrosshairs: true,
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    dataSource: this.btcToUsdtExchangeData,
    colorScheme: 'scheme30',
    xAxis: {
      dataField: 'date',
      displayText: 'Date',
      labels: {
        formatFunction: (value: Date) => {
          return value.getDate() + '-' + this.monthFormatter.format(value) + '<br>' + value.getFullYear().toString();
        }
      },
      type: 'basic',
      valuesOnTicks: true,
      gridLines: {
        visible: false
      }
    },
    seriesGroups: [
      {
        type: 'candlestick',
        series: [
          {
            dataFieldClose: 'c',
            displayTextClose: 'Close',
            dataFieldOpen: 'o',
            displayTextOpen: 'Open',
            dataFieldHigh: 'h',
            displayTextHigh: 'High',
            dataFieldLow: 'l',
            displayTextLow: 'Low',
            lineWidth: 1
          }
        ]
      }
    ]
  }

  currencyTableData = {
    dataSource: this.currencyPrices,
    sortMode: 'one',
    columns: [
      { label: 'Cryptocurrency', dataField: 'currency', dataType: 'string' },
      {
        numberRenderer: this.numberRenderer, label: 'Price', dataField: 'price', dataType: 'number', formatFunction(settings: any) {
          settings.template = this.numberRenderer.formatNumber(settings.value, 'C');
        }
      },
      {
        numberRenderer: this.numberRenderer, label: 'Volume', dataField: 'volume', dataType: 'number', width: 160, formatFunction(settings: any) {
          settings.template = this.numberRenderer.formatNumber(settings.value, 'C0');
        }
      },
      {
        label: 'Change', dataField: 'change', dataType: 'number', formatFunction(settings: any) {
          settings.cell.classList.add(settings.value > 0 ? 'positive' : 'negative');

          settings.template = settings.value + '%';
        }
      }
    ]
  }

  sellTableData = {
    dataSource: this.sellOrdersData,
    columns: [
      { label: 'Price', dataField: 'price', dataType: 'number' },
      { label: 'ETH', dataField: 'eth', dataType: 'number' },
      { label: 'BTC', dataField: 'btc', dataType: 'number' },
      { label: 'Sum(BTC)', dataField: 'sum', dataType: 'number' }
    ]
  }

  buyTableData = {
    dataSource: this.sellOrdersData,
    columns: [
      { label: 'Price', dataField: 'price', dataType: 'number' },
      { label: 'ETH', dataField: 'eth', dataType: 'number' },
      { label: 'BTC', dataField: 'btc', dataType: 'number' },
      { label: 'Sum(BTC)', dataField: 'sum', dataType: 'number' }
    ]
  }
  constructor(private styling: StylingService) { }

  ngOnInit(): void {
    for (let i = 0; i < 30; i++) {
      const dataPoint: Datapoint = {};

      dataPoint.price = parseFloat((this.baseLinePrices.price + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * (0.09 - 0.01) + 0.01)).toFixed(10));
      dataPoint.eth = parseFloat((this.baseLinePrices.eth + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * (1.5 - 0.05) + 0.05)).toFixed(10));
      dataPoint.btc = parseFloat((this.baseLinePrices.btc + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * (0.02 - 0.005) + 0.005)).toFixed(10));
      dataPoint.sum = parseFloat((this.baseLinePrices.sum + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * (1 - 0.09) + 0.09)).toFixed(10));

      if (i < 15) {

        this.sellOrdersData.push(dataPoint);

      } else {

        this.buyOrdersData.push(dataPoint);

      }
    }
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
