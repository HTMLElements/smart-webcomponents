import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SliderComponent } from 'smart-webcomponents-angular/slider';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('slider', { read: SliderComponent, static: false }) slider!: SliderComponent;
	@ViewChild('slider2', { read: SliderComponent, static: false }) slider2!: SliderComponent;
	@ViewChild('slider3', { read: SliderComponent, static: false }) slider3!: SliderComponent;
	@ViewChild('slider4', { read: SliderComponent, static: false }) slider4!: SliderComponent;
	@ViewChild('slider5', { read: SliderComponent, static: false }) slider5!: SliderComponent;
	@ViewChild('slider6', { read: SliderComponent, static: false }) slider6!: SliderComponent;
	@ViewChild('slider7', { read: SliderComponent, static: false }) slider7!: SliderComponent;
	@ViewChild('slider8', { read: SliderComponent, static: false }) slider8!: SliderComponent;
	@ViewChild('slider9', { read: SliderComponent, static: false }) slider9!: SliderComponent;
	@ViewChild('slider10', { read: SliderComponent, static: false }) slider10!: SliderComponent;
	@ViewChild('slider11', { read: SliderComponent, static: false }) slider11!: SliderComponent;
	@ViewChild('slider12', { read: SliderComponent, static: false }) slider12!: SliderComponent;
	@ViewChild('slider13', { read: SliderComponent, static: false }) slider13!: SliderComponent;
	@ViewChild('slider14', { read: SliderComponent, static: false }) slider14!: SliderComponent;
	@ViewChild('slider15', { read: SliderComponent, static: false }) slider15!: SliderComponent;
	@ViewChild('slider16', { read: SliderComponent, static: false }) slider16!: SliderComponent;
	@ViewChild('slider17', { read: SliderComponent, static: false }) slider17!: SliderComponent;
	@ViewChild('slider18', { read: SliderComponent, static: false }) slider18!: SliderComponent;
	@ViewChild('slider19', { read: SliderComponent, static: false }) slider19!: SliderComponent;
	@ViewChild('slider20', { read: SliderComponent, static: false }) slider20!: SliderComponent;
	
 
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
                document.getElementById('lowBatteryAlert').textContent = slider.value;
            }
            else {
                document.getElementById('powerSaver').textContent = slider.value;
            }
        }
        mediaSlider.addEventListener('change', setIcon);
        alarmSlider.addEventListener('change', setIcon);
        volumeSlider.addEventListener('change', setIcon);
        lowBatterySlider.addEventListener('change', setBatteryLevel);
        powerSaverSlider.addEventListener('change', setBatteryLevel);
    

	}	
}