import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { ListBoxComponent } from 'smart-webcomponents-angular/listbox';


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
    @ViewChild('button12', { read: ButtonComponent, static: false }) button12!: ButtonComponent;
    @ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox!: ListBoxComponent;

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

        const list = that.listbox,
            data = [
                {
                    label: "Andrew",
                    value: 1,
                    group: "A"
                },
                {
                    label: "Natalia",
                    value: 5,
                    group: "B"
                },
                {
                    label: "Michael",
                    value: 4,
                    group: "B"
                },
                {
                    label: "Angel",
                    value: 2,
                    group: "A"
                },
                {
                    label: "Hristo",
                    value: 6,
                    group: "C"
                },
                {
                    label: "Peter",
                    value: 3,
                    group: "A"
                },
                {
                    label: "Albert",
                    value: 2,
                    group: "A"
                },
                {
                    label: "Boyko",
                    value: 8,
                    group: "A"
                },
                {
                    label: "Dimitar",
                    value: 2,
                    group: "B"
                },
                {
                    label: "George",
                    value: 10,
                    group: "C"
                }
            ];

        list.dataSource = data;

        that.button.nativeElement.onclick = function ():void {
            list.sorted = false;
        };

        that.button2.nativeElement.onclick = function ():void {
            list.sorted = true;
        };

        that.button3.nativeElement.onclick = function ():void {
            list.grouped = false;
        };

        that.button4.nativeElement.onclick = function ():void {
            list.grouped = true;
        };

        that.button5.nativeElement.onclick = function ():void {
            list.selectionMode = 'one';
        };

        that.button6.nativeElement.onclick = function ():void {
            list.selectionMode = 'checkBox';
        };

        that.button7.nativeElement.onclick = function ():void {
            list.selectionMode = 'radioButton';
        };

        that.button8.nativeElement.onclick = function ():void {
            list.insert(0, "New Item");
        };
        that.button9.nativeElement.onclick = function ():void {
            list.update(0, "Updated Item");
        };

        that.button10.nativeElement.onclick = function ():void {
            list.removeAt(0);
        };

        that.button11.nativeElement.onclick = function ():void {
            list.disabled = !list.disabled;
        };

        that.button12.nativeElement.onclick = function ():void {
            list.clearItems();
        };
    }
}