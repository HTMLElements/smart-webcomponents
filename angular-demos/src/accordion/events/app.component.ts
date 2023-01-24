import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { AccordionComponent } from 'smart-webcomponents-angular/accordion';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('accordion', { read: AccordionComponent, static: false }) accordion!: AccordionComponent;
	@ViewChild('log', { static: false }) log: ElementRef;
	
 
	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
	
	ngOnInit(): void {
		// onInit code.
	}
	
	init(): void {
	    const that = this;
		
		const updateEventLog = (event) => {
			const eventContainer = document.createElement('div'),
				eventType = event.type;

			eventContainer.innerText = eventType + ' item #' + event.detail.index;
			eventContainer.className = eventType === 'expanded' ? 'expanded' : '';
			that.log.nativeElement.appendChild(eventContainer);
		}
	
		//Expanding event
		that.accordion.addEventListener('expanding', function (event) {
			updateEventLog(event);
		});

		//Expanded event
		that.accordion.addEventListener('expanded', function (event) {
			updateEventLog(event);
		});

		//Collapsing event
		that.accordion.addEventListener('collapsing', function (event) {
			updateEventLog(event);
		});

		//Collapsed event
		that.accordion.addEventListener('collapsed', function (event) {
			updateEventLog(event);
		});

		//Drag Start event
		that.accordion.addEventListener('dragStart', function (event) {
			updateEventLog(event);
		});

		//Drag End event
		that.accordion.addEventListener('dragEnd', function (event) {
			updateEventLog(event);
		});
	}	
}