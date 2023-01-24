import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ComboBoxComponent } from 'smart-webcomponents-angular/combobox';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('combobox', { read: ComboBoxComponent, static: false }) combobox!: ComboBoxComponent;
    @ViewChild('radiobuttonauto', { read: RadioButtonComponent, static: false }) radiobuttonauto!: RadioButtonComponent;
    @ViewChild('radiobuttonbottom', { read: RadioButtonComponent, static: false }) radiobuttonbottom!: RadioButtonComponent;
    @ViewChild('radiobuttonoverlaybottom', { read: RadioButtonComponent, static: false }) radiobuttonoverlaybottom!: RadioButtonComponent;
    @ViewChild('radiobuttonoverlaycenter', { read: RadioButtonComponent, static: false }) radiobuttonoverlaycenter!: RadioButtonComponent;
    @ViewChild('radiobuttonoverlaytop', { read: RadioButtonComponent, static: false }) radiobuttonoverlaytop!: RadioButtonComponent;
    @ViewChild('radiobuttontop', { read: RadioButtonComponent, static: false }) radiobuttontop!: RadioButtonComponent;
    @ViewChild('radiobuttoncenterbottom', { read: RadioButtonComponent, static: false }) radiobuttoncenterbottom!: RadioButtonComponent;
    @ViewChild('radiobuttoncentertop', { read: RadioButtonComponent, static: false }) radiobuttoncentertop!: RadioButtonComponent;



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
            comboBox = that.combobox;

        comboBox.dataSource =
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

        that.radiobuttonauto.addEventListener('change', function (): void {
            comboBox.dropDownPosition = 'auto';
        });

        that.radiobuttonbottom.addEventListener('change', function (): void {
            comboBox.dropDownPosition = 'bottom';
        });

        that.radiobuttonoverlaybottom.addEventListener('change', function (): void {
            comboBox.dropDownPosition = 'overlay-bottom';
        });

        that.radiobuttonoverlaycenter.addEventListener('change', function (): void {
            comboBox.dropDownPosition = 'overlay-center';
        });

        that.radiobuttonoverlaytop.addEventListener('change', function (): void {
            comboBox.dropDownPosition = 'overlay-top';
        });

        that.radiobuttontop.addEventListener('change', function (): void {
            comboBox.dropDownPosition = 'top';
        });

        that.radiobuttoncenterbottom.addEventListener('change', function (): void {
            comboBox.dropDownPosition = 'center-bottom';
        });

        that.radiobuttoncentertop.addEventListener('change', function (): void {
            comboBox.dropDownPosition = 'center-top';
        });
    }
}