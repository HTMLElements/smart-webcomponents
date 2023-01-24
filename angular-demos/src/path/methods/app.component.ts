import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { PathComponent } from 'smart-webcomponents-angular/path';
import { ButtonComponent, Button } from 'smart-webcomponents-angular/button';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('path', { read: PathComponent, static: false }) path!: PathComponent;
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
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
            path = that.path;

        document.addEventListener('click', function (event: CustomEvent): void {
            const methodName = (<Button>event.target).textContent;

            switch (methodName) {
                case "setToNotAPath":
                    path.setToNotAPath();
                    break;
                case "setToEmptyPath":
                    path.setToEmptyPath();
                    break;
                case "open":
                    path.open();
                    break;
                case "close":
                    path.close();
                    break;
            }
        });

        path.addEventListener('change', function (event: CustomEvent): void {
            that.log.nativeElement.innerHTML = event.detail.value;
        });
    }
}