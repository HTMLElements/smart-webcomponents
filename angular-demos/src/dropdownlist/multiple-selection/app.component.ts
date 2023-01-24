import { Component,ViewEncapsulation, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const dropDownList = this.dropdownlist;
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
    

	}	
}