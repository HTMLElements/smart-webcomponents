import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const basePath = '../../../images/', carousel = document.querySelector('smart-carousel');
        carousel.dataSource = generateDataSource(6);
        function generateDataSource(items) {
            const dataSource = Array(items).fill({});
            dataSource.forEach((element, index) => dataSource[index] = {
                image: `${basePath}carousel-medium-${index + 1}.jpg`,
                label: 'Slide ' + index,
                content: 'Content ' + index
            });
            return dataSource;
        }
    

	}	
}