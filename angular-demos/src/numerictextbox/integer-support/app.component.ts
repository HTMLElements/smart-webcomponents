import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('numerictextbox', { read: NumericTextBoxComponent, static: false }) numerictextbox!: NumericTextBoxComponent;
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

        that.numerictextbox.addEventListener('change', function (event: CustomEvent) {
            const newValue = event.detail.value,
                oldValue = event.detail.oldValue;

            that.log.nativeElement.innerHTML = 'New: ' + newValue + '; old: ' + oldValue;
        });
    }
}