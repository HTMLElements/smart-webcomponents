import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { TreeComponent, TreeItem, TreeItemsGroup } from 'smart-webcomponents-angular/tree';


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
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
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

        function handleSwipe(event: any) {
            const originalTarget = event.originalEvent.target, closestItem = originalTarget.closest('smart-tree-item') || originalTarget.closest('smart-tree-items-group');
            if (closestItem) {
                const remove = window.confirm('Do you wish to remove item "' + closestItem.label + '"?');
                if (remove) {
                    that.tree.removeItem(closestItem);
                }
            }
        }

        that.tree.addEventListener('swipeleft', function (event: any) {
            handleSwipe(event);
        });
        that.tree.addEventListener('swiperight', function (event: any) {
            handleSwipe(event);
        });
        that.button.addEventListener('click', function (event: any) {
            const newItem = <TreeItem>document.createElement('smart-tree-item');
            newItem.label = 'Y';
            that.tree.addBefore(newItem, 'zed');
            event.target.disabled = true;
        });
        that.button2.addEventListener('click', function (event: any) {
            const newItem = <TreeItem>document.createElement('smart-tree-item');
            newItem.innerHTML = '0';
            that.tree.addAfter(newItem, 'three');
            event.target.disabled = true;
        });
        that.button3.addEventListener('click', function (event: any) {
            const newItem = <TreeItem>document.createElement('smart-tree-item');
            newItem.innerHTML = 'D';
            that.tree.addTo(newItem, 'letters');
            event.target.disabled = true;
        });
        that.button4.addEventListener('click', function (event: any) {
            const newItemsGroup = <TreeItemsGroup>document.createElement('smart-tree-items-group');
            newItemsGroup.innerHTML = 'Capital letters<smart-tree-item>Α</smart-tree-item><smart-tree-item>Γ</smart-tree-item><smart-tree-item>Δ</smart-tree-item><smart-tree-item>Σ</smart-tree-item><smart-tree-item>Β</smart-tree-item>';
            newItemsGroup.expanded = true;
            that.tree.addTo(newItemsGroup, 'greekLetters');
            event.target.disabled = true;
        });
        that.button5.addEventListener('click', function (event: any) {
            that.tree.removeItem('one');
            event.target.disabled = true;
        });
        that.checkbox.addEventListener('change', function (event: any) {
            that.tree.sorted = event.detail.value;
        });
        that.checkbox2.addEventListener('change', function (event: any) {
            that.tree.autoSort = event.detail.value;
        });
    }
}