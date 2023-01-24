import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { TabsComponent, TabItem } from 'smart-webcomponents-angular/tabs';
import { ToggleButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;
    @ViewChild('tabs2', { read: TabsComponent, static: false }) tabs2!: TabsComponent;
    @ViewChild('togglebutton', { read: ToggleButtonComponent, static: false }) togglebutton!: ToggleButtonComponent;


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

        that.togglebutton.addEventListener('change', function (event: any) {
            that.tabs.closeButtons = event.target.checked;
        });
        that.tabs.addEventListener('close', function (event) {
            that.button.disabled = true;
            that.button2.disabled = true;
        });
        that.button.addEventListener('click', function () {
            (<TabItem>that.tabs.nativeElement.getElementsByTagName('smart-tab-item')[2]).closeButtonHidden = false;
            that.button.disabled = true;
            that.button2.disabled = false;
        });
        that.button2.addEventListener('click', function () {
            (<TabItem>that.tabs.nativeElement.getElementsByTagName('smart-tab-item')[2]).closeButtonHidden = true;
            that.button2.disabled = true;
            that.button.disabled = false;
        });
        that.tabs2.addEventListener('closing', function (event: CustomEvent) {
            const close = window.confirm('Do you wish to close tab with index ' + event.detail.index + '?');
            if (!close) {
                event.preventDefault();
            }
        });
    }
}