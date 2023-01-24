import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TankComponent } from 'smart-webcomponents-angular/tank';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('tank', { read: TankComponent, static: false }) tank!: TankComponent;
	@ViewChild('tank2', { read: TankComponent, static: false }) tank2!: TankComponent;
	@ViewChild('tank3', { read: TankComponent, static: false }) tank3!: TankComponent;
	@ViewChild('tank4', { read: TankComponent, static: false }) tank4!: TankComponent;
	@ViewChild('tank5', { read: TankComponent, static: false }) tank5!: TankComponent;
	@ViewChild('tank6', { read: TankComponent, static: false }) tank6!: TankComponent;
	@ViewChild('tank7', { read: TankComponent, static: false }) tank7!: TankComponent;
	@ViewChild('tank8', { read: TankComponent, static: false }) tank8!: TankComponent;
	@ViewChild('tank9', { read: TankComponent, static: false }) tank9!: TankComponent;
	@ViewChild('tank10', { read: TankComponent, static: false }) tank10!: TankComponent;
	@ViewChild('tank11', { read: TankComponent, static: false }) tank11!: TankComponent;
	@ViewChild('tank12', { read: TankComponent, static: false }) tank12!: TankComponent;
	@ViewChild('tank13', { read: TankComponent, static: false }) tank13!: TankComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        let cpuTank = document.getElementById('cpuTank'), batteryTank = document.getElementById('powerSaverTank');
        function setTemperature(event) {
            const tank = event.target;
            let color = '#0C9F59';
            if (tank.value === '0') {
                color = '';
            }
            else if (tank.value < tank.max * 0.25) {
                color = '#DB4534';
            }
            else if (tank.value > tank.max * 0.2 && tank.value < tank.max * 0.70) {
                color = '#FFEB3B';
            }
            tank.style.setProperty('--smart-primary', color);
            document.getElementById('powerSaver').innerHTML = tank.value;
        }
        cpuTank.labelFormatFunction = ((label) => { return label + '%'; });
        batteryTank.addEventListener('change', setTemperature);
        let cpu = document.getElementById('cpu');
        setInterval(function () {
            cpuTank.value = Math.random() * 100;
            cpu.textContent = cpuTank.value;
        }, 1500);
    

	}	
}