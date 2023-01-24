import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { TreeComponent } from 'smart-webcomponents-angular/tree';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
    @ViewChild('tree', { read: TreeComponent, static: false }) tree!: TreeComponent;
    @ViewChild('tree2', { read: TreeComponent, static: false }) tree2!: TreeComponent;
    @ViewChild('tree3', { read: TreeComponent, static: false }) tree3!: TreeComponent;
    @ViewChild('tree4', { read: TreeComponent, static: false }) tree4!: TreeComponent;


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

        that.checkbox.addEventListener('change', function (event: any) {
            const checked = event.detail.value;
            that.tree.showLines = checked;
            that.tree2.showLines = checked;
            that.tree3.showLines = checked;
            that.tree4.showLines = checked;
        });
        that.checkbox2.addEventListener('change', function (event: any) {
            const checked = event.detail.value;
            that.tree.showRootLines = checked;
            that.tree2.showRootLines = checked;
            that.tree3.showRootLines = checked;
            that.tree4.showRootLines = checked;
        });
    }
}