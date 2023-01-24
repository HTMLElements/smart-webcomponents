import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChipComponent } from 'smart-webcomponents-angular/chip';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('chip', { read: ChipComponent, static: false }) chip!: ChipComponent;
	@ViewChild('chip2', { read: ChipComponent, static: false }) chip2!: ChipComponent;
	@ViewChild('chip3', { read: ChipComponent, static: false }) chip3!: ChipComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const chips = document.getElementsByTagName('smart-chip'), evetLog = document.getElementById('eventLog');
        for (let i = 0; i < chips.length; i++) {
            const chip = chips[i];
            chip.addEventListener('click', function () {
                const chip = this;
                evetLog.innerHTML = evetLog.innerHTML + 'clicked <b>' + chip.value + '</b>\'s chip<br />';
            });
            chip.addEventListener('close', function () {
                evetLog.innerHTML = evetLog.innerHTML + 'removed <b>' + chip.value + '</b>\'s chip<br />';
            });
        }
    

	}	
}