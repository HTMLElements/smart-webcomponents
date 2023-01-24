import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { TreeComponent } from 'smart-webcomponents-angular/tree';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('tree', { read: TreeComponent, static: false }) tree!: TreeComponent;
    @ViewChild('tree2', { read: TreeComponent, static: false }) tree2: TreeComponent;


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
            that.tree.overflow = 'auto';
            that.tree2.overflow = 'auto';
        });
        that.radiobutton2.addEventListener('change', function () {
            that.tree.overflow = 'hidden';
            that.tree2.overflow = 'hidden';
        });
        that.radiobutton3.addEventListener('change', function () {
            that.tree.overflow = 'scroll';
            that.tree2.overflow = 'scroll';
        });
    }
}