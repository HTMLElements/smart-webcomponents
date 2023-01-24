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
	    
    let newTooltipsList = [], tooltipPositions = ['top', 'left', 'bottom', 'right'];
    function appendTooltips() {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 100; i++) {
            const button = document.createElement("smart-button"), buttonId = 'btn' + i, tooltip = document.createElement("smart-tooltip");
            button.innerHTML = "Click Me";
            button.id = buttonId;
            fragment.appendChild(button);
            fragment.appendChild(tooltip);
            tooltip.selector = buttonId;
            tooltip.value = 'Tooltip #' + i;
            tooltip.position = 'bottom';
            tooltip.arrow = true;
            newTooltipsList.push(tooltip);
        }
        document.body.appendChild(fragment);
    }
    function runTest() {
        setInterval(function () {
            for (let i = 0; i < 100; i++) {
                newTooltipsList[i].visible = Math.random() < 0.5;
            }
        }, 10);
    }
    
        appendTooltips();
        runTest();
    

	}	
}