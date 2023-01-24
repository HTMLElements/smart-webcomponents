import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { ListBoxComponent } from 'smart-webcomponents-angular/listbox';
import { SplitterComponent, SplitterItemComponent } from 'smart-webcomponents-angular/splitter';
import { TabsComponent } from 'smart-webcomponents-angular/tabs';
import { CircularProgressBarComponent } from 'smart-webcomponents-angular/progressbar';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox!: ListBoxComponent;
    @ViewChild('progressBar', { read: CircularProgressBarComponent, static: false }) progressBar!: CircularProgressBarComponent;
    @ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;
    @ViewChild('splitter2', { read: SplitterComponent, static: false }) splitter2!: SplitterComponent;
    @ViewChild('splitter3', { read: SplitterComponent, static: false }) splitter3!: SplitterComponent;
    @ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;
    @ViewChild('contentHolder', { read: SplitterItemComponent, static: false }) contentHolder!: SplitterItemComponent;
    @ViewChild('tabsContentHolder', { read: SplitterItemComponent, static: false }) tabsContentHolder!: SplitterItemComponent;
    @ViewChild('waterText', { read: ElementRef, static: false }) waterText!: ElementRef;
    @ViewChild('soilText', { read: ElementRef, static: false }) soilText!: ElementRef;
    @ViewChild('airText', { read: ElementRef, static: false }) airText!: ElementRef;


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
            splitter = that.splitter,
            contentHolder = that.contentHolder.nativeElement,
            progressHolder = that.progressBar;
        const tabs = that.tabs;

        tabs.addEventListener('change', function (event: CustomEvent): void {
            const index = event.detail.index,
                contentHolder = that.tabsContentHolder.nativeElement;

            if (index === 0) {
                contentHolder.innerHTML = '<div id="map-canvas-0"></div>'; //New York
            }
            else if (index === 1) {
                contentHolder.innerHTML = '<div id="map-canvas-1"></div>'; //Hong Kong
            }
            else {
                contentHolder.innerHTML = '<div id="map-canvas-2"></div>'; //Bali
            }
        });

        contentHolder.innerHTML = that.waterText.nativeElement.innerHTML;

        that.listbox.addEventListener('change', function (event: CustomEvent): void {
            if (event.detail.label.toLowerCase() === 'water') {
                contentHolder.innerHTML = that.waterText.nativeElement.innerHTML;
                progressHolder.value = 71;
            }
            else if (event.detail.label.toLowerCase() === 'soil') {
                contentHolder.innerHTML = that.soilText.nativeElement.innerHTML;
                progressHolder.value = 29;
            }
            else {
                contentHolder.innerHTML = that.airText.nativeElement.innerHTML;
                progressHolder.value = 100;
            }
        });
    }
}