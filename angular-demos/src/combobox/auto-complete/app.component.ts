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
    @ViewChild('radioButtonNone', { read: RadioButtonComponent, static: false }) radioButtonNone!: RadioButtonComponent;
    @ViewChild('radioButtonAuto', { read: RadioButtonComponent, static: false }) radioButtonAuto!: RadioButtonComponent;
    @ViewChild('radioButtonInline', { read: RadioButtonComponent, static: false }) radioButtonInline!: RadioButtonComponent;
    @ViewChild('radioButtonManual', { read: RadioButtonComponent, static: false }) radioButtonManual!: RadioButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const comboBox = this.combobox;

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
                "Indian filter coffee",
                "Instant coffee",
                "Irish coffee",
                "Liqueur coffee"
            ];

        this.radioButtonNone.addEventListener('change', function ():void {
            comboBox.autoComplete = 'none';
        });

        this.radioButtonAuto.addEventListener('change', function ():void {
            comboBox.autoComplete = 'auto';
        });

        this.radioButtonInline.addEventListener('change', function ():void {
            comboBox.autoComplete = 'inline';
        });
        this.radioButtonManual.addEventListener('change', function ():void {
            comboBox.autoComplete = 'manual';
        });
	}	
}