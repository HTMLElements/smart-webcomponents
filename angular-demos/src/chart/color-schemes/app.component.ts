import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ChartComponent, ChartColorScheme } from 'smart-webcomponents-angular/chart';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
    @ViewChild('chart2', { read: ChartComponent, static: false }) chart2!: ChartComponent;
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;

    sampleData = [
        { Day: 'Monday', Keith: 30, Erica: 15, George: 25, Monica: 20, Maria: 15, Average: 20 },
        { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30, Monica: 25, Maria: 20, Average: 38 },
        { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25, Monica: 10, Maria: 20, Average: 33 },
        { Day: 'Thursday', Keith: 35, Erica: 25, George: 45, Monica: 30, Maria: 30, Average: 31 },
        { Day: 'Friday', Keith: 20, Erica: 20, George: 25, Monica: 45, Maria: 30, Average: 52 },
        { Day: 'Saturday', Keith: 30, Erica: 20, George: 30, Monica: 60, Maria: 40, Average: 75 },
        { Day: 'Sunday', Keith: 60, Erica: 45, George: 90, Monica: 70, Maria: 50, Average: 73 }
    ];
    caption = 'Fitness & exercise weekly scorecard';
    description = 'Time spent in vigorous exercise';
    borderLineWidth = 0;
    showLegend = true;
    padding = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    dataSource = this.sampleData;
    xAxis = {
        dataField: 'Day',
        gridLines: {
            visible: true
        }
    };
    valueAxis = {
        unitInterval: 10,
        minValue: 0,
        maxValue: 100,
        description: 'Time in minutes',
        axisSize: 'auto'
    };
    colorScheme = 'scheme01';
    seriesGroups = [
        {
            type: 'column',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            series: [
                { dataField: 'Keith', displayText: 'Keith' },
                { dataField: 'Erica', displayText: 'Erica' },
                { dataField: 'George', displayText: 'George' },
                { dataField: 'Monica', displayText: 'Monica' },
                { dataField: 'Maria', displayText: 'Maria' }
            ]
        },
        {
            type: 'spline',
            series: [
                { dataField: 'Average', displayText: 'Class average' }
            ]
        }
    ];

    captionPie = 'Sunday fitness & exercise';
    descriptionPie = '';
    borderLineWidthPie = 0;
    showLegendPie = true;
    showBorderLinePie = true;
    legendPositionPie = { left: 520, top: 140, width: 100, height: 100 };
    paddingPie = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePaddingPie = { left: 0, top: 0, right: 0, bottom: 10 };
    dataSourcePie = [{ Name: 'Keith', Exercise: 60 }, { Name: 'Erica', Exercise: 45 }, { Name: 'George', Exercise: 90 }, { Name: 'Monica', Exercise: 70 }, { Name: 'Maria', Exercise: 50 }];
    colorSchemePie = 'scheme01';
    seriesGroupsPie = [
        {
            type: 'pie',
            showLabels: true,
            series: [
                {
                    dataField: 'Exercise',
                    displayText: 'Name',
                    labelRadius: 70,
                    initialAngle: 15,
                    radius: 90,
                    centerOffset: 0,
                    formatSettings: { decimalPlaces: 1 },
                    useGradientColors: false
                }
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

        const customColors = ['#1A6642', '#46C26F', '#F9B956', '#F38443', '#DE513D'];
        let defaultScheme: ChartColorScheme;

        that.chart.addColorScheme('custom', customColors);
        that.chart2.addColorScheme('custom', customColors);
        customColors.forEach(function (color, index) {
            document.getElementById('customScheme' + (index + 1)).style.backgroundColor = color;
        });
        that.dropdownlist.addEventListener('change', function (event: CustomEvent) {
            defaultScheme = event.detail.value;
            that.dropdownlist.placeholder = event.detail.label;
            if (!that.checkbox.checked) {
                that.colorScheme = defaultScheme;
                that.colorSchemePie = defaultScheme;
            }
        });
        that.dropdownlist.placeholder = '<div class="circle" style="background-color: #307DD7;"></div><div class="circle" style="background-color: #AA4643;"></div><div class="circle" style="background-color: #89A54E;"></div><div class="circle" style="background-color: #71588F;"></div><div class="circle" style="background-color: #4198AF;"></div>';
        that.checkbox.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.colorScheme = 'custom';
                that.colorSchemePie = 'custom';
            }
            else {
                that.colorScheme = defaultScheme;
                that.colorSchemePie = defaultScheme;
            }
        });
        that.radiobutton.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.chart.theme = 'light';
                that.chart2.theme = 'light';
                document.body.style.backgroundColor = "";
            }
        });
        that.radiobutton2.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.chart.theme = 'dark';
                that.chart2.theme = 'dark';
                document.body.style.backgroundColor = '#2E2E2E';
            }
        });
    }
}