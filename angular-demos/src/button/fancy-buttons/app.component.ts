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
	@ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
	@ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
	@ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
	@ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
	@ViewChild('button7', { read: ButtonComponent, static: false }) button7!: ButtonComponent;
	@ViewChild('button8', { read: ButtonComponent, static: false }) button8!: ButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {	
		let button = document.querySelector('.cta');
        button.addEventListener('click', function () {
            button.classList.add('active');
            window.setTimeout(() => {
                button.classList.remove('active');
            }, 300);
        });
	}	
}