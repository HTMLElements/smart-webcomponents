import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ProgressBarComponent, CircularProgressBarComponent } from 'smart-webcomponents-angular/progressbar';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { TooltipComponent } from 'smart-webcomponents-angular/tooltip';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('progressbar', { read: ProgressBarComponent, static: false }) progressbar!: ProgressBarComponent;
    @ViewChild('circularProgressBar', { read: CircularProgressBarComponent, static: false }) circularProgressBar: CircularProgressBarComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
    @ViewChild('tooltip', { read: TooltipComponent, static: false }) tooltip!: TooltipComponent;
    @ViewChild('tooltip2', { read: TooltipComponent, static: false }) tooltip2: TooltipComponent;


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
            tooltip2 = that.tooltip2,
            progressBar = that.progressbar,
            circularProgressBar = that.circularProgressBar;

        that.radiobutton.addEventListener('change', function (): void {
            tooltip.position = 'top';
            tooltip2.position = 'top';
        });

        that.radiobutton2.addEventListener('change', function (): void {
            tooltip.position = 'bottom';
            tooltip2.position = 'bottom';
        });

        that.radiobutton3.addEventListener('change', function (): void {
            tooltip.position = 'left';
            tooltip2.position = 'left';
        });

        that.radiobutton4.addEventListener('change', function (): void {
            tooltip.position = 'right';
            tooltip2.position = 'right';
        });

        tooltip.nativeElement.innerHTML = 'Progress: ' + progressBar.value + '%';
        tooltip2.nativeElement.innerHTML = 'Progress: ' + circularProgressBar.value + '%';
    }
}