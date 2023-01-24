import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        'use strict';
        //ValidationPanel
        const validationPanel = new Smart.Utilities.ValidationPanel('.data-validation-panel');
        // On Submit
        document.querySelector('.smart-save-footer-button').addEventListener('click', () => appendDataValidationFormat(validationPanel));
    };
    let appendDataValidationFormat = (validationPanel) => {
        'use strict';
        let format = validationPanel.getDataValidationFormat();
        if (format) {
            document.querySelector('.custom-format-holder').innerHTML = format;
        }
    

	}	
}