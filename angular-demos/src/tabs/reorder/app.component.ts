import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { TabsComponent, TabItem } from 'smart-webcomponents-angular/tabs';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;
    @ViewChild('log', { read: ElementRef, static: false }) log: ElementRef;


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

        that.tabs.addEventListener('reorder', function (event: CustomEvent) {
            that.log.nativeElement.innerHTML = 'Moved a tab from position ' + event.detail.originalIndex + ' to position ' + event.detail.newIndex + '.';
        });
        that.button.addEventListener('click', function () {
            (<TabItem>that.tabs.nativeElement.getElementsByTagName('smart-tab-item')[3]).index = 0;
        });
    }
}