import { Component, ViewChild, OnInit, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { TabsComponent, Tabs, Smart } from 'smart-webcomponents-angular/tabs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('tabsContainer', { read: ElementRef, static: false }) tabsContainer!: ElementRef;
    //   @ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;

    constructor(private renderer: Renderer2) {

    }

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const tabs = document.createElement('smart-tabs');

        document.body.appendChild(tabs);

        const tabItem1 = document.createElement('smart-tab-item'),
            tabItem2 = document.createElement('smart-tab-item');

        tabItem1.label = 'TAB 1';
        tabItem1.content = 'Content 1';
        tabItem2.label = 'TAB 2';
        tabItem2.content = 'Content 2';

        tabs.appendChild(tabItem1);
        tabs.appendChild(tabItem2);

        Smart.Render();
    }
}