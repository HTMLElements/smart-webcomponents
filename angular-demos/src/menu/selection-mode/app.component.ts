import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MenuComponent } from 'smart-webcomponents-angular/menu';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('menu', { read: MenuComponent, static: false }) menu2: MenuComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;


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

        that.radiobutton.addEventListener('change', function () {
            that.menu.selectionMode = 'click';
        });
        that.radiobutton2.addEventListener('change', function () {
            that.menu.selectionMode = 'mouseenter';
        });
    }
}