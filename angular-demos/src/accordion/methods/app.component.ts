import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { AccordionComponent } from 'smart-webcomponents-angular/accordion';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { InputComponent } from 'smart-webcomponents-angular/input';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('accordion', { read: AccordionComponent, static: false }) accordion!: AccordionComponent;
	@ViewChild('expand', { read: ButtonComponent, static: false }) expand!: ButtonComponent;
	@ViewChild('collapse', { read: ButtonComponent, static: false }) collapse!: ButtonComponent;
	@ViewChild('insert', { read: ButtonComponent, static: false }) insert!: ButtonComponent;
	@ViewChild('update', { read: ButtonComponent, static: false }) update!: ButtonComponent;
	@ViewChild('remove', { read: ButtonComponent, static: false }) remove!: ButtonComponent;
	@ViewChild('expandCollapseIndex', { read: InputComponent, static: false }) expandCollapseIndex!: InputComponent;
	@ViewChild('crudIndex', { read: InputComponent, static: false }) crudIndex!: InputComponent;
	
 
	ngAfterViewInit(): void {
		// afterViewInit code.
   		this.init();
	}
	
	ngOnInit(): void {
		// onInit code.
	}
	
	init(): void {	
		// init code.
		const that = this;
		let baseValue = 0;	
        let insertCounter = 0;
        
		//Expand, Collapse
        if (that.collapse) {
            that.collapse.addEventListener('click', function () {
                const position = Number(that.expandCollapseIndex.value) || baseValue;
                that.accordion.collapse(position);
            });
        }
        if (that.expand) {
            that.expand.addEventListener('click', function () {
                const position = Number(that.expandCollapseIndex.value) || baseValue;
                that.accordion.expand(position);
            });
        }
        //Insert, Update, Remove
        const updateButtons = function () {
            if (insertCounter === 3) {
                that.insert.disabled = true;
            }
            else {
                that.insert.disabled = false;
            }
            if (insertCounter === -3) {
                that.remove.disabled = true;
            }
            else {
                that.remove.disabled = false;
            }
        };
        that.insert.addEventListener('click', function () {
            insertCounter++;
            const position = Number(that.crudIndex.value) || baseValue;
            
			that.accordion.insert(position, { "label": "New label", "content": "New content" });
            updateButtons();
        });
        that.update.addEventListener('click', function () {
            const position = Number(that.crudIndex.value) || baseValue;
            
			that.accordion.update(position, { "label": "Updated Label", "content": "Updated Content" });
        });
        that.remove.addEventListener('click', function () {
            const position = Number(that.crudIndex.value) || baseValue;
            
			that.accordion.removeAt(position);
            insertCounter--;
            updateButtons();
        });
	}	
}