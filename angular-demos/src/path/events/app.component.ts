import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { PathComponent } from 'smart-webcomponents-angular/path';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('path', { read: PathComponent, static: false }) path!: PathComponent;
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
            pathControl = that.path,
            log = that.log.nativeElement;

        pathControl.addEventListener('browseButtonClick', function (event: CustomEvent): void {
            log.innerHTML += event.type + '</br>';
        });

        pathControl.addEventListener('dropDownButtonClick', function (event: CustomEvent): void {
            log.innerHTML += event.type + '</br>';
        });

        pathControl.addEventListener('open', function (event: CustomEvent): void {
            log.innerHTML += event.type + '</br>';
        });

        pathControl.addEventListener('opening', function (event: CustomEvent): void {
            log.innerHTML += event.type + '</br>';
        });

        pathControl.addEventListener('close', function (event: CustomEvent): void {
            log.innerHTML += event.type + '</br>';
        });

        pathControl.addEventListener('closing', function (event: CustomEvent): void {
            log.innerHTML += event.type + '</br>';
        });

        pathControl.addEventListener('change', function (event: CustomEvent): void {
            log.innerHTML += event.type + '</br>';
        });

        pathControl.addEventListener('itemClick', function (event: CustomEvent): void {
            log.innerHTML += event.type + '</br>';
        });


    }
}