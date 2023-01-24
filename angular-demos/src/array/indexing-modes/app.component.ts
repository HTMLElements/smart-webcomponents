import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ArrayComponent } from 'smart-webcomponents-angular/array';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('array', { read: ArrayComponent, static: false }) smartArrayLabVIEW!: ArrayComponent;
	@ViewChild('array2', { read: ArrayComponent, static: false }) smartArrayJavaScript!: ArrayComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	     
        const numericValueArray1 = [
            [
                [
                    [1, 88, 0, 0, 0],
                    [22, 2, 0, 0, 0],
                    [0, 0, 3, 0, 0],
                    [0, 0, 0, 4, 0],
                    [0, 0, 0, 0, 5]
                ],
                [
                    [10, 0, 0, 0, 13],
                    [0, 20, 0, 0, 0],
                    [0, 33, 30, 0, 0],
                    [0, 0, 0, 40, 0],
                    [0, 0, 0, 0, 50]
                ]
            ],
            [
                [
                    [2, 0, 0, 0, 0],
                    [0, 4, 0, 0, 0],
                    [0, 0, 6, 0, 0],
                    [0, 0, 0, 8, 0],
                    [0, 0, 0, 0, 10]
                ],
                [
                    [44, 16, 0, 0, 0],
                    [22, 44, 22, 22, 22],
                    [0, 0, 44, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0]
                ]
            ]
        ];
        const numericValueArray2 = JSON.parse(JSON.stringify(numericValueArray1));
     
		this.smartArrayLabVIEW.value = numericValueArray1;
        this.smartArrayJavaScript.value = numericValueArray2;
	}	
}