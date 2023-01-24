import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SplitterComponent } from 'smart-webcomponents-angular/splitter';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const splitter = document.querySelector('smart-splitter');
        splitter.dataSource = [
            {
                id: 'item0',
                size: '50%',
                content: '<smart-splitter>' +
                    '<smart-splitter-item size="33%" collapsible id="item1">Item 1</smart-splitter-item>' +
                    '<smart-splitter-item size="33%" id="item2">Item 2</smart-splitter-item>' +
                    '<smart-splitter-item collapsible id="item3">Item 3</smart-splitter-item>' +
                    '</smart-splitter>'
            },
            {
                size: '25%',
                id: 'item4',
                content: 'Item 4',
            },
            {
                id: 'item5',
                content: 'Item 5'
            }
        ];
    

	}	
}