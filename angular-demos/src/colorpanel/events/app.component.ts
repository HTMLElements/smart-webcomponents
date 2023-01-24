import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ColorPanelComponent, ColorApplyValueMode } from 'smart-webcomponents-angular/colorpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('colorpanel', { read: ColorPanelComponent, static: false }) colorpanel!: ColorPanelComponent;
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

        const that = this,
            log = that.log.nativeElement,
            colorPanel = that.colorpanel;

        if (colorPanel) {
            colorPanel.addEventListener('change', function (event: CustomEvent): void {
                log.innerHTML += '<b>type:</b> ' + event.type + ', <b>value:</b> ' + event.detail.value + '<br />';
            });
        }
    }
}