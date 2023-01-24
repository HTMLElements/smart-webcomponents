import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ScrollBarComponent } from 'smart-webcomponents-angular/scrollbar';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('scrollbar', { read: ScrollBarComponent, static: false }) scrollbar!: ScrollBarComponent;
	@ViewChild('scrollbar2', { read: ScrollBarComponent, static: false }) scrollbar2!: ScrollBarComponent;
	@ViewChild('scrollbar3', { read: ScrollBarComponent, static: false }) scrollbar3!: ScrollBarComponent;
	@ViewChild('scrollbar4', { read: ScrollBarComponent, static: false }) scrollbar4!: ScrollBarComponent;
	@ViewChild('scrollbar5', { read: ScrollBarComponent, static: false }) scrollbar5!: ScrollBarComponent;
	@ViewChild('scrollbar6', { read: ScrollBarComponent, static: false }) scrollbar6!: ScrollBarComponent;
	@ViewChild('scrollbar7', { read: ScrollBarComponent, static: false }) scrollbar7!: ScrollBarComponent;
	@ViewChild('scrollbar8', { read: ScrollBarComponent, static: false }) scrollbar8!: ScrollBarComponent;
	@ViewChild('scrollbar9', { read: ScrollBarComponent, static: false }) scrollbar9!: ScrollBarComponent;
	@ViewChild('scrollbar10', { read: ScrollBarComponent, static: false }) scrollbar10!: ScrollBarComponent;
	@ViewChild('scrollbar11', { read: ScrollBarComponent, static: false }) scrollbar11!: ScrollBarComponent;
	@ViewChild('scrollbar12', { read: ScrollBarComponent, static: false }) scrollbar12!: ScrollBarComponent;
	@ViewChild('scrollbar13', { read: ScrollBarComponent, static: false }) scrollbar13!: ScrollBarComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const mediaSlider = document.getElementById('mediaSlider'), alarmSlider = document.getElementById('alarmSlider'), volumeSlider = document.getElementById('volumeSlider'), lowBatterySlider = document.getElementById('lowBatterySlider'), powerSaverSlider = document.getElementById('powerSaverSlider');
        function setIcon(event) {
            let below = "", above = "", off = "";
            const slider = event.target;
            switch (slider) {
                case mediaSlider:
                    below = '<i class="material-icons">&#xE04D;</i>';
                    above = '<i class="material-icons">&#xE050;</i>';
                    off = '<i class="material-icons">&#xE04F;</i>';
                    break;
                case alarmSlider:
                    below = above = '<i class="material-icons">&#xE855;</i>';
                    off = '<i class="material-icons">&#xE857;</i>';
                    break;
                case volumeSlider:
                    below = '<i class="material-icons">&#xE7F5;</i>';
                    above = '<i class="material-icons">&#xE7F4;</i>';
                    off = '<i class="material-icons">&#xE7F6;</i>';
                    break;
            }
            if (slider.value === slider.min) {
                slider.previousElementSibling.innerHTML = off;
            }
            else if (slider.value < slider.max / 2) {
                slider.previousElementSibling.innerHTML = below;
            }
            else {
                slider.previousElementSibling.innerHTML = above;
            }
        }
        function setBatteryLevel(event) {
            const slider = event.target;
            if (slider === lowBatterySlider) {
                document.getElementById('lowBatteryAlert').textContent = slider.value.toString();
            }
            else {
                document.getElementById('powerSaver').textContent = slider.value.toString();
            }
        }
        mediaSlider.addEventListener('change', setIcon);
        alarmSlider.addEventListener('change', setIcon);
        volumeSlider.addEventListener('change', setIcon);
        lowBatterySlider.addEventListener('change', setBatteryLevel);
        powerSaverSlider.addEventListener('change', setBatteryLevel);
    

	}	
}