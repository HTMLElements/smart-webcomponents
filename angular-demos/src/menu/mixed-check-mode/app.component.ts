import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MenuComponent } from 'smart-webcomponents-angular/menu';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('menu', { read: MenuComponent, static: false }) menu!: MenuComponent;
    @ViewChild('menu2', { read: MenuComponent, static: false }) menu2!: MenuComponent;
    @ViewChild('menu3', { read: MenuComponent, static: false }) menu3!: MenuComponent;

    dataSource = [{
        checkable: true,
        checkMode: 'radioButton, none',
        items: [
            {
                label: 'Line',
                value: 'line',
                checked: true
            },
            {
                label: 'Bar',
                value: 'bar'
            },
            {
                label: 'Point',
                value: 'point'
            },
            {
                label: 'Area',
                value: 'area'
            },
            {
                label: 'Hide',
                value: 'hide',
                separator: true
            },
            {
                label: 'Sort',
                checkable: true,
                checkMode: 'radioButton',
                items: [
                    {
                        label: 'Descending',
                        value: 'descending'
                    },
                    {
                        label: 'None',
                        value: 'none',
                        checked: true
                    },
                    {
                        label: 'Ascending',
                        value: 'ascending'
                    }
                ]
            }
        ]
    }];

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