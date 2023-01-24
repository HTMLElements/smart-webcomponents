import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ListBoxComponent } from 'smart-webcomponents-angular/listbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox!: ListBoxComponent;

    dataSource = ["Affogato", "Americano", "Bicerin", "Breve", "Café Bombón", "Café au lait", "Caffé Corretto", "Café Crema", "Caffé Latte", "Caffé macchiato", "Café mélange", "Coffee milk", "Cafe mocha", "Cappuccino", "Carajillo", "Cortado", "Cuban espresso", "Espresso", "Eiskaffee", "The Flat White", "Frappuccino", "Galao", "Greek frappé coffee", "Iced Coffee﻿", "Indian filter coffee", "Instant coffee", "Irish coffee", "Liqueur coffee"];

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

        const listBox = this.listbox;

        listBox.addEventListener("scrollBottomReached", function (): void {
            listBox.displayLoadingIndicator = true;

            setTimeout(function (): void {
                const index: number = listBox.items.length;
                let items = [];

                for (let i = 0; i < 10; i++) {
                    items.push("Item " + parseInt('' + (i + index)));
                }

                listBox.insert(index, items);
                listBox.displayLoadingIndicator = false;
            }, 1000);
        });


    }
}