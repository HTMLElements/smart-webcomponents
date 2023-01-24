import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ArrayComponent } from 'smart-webcomponents-angular/array';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('array', { read: ArrayComponent, static: false }) array!: ArrayComponent;
	@ViewChild('array2', { read: ArrayComponent, static: false }) array2!: ArrayComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    let source = {};
    source.numeric = [100, 640, 333, 11, 0.6, 33, 90, 89000, 1, 100, 4, 444, 555, 2.123, 3.14];
    source.string = ['Jaguar', 'Penguin', 'Sherlock', 'Barrel', 'Possum', 'Sun', 'Milan', 'Face', 'Samuel', 'Supernatural', 'Bobby'];
    function generateRandomValue(type) {
        let value = [];
        for (let i = 0; i < 10; i++) {
            value.push([]);
            for (let j = 0; j < 10; j++) {
                value[i][j] = source[type][Math.floor(Math.random() * source[type].length)];
            }
        }
        return value;
    }
    function runTest() {
        setInterval(function () {
            smartArrayNumeric.value = generateRandomValue('numeric');
            smartArrayString.value = generateRandomValue('string');
        }, 10);
    }
    
        const smartArrayNumeric = document.getElementById('smartArrayNumeric'), smartArrayString = document.getElementById('smartArrayString');
        runTest();
    

	}	
}