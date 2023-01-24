import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { PowerButtonComponent } from 'smart-webcomponents-angular/powerbutton';
import { TooltipComponent } from 'smart-webcomponents-angular/tooltip';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('powerButton', { read: PowerButtonComponent, static: false }) powerButton!: PowerButtonComponent;
    @ViewChild('tooltip', { read: TooltipComponent, static: false }) tooltip!: TooltipComponent;
    @ViewChild('log', { read: ElementRef, static: false }) log!: ElementRef;


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
            tooltip = that.tooltip,
            log = that.log.nativeElement;

        tooltip.addEventListener('open', function (): void {
            log.innerHTML = 'Open event fired';
        });

        tooltip.addEventListener('close', function (): void {
            log.innerHTML = 'Close event fired';
        });

        that.powerButton.addEventListener('change', function (event: CustomEvent): void {
            tooltip.nativeElement.innerHTML = 'PowerButton is: ' + (event.detail.value ? "ON" : "OFF");
        });
    }
}