import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	
 
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
        let button = document.querySelector('.button');
        let removeSuccess = () => {
            button.classList.remove('success');
        };
        button.addEventListener('click', function () {
            button.classList.add('success');
            setTimeout(function () {
                removeSuccess();
            }, 3000);
        });
    

	}	
}