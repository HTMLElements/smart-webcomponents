import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { TreeComponent } from 'smart-webcomponents-angular/tree';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('tree', { read: TreeComponent, static: false }) tree!: TreeComponent;
    @ViewChild('tree2', { read: TreeComponent, static: false }) tree2!: TreeComponent;


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
            that.tree.toggleElementPosition = 'near';
            that.tree2.toggleElementPosition = 'near';
        });
        that.radiobutton2.addEventListener('change', function () {
            that.tree.toggleElementPosition = 'far';
            that.tree2.toggleElementPosition = 'far';
        });
        that.checkbox.addEventListener('change', function (event: any) {
            const autoHideToggleElement = event.detail.value;
            that.tree.autoHideToggleElement = autoHideToggleElement;
            that.tree2.autoHideToggleElement = autoHideToggleElement;
        });
    }
}