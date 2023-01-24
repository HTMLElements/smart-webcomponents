import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { TreeComponent } from 'smart-webcomponents-angular/tree';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
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
            if (closestItem && closestItem.level > 1 && closestItem.label !== 'editorTemplate') {
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
        that.tree.addEventListener('click', function (event: any) {
            const target = event.target;
            const button = target.closest('smart-button');
            if (!button) {
                return;
            }
            const input = button.previousElementSibling, editorItem = button.closest('smart-tree-item'), treeItemsGroup = button.closest('smart-tree-items-group');
            if (input.value) {
                const newItem = document.createElement('smart-tree-item');
                newItem.innerHTML = input.value;
                that.tree.addBefore(newItem, editorItem);
                input.value = '';
            }
        });
    }
}