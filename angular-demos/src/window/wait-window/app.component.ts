﻿import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { WindowComponent } from 'smart-webcomponents-angular/window';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('window', { read: WindowComponent, static: false }) smartWindow!: WindowComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.


        const smartWindow = this.smartWindow;

        this.button.addEventListener('click', function (): void {
            if (smartWindow.opened) {
                return;
            }

            smartWindow.open();

            setTimeout(function () {
                smartWindow.close();
            }, 2500);
        });


    }
}