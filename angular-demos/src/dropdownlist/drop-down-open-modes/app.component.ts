import { Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('log', { read: ElementRef, static: false }) log!: ElementRef;
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button1', { read: ButtonComponent, static: false }) button1!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;


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

        const dropDownList = this.dropdownlist;
        const buttons = [that.button, that.button1, that.button2, that.button3];

        dropDownList.dataSource =
            [{
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
                value: 3,
                group: "A"
            },
            {
                label: "Boyko",
                value: 7,
                group: "A"
            },
            {
                label: "Dimitar",
                value: 3,
                group: "B"
            },
            {
                label: "George",
                value: 25,
                group: "C"
            }];

        buttons[0].addEventListener('click', function () {
            dropDownList.dropDownOpenMode = 'default';
            for (let b = 0; b < buttons.length; b++) {
                buttons[b].disabled = buttons[b] === this ? true : false;
            }
        });

        buttons[1].addEventListener('click', function (): void {
            dropDownList.dropDownOpenMode = 'auto';
            for (let b = 0; b < buttons.length; b++) {
                buttons[b].disabled = buttons[b] === this ? true : false;
            }
        });

        buttons[2].addEventListener('click', function (): void {
            dropDownList.dropDownOpenMode = 'dropDownButton';
            for (let b = 0; b < buttons.length; b++) {
                buttons[b].disabled = buttons[b] === this ? true : false;
            }
        });

        buttons[3].addEventListener('click', function (): void {
            dropDownList.dropDownOpenMode = 'none';
            for (let b = 0; b < buttons.length; b++) {
                buttons[b].disabled = buttons[b] === this ? true : false;
            }
        });

        dropDownList.addEventListener('click', function (event: any): void | undefined {
            const log = that.log.nativeElement;
            const target = event.target;

            if (dropDownList.dropDownOpenMode !== 'dropDownButton') {
                log.innerHTML = 'DropDownButton clicked';
                return;
            }
            
            if (target.classList.contains('smart-action-button')) {
                log.textContent = 'ActionButton clicked';
            }
            else if (target.classList.contains('smart-drop-down-button')) {
                log.textContent = 'DropDownButton clicked';
            }
        });
    }
}