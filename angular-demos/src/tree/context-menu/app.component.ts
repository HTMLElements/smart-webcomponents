import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MenuComponent } from 'smart-webcomponents-angular/menu';
import { TreeComponent, TreeItem, TreeItemsGroup } from 'smart-webcomponents-angular/tree';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('menu', { read: MenuComponent, static: false }) menu2: MenuComponent;
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

        const that = this,
            tree = that.tree, menu = that.menu;
        let item: TreeItem, itemGroup: TreeItemsGroup;

        tree.addEventListener('contextmenu', function (event: MouseEvent) {
            const target = event.target as HTMLElement;

            item = target.closest('smart-tree-item');
            itemGroup = target.closest('smart-tree-items-group');

            if (!item && !itemGroup) {
                return;
            }

            //Prevent default context menu
            event.preventDefault();

            const menuItems = menu.items;

            for (let i in menuItems) {
                const menuItem = menuItems[i];
                if (menuItem.value === 'addTo' && item) {
                    menuItem.disabled = true;
                }
                else {
                    menuItem.disabled = false;
                }
            }

            //Open Smart.Menu
            menu.open(event.pageX, event.pageY);
        });

        menu.addEventListener('itemClick', function (event: CustomEvent): void {
            const eventDetail = event.detail,
                methodName = eventDetail.value;

            switch (methodName) {
                case 'addAfter':
                case 'addTo':
                    const newItem = document.createElement('smart-tree-item') as TreeItem;

                    newItem.label = 'New item';
                    tree[methodName](newItem, methodName === 'addTo' ? itemGroup : (item || itemGroup));
                    break;
                case 'removeItem':
                    tree[methodName](item || itemGroup);
                    break;
            }
        });
    }
}