import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { ProgressBarComponent } from 'smart-webcomponents-angular/progressbar';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('log', { read: ElementRef, static: false }) log: ElementRef;
    @ViewChild('progressbar', { read: ProgressBarComponent, static: false }) progressbar!: ProgressBarComponent;

    setVal(event: any): void {
        this.progressBar.value = 100;
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

        const that = this;

        that.progressBar.addEventListener('change', function (event: CustomEvent): void {
            const newV = event.detail.value,
                oldV = event.detail.oldValue;

            that.log.nativeElement.innerHTML = '"change" event has been raised.' + '<br/><br/>' + 'Event Details:' + '<br/>' + 'newValue:' + newV + '<br/>' + 'oldValue: ' + oldV;
        });
    };
}