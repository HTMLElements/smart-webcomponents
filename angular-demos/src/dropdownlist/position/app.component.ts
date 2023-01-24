import { Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
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

        const that = this;
        const dropDownList = that.dropdownlist;

        dropDownList.dataSource =
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
            dropDownList.dropDownPosition = 'auto';
        });

        that.radiobuttonbottom.addEventListener('change', function (): void {
            dropDownList.dropDownPosition = 'bottom';
        });

        that.radiobuttonoverlaybottom.addEventListener('change', function (): void {
            dropDownList.dropDownPosition = 'overlay-bottom';
        });

        that.radiobuttonoverlaycenter.addEventListener('change', function (): void {
            dropDownList.dropDownPosition = 'overlay-center';
        });

        that.radiobuttonoverlaytop.addEventListener('change', function (): void {
            dropDownList.dropDownPosition = 'overlay-top';
        });

        that.radiobuttontop.addEventListener('change', function (): void {
            dropDownList.dropDownPosition = 'top';
        });

        that.radiobuttoncenterbottom.addEventListener('change', function (): void {
            dropDownList.dropDownPosition = 'center-bottom';
        });

        that.radiobuttoncentertop.addEventListener('change', function (): void {
            dropDownList.dropDownPosition = 'center-top';
        });
    }
}