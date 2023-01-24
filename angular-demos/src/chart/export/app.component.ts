import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;

    source = JSON.parse('[{"Country":"Luxembourg","GDP":"81278.63","DebtPercent":"16.2","Debt":"13167.13806","uid":0},{"Country":"Singapore","GDP":"57596.47","DebtPercent":"102.4","Debt":"58978.78528","uid":1},{"Country":"Norway","GDP":"53285.21","DebtPercent":"47.7","Debt":"25417.04517","uid":2},{"Country":"USA","GDP":"45759.46","DebtPercent":"58.9","Debt":"26952.32194","uid":3},{"Country":"Austria","GDP":"39269.33","DebtPercent":"70.4","Debt":"27645.60832","uid":4},{"Country":"Germany","GDP":"34065.12","DebtPercent":"78.8","Debt":"26843.31456","uid":5},{"Country":"Canada","GDP":"38065.13","DebtPercent":"34","Debt":"12942.1442","uid":6}]');
    caption = 'Economic comparison';
    description = 'GDP and Debt in 2010';
    showLegend = true;
    padding = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    dataSource = this.source;
    xAxis = {
        dataField: 'Country'
    };
    colorScheme = 'scheme32';
    seriesGroups = [
        {
            colorScheme: 'scheme03',
            type: 'column',
            columnsGapPercent: 50,
            valueAxis: {
                unitInterval: 5000,
                title: { text: 'GDP & Debt per Capita($)<br>' }
            },
            series: [
                { dataField: 'GDP', displayText: 'GDP per Capita' },
                { dataField: 'Debt', displayText: 'Debt per Capita' }
            ]
        },
        {
            type: 'line',
            valueAxis: {
                unitInterval: 10,
                title: { text: 'Debt (% of GDP)<br>' },
                position: 'right',
                gridLines: { visible: false }
            },
            series: [
                { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
            ]
        }
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

        that.button.addEventListener('click', function () {
            that.chart.saveAsJPEG('myChart.jpeg');
        });
        that.button2.addEventListener('click', function () {
            that.chart.saveAsPNG('myChart.png');
        });
        that.button3.addEventListener('click', function () {
            that.chart.saveAsPDF('myChart.pdf', that.checkbox.checked ? 'landscape' : 'portrait');
        });
    }
}