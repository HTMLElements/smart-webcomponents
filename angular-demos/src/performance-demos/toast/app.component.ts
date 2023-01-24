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
	    
    
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 100; i++) {
            const container = document.createElement("div"), toast = document.createElement("smart-toast");
            container.classList.add("container");
            toast.value = 'Alert !';
            toast.type = 'warning';
            toast.blink = true;
            toast.autoOpen = true;
            toast.appendTo = container;
            fragment.appendChild(container);
            fragment.appendChild(toast);
        }
        document.body.appendChild(fragment);
    

	}	
}