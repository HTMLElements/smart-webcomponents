import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;

    sampleData = [{ "Date": "10/1/2017", "Referral": "1391", "SearchPaid": "1158", "SearchNonPaid": "1201", "uid": 0 }, { "Date": "10/2/2017", "Referral": "1379", "SearchPaid": "1439", "SearchNonPaid": "1015", "uid": 1 }, { "Date": "10/3/2017", "Referral": "1026", "SearchPaid": "1288", "SearchNonPaid": "1282", "uid": 2 }, { "Date": "10/4/2017", "Referral": "1497", "SearchPaid": "1063", "SearchNonPaid": "1089", "uid": 3 }, { "Date": "10/5/2017", "Referral": "1153", "SearchPaid": "1107", "SearchNonPaid": "1051", "uid": 4 }, { "Date": "10/6/2017", "Referral": "1367", "SearchPaid": "1351", "SearchNonPaid": "1037", "uid": 5 }, { "Date": "10/7/2017", "Referral": "1243", "SearchPaid": "1079", "SearchNonPaid": "1139", "uid": 6 }, { "Date": "10/8/2017", "Referral": "1445", "SearchPaid": "1187", "SearchNonPaid": "1174", "uid": 7 }, { "Date": "10/9/2017", "Referral": "1495", "SearchPaid": "1095", "SearchNonPaid": "1192", "uid": 8 }, { "Date": "10/10/2017", "Referral": "1031", "SearchPaid": "1441", "SearchNonPaid": "1277", "uid": 9 }, { "Date": "10/11/2017", "Referral": "1061", "SearchPaid": "1312", "SearchNonPaid": "1122", "uid": 10 }, { "Date": "10/12/2017", "Referral": "1231", "SearchPaid": "1382", "SearchNonPaid": "1437", "uid": 11 }, { "Date": "10/13/2017", "Referral": "1069", "SearchPaid": "1018", "SearchNonPaid": "1180", "uid": 12 }, { "Date": "10/14/2017", "Referral": "1309", "SearchPaid": "1358", "SearchNonPaid": "1425", "uid": 13 }, { "Date": "10/15/2017", "Referral": "1161", "SearchPaid": "1376", "SearchNonPaid": "1017", "uid": 14 }, { "Date": "10/16/2017", "Referral": "1250", "SearchPaid": "1401", "SearchNonPaid": "1198", "uid": 15 }, { "Date": "10/17/2017", "Referral": "1235", "SearchPaid": "1341", "SearchNonPaid": "1114", "uid": 16 }, { "Date": "10/18/2017", "Referral": "1345", "SearchPaid": "1089", "SearchNonPaid": "1158", "uid": 17 }, { "Date": "10/19/2017", "Referral": "1487", "SearchPaid": "1110", "SearchNonPaid": "1382", "uid": 18 }, { "Date": "10/20/2017", "Referral": "1308", "SearchPaid": "1165", "SearchNonPaid": "1453", "uid": 19 }, { "Date": "10/21/2017", "Referral": "1326", "SearchPaid": "1058", "SearchNonPaid": "1140", "uid": 20 }, { "Date": "10/22/2017", "Referral": "1021", "SearchPaid": "1176", "SearchNonPaid": "1085", "uid": 21 }, { "Date": "10/23/2017", "Referral": "1219", "SearchPaid": "1190", "SearchNonPaid": "1233", "uid": 22 }, { "Date": "10/24/2017", "Referral": "1345", "SearchPaid": "1057", "SearchNonPaid": "1300", "uid": 23 }, { "Date": "10/25/2017", "Referral": "1283", "SearchPaid": "1491", "SearchNonPaid": "1273", "uid": 24 }, { "Date": "10/26/2017", "Referral": "1435", "SearchPaid": "1483", "SearchNonPaid": "1298", "uid": 25 }, { "Date": "10/27/2017", "Referral": "1097", "SearchPaid": "1102", "SearchNonPaid": "1022", "uid": 26 }, { "Date": "10/28/2017", "Referral": "1222", "SearchPaid": "1218", "SearchNonPaid": "1485", "uid": 27 }, { "Date": "10/29/2017", "Referral": "1270", "SearchPaid": "1108", "SearchNonPaid": "1180", "uid": 28 }, { "Date": "10/30/2017", "Referral": "1339", "SearchPaid": "1372", "SearchNonPaid": "1499", "uid": 29 }, { "Date": "10/31/2017", "Referral": "1435", "SearchPaid": "1181", "SearchNonPaid": "1235", "uid": 30 }];
    monthFormatter = new Intl.DateTimeFormat('en', { month: 'short' });

    caption = 'Web Site Traffic Analysis';
    description = 'Daily unique visitors (stacked)';
    showLegend = true;
    padding = { left: 5, top: 5, right: 15, bottom: 5 };
    titlePadding = { left: 10, top: 0, right: 0, bottom: 10 };
    dataSource = this.sampleData;
    xAxis = {
        type: 'date',
        baseUnit: 'day',
        textRotationAngle: 0,
        dataField: 'Date',
        labels: {
            formatFunction: function (value: Date) {
                return value.getDate();
            }
        },
        toolTipFormatFunction: (value: Date) => {
            return value.getDate() + '-' + this.monthFormatter.format(value) + '-' + value.getFullYear();
        },
        valuesOnTicks: false,
        gridLines: { unitInterval: 31 }
    };
    valueAxis = {
        title: { text: 'Daily Visits<br>' },
        labels: { horizontalAlignment: 'right' }
    };
    colorScheme = 'scheme05';
    seriesGroups = [
        {
            type: 'stackedline100',
            series: [
                { dataField: 'Referral', displayText: 'Referral Traffic' },
                { dataField: 'SearchPaid', displayText: 'Paid Search Traffic' },
                { dataField: 'SearchNonPaid', displayText: 'Organic Search Traffic' }
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

    }
}