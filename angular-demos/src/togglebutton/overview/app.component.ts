import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ToggleButtonComponent } from 'smart-webcomponents-angular/button';


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
	   
        const toggleButtons = document.getElementsByClassName('exclusive-selection');
        for (let i = 0; i < toggleButtons.length; i++) {
            toggleButtons[i].addEventListener('change', function (event) {
                if (event.detail.value) {
                    for (let k = 0; k < toggleButtons.length; k++) {
                        if (toggleButtons[k] !== this) {
                            toggleButtons[k].checked = false;
                        }
                    }
                }
            });
        }
	}	
}