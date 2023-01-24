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
    @ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
    @ViewChild('radiobutton5', { read: RadioButtonComponent, static: false }) radiobutton5!: RadioButtonComponent;
    @ViewChild('radiobutton6', { read: RadioButtonComponent, static: false }) radiobutton6!: RadioButtonComponent;
    @ViewChild('radiobutton7', { read: RadioButtonComponent, static: false }) radiobutton7!: RadioButtonComponent;
    @ViewChild('radiobutton8', { read: RadioButtonComponent, static: false }) radiobutton8!: RadioButtonComponent;
    @ViewChild('radiobutton9', { read: RadioButtonComponent, static: false }) radiobutton9!: RadioButtonComponent;
    @ViewChild('radiobutton10', { read: RadioButtonComponent, static: false }) radiobutton10!: RadioButtonComponent;
    @ViewChild('radiobutton11', { read: RadioButtonComponent, static: false }) radiobutton11!: RadioButtonComponent;
    @ViewChild('tree', { read: TreeComponent, static: false }) tree!: TreeComponent;


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
            that.tree.selectionMode = 'none';
        });
        that.radiobutton2.addEventListener('change', function () {
            that.tree.selectionMode = 'one';
        });
        that.radiobutton3.addEventListener('change', function () {
            that.tree.selectionMode = 'zeroOrOne';
        });
        that.radiobutton4.addEventListener('change', function () {
            that.tree.selectionMode = 'zeroOrMany';
        });
        that.radiobutton5.addEventListener('change', function () {
            that.tree.selectionMode = 'oneOrMany';
        });
        that.radiobutton6.addEventListener('change', function () {
            that.tree.selectionMode = 'oneOrManyExtended';
        });
        that.radiobutton7.addEventListener('change', function () {
            that.tree.selectionMode = 'checkBox';
        });
        that.radiobutton8.addEventListener('change', function () {
            that.tree.selectionMode = 'radioButton';
        });
        that.radiobutton9.addEventListener('change', function () {
            that.tree.toggleMode = 'dblclick';
        });
        that.radiobutton10.addEventListener('change', function () {
            that.tree.toggleMode = 'click';
        });
        that.radiobutton11.addEventListener('change', function () {
            that.tree.toggleMode = 'arrow';
        });
    }
}