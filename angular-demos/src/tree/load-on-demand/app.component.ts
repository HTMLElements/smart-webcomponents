import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TreeComponent, TreeItem, TreeItemsGroup } from 'smart-webcomponents-angular/tree';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
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

        that.tree.addEventListener("expanding", function (event: any) {
            if (event.detail.label === 'Group 2' && event.detail.children.length === 0) {
                const load = window.confirm('Do you wish to load items dynamically?');
                if (!load) {
                    event.preventDefault();
                }
            }
        });
        that.tree.addEventListener("expand", function (event: any) {
            if (event.detail.children.length > 0) {
                return;
            }
            that.tree.displayLoadingIndicator = true;
            setTimeout(function () {
                const newItem1 = <TreeItem>document.createElement('smart-tree-item'),
                    newItem2 = <TreeItem>document.createElement('smart-tree-item');
                newItem1.label = 'Item ' + event.detail.path + '.0';
                newItem2.label = 'Item ' + event.detail.path + '.1';
                that.tree.addTo(newItem1, event.detail.item);
                that.tree.addTo(newItem2, event.detail.item);
                if (event.detail.item.level < 4) {
                    const newItemsGroup = <TreeItemsGroup>document.createElement('smart-tree-items-group');
                    newItemsGroup.label = 'Group ' + event.detail.path + '.2';
                    that.tree.addTo(newItemsGroup, event.detail.item);
                }
                that.tree.displayLoadingIndicator = false;
            }, 1000);
        });
    }
}