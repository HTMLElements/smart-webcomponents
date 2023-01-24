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
	@ViewChild('array3', { read: ArrayComponent, static: false }) array3!: ArrayComponent;
	@ViewChild('array4', { read: ArrayComponent, static: false }) array4!: ArrayComponent;
	@ViewChild('array5', { read: ArrayComponent, static: false }) array5!: ArrayComponent;
	@ViewChild('array6', { read: ArrayComponent, static: false }) array6!: ArrayComponent;
	@ViewChild('array7', { read: ArrayComponent, static: false }) array7!: ArrayComponent;
	@ViewChild('array8', { read: ArrayComponent, static: false }) array8!: ArrayComponent;
	@ViewChild('array9', { read: ArrayComponent, static: false }) array9!: ArrayComponent;
	@ViewChild('array10', { read: ArrayComponent, static: false }) array10!: ArrayComponent;
	@ViewChild('array11', { read: ArrayComponent, static: false }) array11!: ArrayComponent;
	@ViewChild('array12', { read: ArrayComponent, static: false }) array12!: ArrayComponent;
	@ViewChild('array13', { read: ArrayComponent, static: false }) array13!: ArrayComponent;
				
	elementTemplateDropDownList(element, dimensions) {
		const customElement = document.createElement('smart-drop-down-list');
		const that = document.querySelector('smart-array');
		customElement.dataSource = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
		customElement.selectionMode = 'one';
		customElement.dropDownAppendTo = 'body';
		customElement.style.width = that.elementWidth + 'px';
		customElement.style.height = that.elementHeight + 'px';
		element.appendChild(customElement);
	}
	
	changeProperty1(property, value, widgets) {
		for (let i = 0; i < widgets.length; i++) {
			const currentCustomElement = widgets[i].children[0];
			if (property === 'width' || property === 'height') {
				currentCustomElement.style[property] = value + 'px';
			}
			else if (property === 'disabled') {
				currentCustomElement.disabled = value;
			}
		}
	}
	
	getElementValue1(element, dimensions) {
		const customElement = element.children[0];
		return customElement.selectedValues[0];
	}
	
	setElementValue1(value, element, dimensions) {
		const customElement = element.children[0];
		customElement.selectedValues = [value];
	}
	
	elementTemplateComboBox(element, dimensions) {
		const customElement = document.createElement('smart-combo-box');
		const that = document.querySelector('smart-array');
		customElement.dataSource = ['Bulgaria', 'France', 'UK', 'USA', 'Other country'];
		customElement.selectionMode = 'one';
		customElement.dropDownAppendTo = 'body';
		customElement.style.width = that.elementWidth + 'px';
		customElement.style.height = that.elementHeight + 'px';
		element.appendChild(customElement);
	}
	
	elementTemplateToggleButton(element, dimensions) {
		const customElement = document.createElement('smart-toggle-button');
		const that = document.querySelector('smart-array');
		customElement.style.width = that.elementWidth + 'px';
		customElement.style.height = that.elementHeight + 'px';
		element.appendChild(customElement);
	}
	
	getElementValue2(element, dimensions) {
		const customElement = element.children[0];
		return customElement.checked;
	}
	
	setElementValue2(value, element, dimensions) {
		const customElement = element.children[0];
		if (value.toString() === 'true') {
			customElement.checked = true;
		}
		else {
			customElement.checked = false;
		}
	}
	 
	elementTemplateLed(element, dimensions) {
		const customElement = document.createElement('smart-led');
		const that = document.querySelector('smart-array');
		customElement.style.width = that.elementWidth + 'px';
		customElement.style.height = that.elementHeight + 'px';
		element.appendChild(customElement);
	}
	 
	elementTemplatePowerButton(element, dimensions) {
		const customElement = document.createElement('smart-power-button');
		const that = document.querySelector('smart-array');
		customElement.style.width = that.elementWidth + 'px';
		customElement.style.height = that.elementHeight + 'px';
		element.appendChild(customElement);
	}
	
	elementTemplateListBox(element, dimensions) {
		const customElement = document.createElement('smart-list-box');
		const that = document.querySelector('smart-array');
		customElement.dataSource = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
		customElement.selectionMode = 'one';
		customElement.style.width = that.elementWidth + 'px';
		customElement.style.height = that.elementHeight + 'px';
		element.appendChild(customElement);
	}
	
	elementTemplateProgressBar(element, dimensions) {
		const customElement = document.createElement('smart-progress-bar');
		const that = document.querySelector('smart-array');
		customElement.style.width = that.elementWidth + 'px';
		customElement.style.height = that.elementHeight + 'px';
		element.appendChild(customElement);
	}
	
	getElementValue3(element, dimensions) {
		const customElement = element.children[0];
		return customElement.value;
	}
	
	setElementValue3(value, element, dimensions) {
		const customElement = element.children[0];
		customElement.value = parseFloat(value);
	}
	
	elementTemplateCircularProgressBar(element, dimensions) {
		const customElement = document.createElement('smart-circular-progress-bar');
		const that = document.querySelector('smart-array');
		customElement.style.width = that.elementWidth + 'px';
		customElement.style.height = that.elementHeight + 'px';
		element.appendChild(customElement);
	}
	
	elementTemplateCheckBox(element, dimensions) {
		const customElement = document.createElement('smart-check-box');
		const that = document.querySelector('smart-array');
		customElement.style.width = that.elementWidth + 'px';
		customElement.style.height = that.elementHeight + 'px';
		element.appendChild(customElement);
	}
	
	elementTemplateGauge(element, dimensions) {
		const customElement = document.createElement('smart-gauge');
		const that = document.querySelector('smart-array');
		customElement.analogDisplayType = 'fill';
		customElement.labelsVisibility = 'none';
		customElement.scalePosition = 'outside';
		customElement.style.width = that.elementWidth + 'px';
		customElement.style.height = that.elementHeight + 'px';
		element.appendChild(customElement);
	}
	
	elementTemplateTank(element, dimensions) {
		const customElement = document.createElement('smart-tank');
		const that = document.querySelector('smart-array');
		customElement.style.width = that.elementWidth + 'px';
		customElement.style.height = that.elementHeight + 'px';
		element.appendChild(customElement);
	}
	
	elementTemplateSlider(element, dimensions) {
		const customElement = document.createElement('smart-slider');
		const that = document.querySelector('smart-array');
		customElement.labelsVisibility = 'none';
		customElement.showTooltip = true;
		customElement.rangeSlider = true;
		customElement.style.width = that.elementWidth + 'px';
		customElement.style.height = that.elementHeight + 'px';
		element.appendChild(customElement);
	}
	
	getElementValue4(element, dimensions) {
		const customElement = element.children[0];
		return customElement.values;
	}
	
	setElementValue4(result, element, dimensions) {
		const customElement = element.children[0];
		if (typeof result === 'string') {
			result = JSON.parse(result);
		}
		customElement.values = result;
	}
	
	elementTemplateDateTimePicker(element, dimensions) {
		const customElement = document.createElement('smart-date-time-picker');
		const that = document.querySelector('smart-array');
		customElement.formatString = 'd';
		customElement.calendarButton = true;
		customElement.style.width = that.elementWidth + 'px';
		customElement.style.height = that.elementHeight + 'px';
		element.appendChild(customElement);
	}
	
	getElementValue5(element, dimensions) {
		const customElement = element.children[0];
		return customElement.value.toDate();
	}
	
	setElementValue5(value, element, dimensions) {
		const customElement = element.children[0];
		customElement.value = value;
	}

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.

	}	
}