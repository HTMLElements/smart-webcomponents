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
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    ;
    
        function updateLogs() {
            document.getElementById('fp').innerHTML = newDateTime.toString('FP');
            document.getElementById('ft').innerHTML = newDateTime.toString('FT');
            document.getElementById('pp').innerHTML = newDateTime.toString('PP');
            document.getElementById('pt').innerHTML = newDateTime.toString('PT');
            document.getElementById('custom').innerHTML = newDateTime.toString('fff:uu:nn');
        }
        const newDateTime = new smartUtilities.DateTime(1920, 3, 12, 8, 34, 21, 89, 19, 800, 2, 333, 18, 45, 11);
        updateLogs();
        document.getElementById('microseconds').addEventListener('click', function () {
            newDateTime.addMicroseconds(1, false);
            updateLogs();
        });
        document.getElementById('yoctoseconds').addEventListener('click', function () {
            newDateTime.addYoctoseconds(-2, false);
            updateLogs();
        });
        document.getElementById('now').addEventListener('click', function () {
            newDateTime = new smartUtilities.DateTime(new Date());
            updateLogs();
        });
    

	}	
}