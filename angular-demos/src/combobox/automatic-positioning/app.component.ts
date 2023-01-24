import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ComboBoxComponent } from 'smart-webcomponents-angular/combobox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('combobox', { read: ComboBoxComponent, static: false }) combobox!: ComboBoxComponent;
    @ViewChild('combobox2', { read: ComboBoxComponent, static: false }) combobox2!: ComboBoxComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

        const comboBoxes = [this.combobox, this.combobox2];

        for (let i = 0; i < comboBoxes.length; i++) {
            comboBoxes[i].dataSource =
                [
                    "Affogato",
                    "Americano",
                    "Bicerin",
                    "Breve",
                    "Café Bombón",
                    "Café au lait",
                    "Caffé Corretto",
                    "Café Crema",
                    "Caffé Latte",
                    "Caffé macchiato",
                    "Café mélange",
                    "Coffee milk",
                    "Cafe mocha",
                    "Cappuccino",
                    "Carajillo",
                    "Cortado",
                    "Cuban espresso",
                    "Espresso",
                    "Eiskaffee",
                    "The Flat White",
                    "Frappuccino",
                    "Galao",
                    "Greek frappé coffee",
                    "Alabala",
                    "Indian filter coffee",
                    "Instant coffee",
                    "Irish coffee",
                    "Liqueur coffee"
                ];
        }


    }
}