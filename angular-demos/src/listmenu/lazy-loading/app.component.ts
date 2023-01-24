import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ListMenuComponent, MenuItemsGroup, MenuItem } from 'smart-webcomponents-angular/listmenu';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('listmenu', { read: ListMenuComponent, static: false }) listmenu!: ListMenuComponent;


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

        that.listmenu.addEventListener("scrollBottomReached", function () {
            that.listmenu.displayLoadingIndicator = true;
            setTimeout(function () {
                for (let i = 0; i < 5; i++) {
                    const newItem = <MenuItemsGroup>document.createElement('smart-menu-items-group');
                    newItem.value = 'emptyItem';
                    that.listmenu.addItem(newItem);
                }
                that.listmenu.displayLoadingIndicator = false;
            }, 1000);
        });
        that.listmenu.addEventListener("expand", function (event: any) {
            if (event.detail.value === 'emptyItem') {
                that.listmenu.displayLoadingIndicator = true;
                setTimeout(function () {
                    for (let i = 0; i < 3; i++) {
                        const newItem = <MenuItem>document.createElement('smart-menu-item');
                        that.listmenu.addItem(newItem, event.detail.path);
                    }
                    that.listmenu.displayLoadingIndicator = false;
                }, 1000);
                event.detail.item.value = 'populatedItem';
            }
        });
    }
}