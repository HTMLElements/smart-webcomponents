import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { SplitterComponent } from 'smart-webcomponents-angular/splitter';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
    @ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
    @ViewChild('button7', { read: ButtonComponent, static: false }) button7!: ButtonComponent;
    @ViewChild('button8', { read: ButtonComponent, static: false }) button8!: ButtonComponent;
    @ViewChild('button9', { read: ButtonComponent, static: false }) button9!: ButtonComponent;
    @ViewChild('button10', { read: ButtonComponent, static: false }) button10!: ButtonComponent;
    @ViewChild('button11', { read: ButtonComponent, static: false }) button11!: ButtonComponent;
    @ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;

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
            splitter = that.splitter;

        that.button.addEventListener('click', function (): void {
            if (splitter.items.length === 0) {
                return;
            }

            const item = document.createElement('smart-splitter-item');

            item.innerHTML = 'New Item Content';
            splitter.appendChild(item);
        });

        that.button2.addEventListener('click', function (): void {
            if (splitter.items.length === 0) {
                return;
            }

            const item = document.createElement('smart-splitter-item');

            item.innerHTML = 'New Item Content';
            splitter.insertBefore(item, splitter.items[0]);
        });

        that.button3.addEventListener('click', function (): void {
            if (splitter.items.length === 0) {
                return;
            }

            splitter.removeChild(splitter.items[0]);
        });

        that.button4.addEventListener('click', function (): void {
            if (splitter.items.length === 0) {
                return;
            }

            splitter.insert(0, { content: 'Newly Inserted Item' });
        });

        that.button5.addEventListener('click', function (): void {
            if (splitter.items.length === 0) {
                return;
            }

            splitter.removeAt(0);
        });

        that.button8.addEventListener('click', function (): void {
            if (splitter.items.length === 0) {
                return;
            }

            splitter.showBar(0);
        });

        that.button9.addEventListener('click', function (): void {
            splitter.hideBar(0);
        });

        that.button6.addEventListener('click', function (): void {
            splitter.collapse(0);
        });

        that.button7.addEventListener('click', function (): void {
            splitter.expand(0);
        });

        that.button10.addEventListener('click', function (): void {
            splitter.lockItem(0);
        });

        that.button11.addEventListener('click', function (): void {
            splitter.unlockItem(0);
        });
    }
}