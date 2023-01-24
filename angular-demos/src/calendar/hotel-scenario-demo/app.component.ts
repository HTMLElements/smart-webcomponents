import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CalendarComponent } from 'smart-webcomponents-angular/calendar';
import { ComboBoxComponent } from 'smart-webcomponents-angular/combobox';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('submitButton', { read: ButtonComponent, static: false }) submitButton!: ButtonComponent;
	@ViewChild('datePicker', { read: CalendarComponent, static: false }) datePicker!: CalendarComponent;
	@ViewChild('roomPicker', { read: ComboBoxComponent, static: false }) roomPicker!: ComboBoxComponent;
	@ViewChild('adultPicker', { read: ComboBoxComponent, static: false }) adultPicker!: ComboBoxComponent;
	@ViewChild('childrenPicker', { read: ComboBoxComponent, static: false }) childrenPicker!: ComboBoxComponent;
	@ViewChild('nameInput', { read: TextBoxComponent, static: false }) nameInput!: TextBoxComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    const that = this;
		
        that.roomPicker.dataSource = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        that.adultPicker.dataSource = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        that.childrenPicker.dataSource = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        that.datePicker.addEventListener('change', function () {
            const summary = document.getElementById('summary');
            if (that.datePicker.selectedDates) {
                summary.innerHTML = "Duration: " + that.datePicker.selectedDates.length + ' days';
            }
            summary.classList.remove('smart-visibility-hidden');
        });
	}	
}