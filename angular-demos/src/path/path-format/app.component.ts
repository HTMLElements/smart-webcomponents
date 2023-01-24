import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { PathComponent, PathFormat } from 'smart-webcomponents-angular/path';
import { RadioButtonComponent, RadioButton } from 'smart-webcomponents-angular/radiobutton';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('path', { read: PathComponent, static: false }) path!: PathComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
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

        const that = this;

        document.addEventListener('change', function (event: CustomEvent): void {
            const pathControl = that.path;

            if ((<RadioButton>event.target).groupName === 'pathFormat') {
                pathControl.pathFormat = (<RadioButton>event.target).innerHTML.trim() as PathFormat;
                return;
            }

            if (event.target instanceof window.Smart.ListBox || event.target instanceof window.Smart.DropDownList) {
                pathControl.nativeElement.value = event.detail.label;
                return;
            }

            if (event.target instanceof window.Smart.Path) {
                that.log.nativeElement.innerHTML = event.detail.value;
            }
        });


    }
}