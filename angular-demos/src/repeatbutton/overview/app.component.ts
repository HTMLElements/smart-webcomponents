import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ProgressBarComponent } from 'smart-webcomponents-angular/progressbar';
import { RepeatButtonComponent } from 'smart-webcomponents-angular/repeatbutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('progressbar', { read: ProgressBarComponent, static: false }) progressbar!: ProgressBarComponent;
	@ViewChild('repeatbutton', { read: RepeatButtonComponent, static: false }) repeatbutton!: RepeatButtonComponent;
	@ViewChild('repeatbutton2', { read: RepeatButtonComponent, static: false }) repeatbutton2!: RepeatButtonComponent;
	@ViewChild('repeatbutton3', { read: RepeatButtonComponent, static: false }) repeatbutton3!: RepeatButtonComponent;
	@ViewChild('repeatbutton4', { read: RepeatButtonComponent, static: false }) repeatbutton4!: RepeatButtonComponent;
	@ViewChild('repeatbutton5', { read: RepeatButtonComponent, static: false }) repeatbutton5!: RepeatButtonComponent;
	@ViewChild('repeatbutton6', { read: RepeatButtonComponent, static: false }) repeatbutton6!: RepeatButtonComponent;
	@ViewChild('repeatbutton7', { read: RepeatButtonComponent, static: false }) repeatbutton7!: RepeatButtonComponent;
	@ViewChild('repeatbutton8', { read: RepeatButtonComponent, static: false }) repeatbutton8!: RepeatButtonComponent;
	@ViewChild('repeatbutton9', { read: RepeatButtonComponent, static: false }) repeatbutton9!: RepeatButtonComponent;
	@ViewChild('repeatbutton10', { read: RepeatButtonComponent, static: false }) repeatbutton10!: RepeatButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        let hoverArea = document.getElementById('hover-area'), floatingHoverButton = document.getElementById('floating-hover-action'), floatingClickButton = document.getElementById('floating-click-action'), toggleButtons = document.getElementsByClassName('exclusive-selection'), progressBar = document.getElementById('progressBar'), circularProgressBar = document.getElementById('progressBarCircular');
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
        document.getElementById('progressUp').addEventListener('click', function () {
            progressBar.value = Math.min(progressBar.max, progressBar.value + 1);
            circularProgressBar.value = Math.min(circularProgressBar.max, circularProgressBar.value + 1);
        });
        document.getElementById('progressDown').addEventListener('click', function () {
            progressBar.value = Math.max(progressBar.min, progressBar.value - 1);
            circularProgressBar.value = Math.max(circularProgressBar.min, circularProgressBar.value - 1);
        });
        document.getElementById('incrementButton').addEventListener('click', function () {
            let progressBar = document.getElementById('progressBarCircularControl');
            progressBar.value = Math.min(progressBar.max, progressBar.value + 1);
        });
        document.getElementById('decrementButton').addEventListener('click', function () {
            let progressBar = document.getElementById('progressBarCircularControl');
            progressBar.value = Math.max(progressBar.min, progressBar.value - 1);
        });
    

	}	
}