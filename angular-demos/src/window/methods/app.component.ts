import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
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
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
    @ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
    @ViewChild('window', { read: WindowComponent, static: false }) smartWindow!: WindowComponent;


    onButtonClick(event: any): void {
        this.smartWindow.opened ? this.smartWindow.close() : this.smartWindow.open();
    }

    onButton2Click(event: any): void {
        this.smartWindow.maximized ? this.smartWindow.restore() : this.smartWindow.maximize();
    }

    onButton3Click(event: any): void {
        this.smartWindow.minimized ? this.smartWindow.restore() : this.smartWindow.minimize();
    }

    onButton4Click(event: any): void {
        this.smartWindow.pinned ? this.smartWindow.unpin() : this.smartWindow.pin();
    }

    onButton5Click(event: any): void {
        this.smartWindow.collapsed ? this.smartWindow.expand() : this.smartWindow.collapse();
    }

    onButton6Click(event: any): void {
        this.smartWindow.disabled = !this.smartWindow.disabled;
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