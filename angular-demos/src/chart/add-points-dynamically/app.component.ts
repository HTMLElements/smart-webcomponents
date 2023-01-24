import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;

    sampleData = [
        { x: 15, y: 30 },
        { x: 55, y: 90 }
    ];
    maxX = 200;
    maxY = 200;

    animation = 'none';
    caption = 'Adding Data Points Dynamically';
    description = 'Click the plot area to add a point';
    showLegend = false;
    padding = { left: 10, top: 5, right: 10, bottom: 5 };
    titlePadding = { left: 50, top: 0, right: 0, bottom: 10 };
    dataSource = this.sampleData;
    colorScheme = 'scheme28';
    xAxis = {
        dataField: 'x',
        minValue: 0,
        maxValue: this.maxX
    };
    valueAxis = {
        visible: true,
        title: { text: '' },
        minValue: 0,
        maxValue: this.maxY,
        unitInterval: 50
    };
    seriesGroups = [
        {
            type: 'line',
            series: [
                { dataField: 'y', symbolType: 'circle', symbolSize: 10 }
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
        const that = this,
            box = { x: 48, y: 479, width: 798, height: 420 };
        let xRatio = box.width / that.maxX,
            yRatio = box.height / that.maxY;

        that.chart.addEventListener('click', function (event: PointerEvent) {
            if (event.pageX < box.x || event.pageX > box.x + box.width ||
                event.pageY < box.y - box.height || event.pageY > box.y) {
                return;
            }
            const x = (event.pageX - box.x) / xRatio,
                y = (box.y - event.pageY) / yRatio;
            that.sampleData.push({ x: x, y: y });
            that.chart.update();
            if (x >= that.maxX * 0.9) {
                that.maxX += 50;
                xRatio = box.width / that.maxX;
                if (that.chart.xAxis) {
                    that.chart.xAxis.maxValue = that.maxX;
                }
            }
            if (y >= that.maxY * 0.9) {
                that.maxY += 50;
                yRatio = box.height / that.maxY;
                if (that.chart.valueAxis) {
                    that.chart.valueAxis.maxValue = that.maxY;
                }
            }
            that.chart.update();
        });
    }
}