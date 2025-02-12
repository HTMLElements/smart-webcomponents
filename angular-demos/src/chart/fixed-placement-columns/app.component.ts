﻿import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;

    sampleData = [
        { Film: 1, StarWars: 621.7, Jurassic: 983.8 },
        { Film: 2, StarWars: 457.3, Jurassic: 618.6 },
        { Film: 3, StarWars: 418.4, Jurassic: 368.8 },
        { Film: 4, StarWars: 983.6, Jurassic: 1671.7 },
        { Film: 5, StarWars: 640.9, Jurassic: 1309.5 },
        { Film: 6, StarWars: 848.8 },
        { Film: 7, StarWars: 2068 },
        { Film: 8, StarWars: 1332.5 }
    ];
    filmNames = {
        StarWars: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'The Phantom Menace', 'Attack of the Clones', 'Revenge of the Sith', 'The Force Awakens', 'The Last Jedi'],
        Jurassic: ['Jurassic Park', 'The Lost World: Jurassic Park', 'Jurassic Park III', 'Jurassic World', 'Jurassic World: Fallen Kingdom']
    };
    caption = 'Film Series Revenue Comparison';
    description = 'Star Wars vs Jurassic Park';
    showLegend = true;
    padding = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    dataSource = this.sampleData;
    columnSeriesOverlap = true;
    xAxis = {
        dataField: 'Film',
        title: { text: 'Film' },
        tickMarks: {
            visible: true,
            unitInterval: 1,
            color: '#BCBCBC'
        },
        gridLines: {
            visible: true,
            unitInterval: 1,
            color: '#BCBCBC'
        },
        flip: false,
        valuesOnTicks: false
    };
    valueAxis = {
        unitInterval: 100,
        title: { text: 'Revenue (millions USD)' }
    };
    toolTipFormatFunction = (value, index, series) => {
        return `<div>Film: <em>${this.filmNames[series.dataField][index]}</em></div>
    <div>Revenue: ${value} million USD</div>`;
    };
    colorScheme = 'scheme32';
    seriesGroups = [
        {
            type: 'column',
            columnsMaxWidth: 40,
            series: [
                { dataField: 'Jurassic', displayText: 'Jurassic Park' }
            ]
        },
        {
            type: 'column',
            columnsMaxWidth: 20,
            series: [
                { dataField: 'StarWars', displayText: 'Star Wars' }
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