import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { MenuComponent, MenuItem } from 'smart-webcomponents-angular/menu';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('menu', { read: MenuComponent, static: false }) menu2: MenuComponent;


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
        let itemCount = 1, subItemCount = 0;

        that.button.addEventListener('click', function () {
            itemCount++;
            const newItem = <MenuItem>document.createElement('smart-menu-item');
            newItem.innerHTML = 'Item ' + itemCount;
            that.menu.addItem(newItem);
        });
        that.button2.addEventListener('click', function () {
            subItemCount++;
            const newItem = <MenuItem>document.createElement('smart-menu-item');
            newItem.innerHTML = 'Item 0.' + subItemCount;
            that.menu.addItem(newItem, '0');
        });
        that.button3.addEventListener('click', function () {
            that.menu.removeItem('1');
            that.button3.disabled = true;
        });
    }
}