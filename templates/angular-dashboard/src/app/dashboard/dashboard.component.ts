import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { DataService } from '../data/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('donutChart', { read: ChartComponent, static: false }) donutChart: ChartComponent;
  @ViewChild('linesChart', { read: ChartComponent, static: false }) linesChart: ChartComponent;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }
  data: any;
  dataToMe: any;
  dataByMe: any;
  sub: Subscription;

  radioButtons: Array<String> = ["3 MONTHS", "6 MONTHS", "1 YEAR"];
  showLowSerie: boolean = true;
  showMediumSerie: boolean = true;
  showHighSerie: boolean = true;
  showOtherSerie: boolean = false;

  padding = { left: 0, top: 0, right: 0, bottom: 0 };
  titlePadding = { left: 0, top: 0, right: 0, bottom: 0 };
  legendLayout = { width: 180, left: 80, top: 300, flow: 'horizontal' };
  colorScheme = 'custom';

  prioritySource = [
    { priority: 'Low', percent: 44 }, 
    { priority: 'Medium', percent: 33 }, 
    { priority: 'High', percent: 10 },
    { priority: 'Other', percent: 5 }
  ];

  seriesGroups = [
    {
        type: 'donut',
        offsetY: 150,
        dataSource: this.prioritySource,
        series: [
            {
                dataField: 'percent',
                displayText: 'priority',
                labelRadius: 120,
                initialAngle: 10,
                radius: 100,
                innerRadius: 95,
                centerOffset: 0,
                formatSettings: { sufix: '%', decimalPlaces: 1 }
            }
        ]
    }
  ];

  /* Lines chart */
  typesDistibutionSource = [
    { month: 'Sep', low: 12, medium: 14, high: 3, other: 2 },
    { month: 'Oct', low: 16, medium: 20, high: 7, other: 2 },
    { month: 'Nov', low: 24, medium: 12, high: 5, other: 3 },
    { month: 'Dec', low: 8, medium: 6, high: 3, other: 2 }
  ];

  linesChartPadding = { left: 20, top: 20, right: 20, bottom: 20 };
  xAxis = {
    visible: false,
    dataField: 'month',
    tickMarks: {
        visible: true,
        unitInterval: 1,
        color: '#BCBCBC'
    },
    gridLines: {
        visible: false
    }
  };
  valueAxis = {
        visible: true
  };

    lineSeriesGroups = [
      {
            type: 'line',
            series: [
                { dataField: 'low', displayText: 'Low' },
                { dataField: 'medium', displayText: 'Medium' },
                { dataField: 'high', displayText: 'High' },
                { dataField: 'other', displayText: 'Other' }
            ]
        }
    ];

  ngOnInit(): void {    
    const interval = this.route.snapshot.queryParamMap.get('interval');
    if (interval) {
      this.updateDatesInterval(interval);
      this.setPrimaryButton(interval);

      this.data = this.dataService['get' + interval + 'Data']();
      this.dataToMe = this.dataService['get' + interval + 'ToMeData']();
      this.dataByMe = this.dataService['get' + interval + 'ByMeData']();
    } else {
      this.data = this.dataService.get3MonthsData();
      this.dataToMe = this.dataService.get3MonthsToMeData();
      this.dataByMe = this.dataService.get3MonthsByMeData();
    } 
       
    this.sub = this.route.queryParams.subscribe(params => { 
      if (params && params.interval) {
        let interval = params.interval;
        interval = interval.charAt(0) + interval.charAt(1).toUpperCase() + params.interval.slice(2);
        
        this.updateDatesInterval(interval);

        this.data = this.dataService['get' + interval + 'Data']();
        this.dataToMe = this.dataService['get' + interval + 'ToMeData']();
        this.dataByMe = this.dataService['get' + interval + 'ByMeData']();
      }
    });

    this.attachButtonEvents();
  }

  ngAfterViewInit(): void {
    const colors: string[] = ['#28a745', '#fb9766', '#dc3545', '#52c3d3'];

    this.donutChart.addColorScheme('custom', colors);
    this.donutChart.refresh();

    this.linesChart.addColorScheme('custom', colors);
    this.linesChart.refresh();
    this.linesChart.hideSerie(0, 3);    
  }  

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  updateDatesInterval(interval) {
    const startDateEl = document.getElementById('startDate');

    switch(interval) {
      case '3Months': startDateEl.innerText = 'Sep 16, 2021';
        break;
      case '6Months': startDateEl.innerText = 'Jun 16, 2021';
        break;
      case '1Year': startDateEl.innerText = 'Dec 16, 2021';
        break;
    }
  }

  setPrimaryButton(interval) {
    switch(interval) {
      case '3Months': {
        document.getElementById('btn3Months').classList.add('primary');
        document.getElementById('btn6Months').classList.remove('primary');
        document.getElementById('btn1Year').classList.remove('primary'); 
      }
        break;
      case '6Months': {
        document.getElementById('btn3Months').classList.remove('primary');
        document.getElementById('btn6Months').classList.add('primary');
        document.getElementById('btn1Year').classList.remove('primary');
      }
        break;
      case '1Year': {
        document.getElementById('btn3Months').classList.remove('primary');
        document.getElementById('btn6Months').classList.remove('primary');
        document.getElementById('btn1Year').classList.add('primary');
      }
        break;
    }
  }

  showHideSerie(index, serie) {
    const label = document.getElementsByClassName(serie)[0];

    if (this['show' + serie.charAt(0).toUpperCase() + serie.slice(1) + 'Serie']) {
      this.linesChart.hideSerie(0, index);
      this['show' + serie.charAt(0).toUpperCase() + serie.slice(1) + 'Serie'] = false;

      label.classList.add('grey');
    } else {
      this.linesChart.showSerie(0, index);
      this['show' + serie.charAt(0).toUpperCase() + serie.slice(1) + 'Serie'] = true;

      label.classList.remove('grey');
    }    
  }

  attachButtonEvents() {
    document.getElementById('btn3Months').addEventListener('click', ()=> {  
      this.setPrimaryButton('3Months');
      this.router.navigate(['dashboard'], { queryParams: { interval: '3Months'} });
    });

    document.getElementById('btn6Months').addEventListener('click', ()=> {
      this.setPrimaryButton('6Months');
      this.router.navigate(['dashboard'], { queryParams: { interval: '6Months'} });
    });

    document.getElementById('btn1Year').addEventListener('click', ()=> {
      this.setPrimaryButton('1Year');
      this.router.navigate(['dashboard'], { queryParams: { interval: '1Year'} });
    });
  }
}
