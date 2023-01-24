import { Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit } from '@angular/core';
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
    
        this.dropdownlist.dataSource = [
            {
                label: "Andrew",
                value: 1,
                group: "A"
            },
            {
                label: "Natalia",
                value: 5,
                group: "B"
            },
            {
                label: "Michael",
                value: 4,
                group: "B"
            },
            {
                label: "Angel",
                value: 2,
                group: "A"
            },
            {
                label: "Hristo",
                value: 6,
                group: "C"
            },
            {
                label: "Peter",
                value: 3,
                group: "A"
            },
            {
                label: "Albert",
                value: 3,
                group: "A"
            },
            {
                label: "Boyko",
                value: 3,
                group: "A"
            },
            {
                label: "Dimitar",
                value: 3,
                group: "B"
            },
            {
                label: "George",
                value: 3,
                group: "C"
            }
        ];
    

	}	
}