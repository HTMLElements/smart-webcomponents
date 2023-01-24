import { Component, ViewChild } from '@angular/core';
import { AccordionComponent, AccordionItemComponent, AccordionExpandMode } from 'smart-webcomponents-angular/accordion';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
    @ViewChild('accordion', { read: AccordionComponent, static: false }) accordion!: AccordionComponent;

    ngOnInit(): void {

    }
    ngAfterViewInit(): void {
		const that = this;
		that.accordion.expandMode = "multiple";
		that.accordion.expand(1);  	
    }
}
