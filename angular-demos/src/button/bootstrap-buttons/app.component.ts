import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	
 
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
        let submitButtons = document.querySelectorAll('smart-button.submit');
        for (let i = 0; i < submitButtons.length; i++) {
            let submitButton = submitButtons[i];
            submitButton.addEventListener('click', function () {
                if (submitButton.classList.contains('sending')) {
                    submitButton.classList.remove('sending');
                }
                else {
                    submitButton.classList.add('sending');
                }
                setTimeout(function () {
                    submitButton.classList.remove('sending');
                }, 4500);
            });
        }
    

	}	
}