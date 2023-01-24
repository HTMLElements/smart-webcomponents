import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { ButtonComponent, Button } from 'smart-webcomponents-angular/button';
import { ProgressBarComponent, CircularProgressBarComponent } from 'smart-webcomponents-angular/progressbar';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
    @ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
    @ViewChild('button7', { read: ButtonComponent, static: false }) button7!: ButtonComponent;
    @ViewChild('input', { read: ElementRef, static: false }) input: ElementRef;
    @ViewChild('progressbar', { read: ProgressBarComponent, static: false }) progressbar!: ProgressBarComponent;
    @ViewChild('progressbar2', { read: ProgressBarComponent, static: false }) progressbar2: ProgressBarComponent;
    @ViewChild('circularProgressBar', { read: CircularProgressBarComponent, static: false }) circularProgressBar: CircularProgressBarComponent;

    setValue(event: any): void {
        const that = this,
            progressBar1: ProgressBarComponent = that.progressbar as ProgressBarComponent,
            progressBar2: ProgressBarComponent = that.progressbar2 as ProgressBarComponent,
            progressBar3: CircularProgressBarComponent = that.circularProgressBar as CircularProgressBarComponent,
            input: HTMLInputElement = that.input.nativeElement as HTMLInputElement;
        const value: number = parseInt(input.value, 10) || 0;

        progressBar1.value = value;
        progressBar2.value = value;
        progressBar3.value = value;
    }

    setSettings(event: any, key: string | number): void {
        const that = this,
            progressBar1: ProgressBarComponent = that.progressbar as ProgressBarComponent,
            progressBar2: ProgressBarComponent = that.progressbar2 as ProgressBarComponent,
            progressBar3: CircularProgressBarComponent = that.circularProgressBar as CircularProgressBarComponent,
            layoutButtons = [that.button2, that.button3] as Array<ButtonComponent>,
            minButtons = [that.button4, that.button5] as Array<ButtonComponent>,
            maxButtons = [that.button6, that.button7] as Array<ButtonComponent>;

        switch (key) {
            case 'normal':
                progressBar1.inverted = false;
                progressBar2.inverted = false;
                progressBar3.inverted = false;
                layoutButtons[0].disabled = true;
                layoutButtons[1].disabled = false;
                break;
            case 'inverted':
                progressBar1.inverted = true;
                progressBar2.inverted = true;
                progressBar3.inverted = true;
                layoutButtons[0].disabled = false;
                layoutButtons[1].disabled = true;
                break;
            case 0:
                progressBar1.min = 0;
                progressBar2.min = 0;
                progressBar3.min = 0;
                layoutButtons[0].disabled = true;
                layoutButtons[1].disabled = false;
                break;
            case 50:
                progressBar1.min = 50;
                progressBar2.min = 50;
                progressBar3.min = 50;
                minButtons[0].disabled = false;
                minButtons[1].disabled = true;
            case 100:
                progressBar1.max = 100;
                progressBar2.max = 100;
                progressBar2.max = 100;
                maxButtons[0].disabled = true;
                maxButtons[1].disabled = false;
                break;
            case 200:
                progressBar1.max = 200;
                progressBar2.max = 200;
                progressBar2.max = 200;
                maxButtons[0].disabled = false;
                maxButtons[1].disabled = true;
                break;
            default:
                break;
        }
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

    }
}