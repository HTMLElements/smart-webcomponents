import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { CalendarComponent } from 'smart-webcomponents-angular/calendar';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('modeSelector', { read: DropDownListComponent, static: false }) modeSelector!: DropDownListComponent;
    @ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    setDescription(mode): void {
        let description = document.getElementById('modeDescription');
        switch (mode) {
            case 'default':
                description.textContent = 'Allows single date selection via keyboard/mouse and multiple date selection when \'Control\' keyboard key is pressed.';
                break;
            case 'none':
                description.textContent = 'Date selection is disabled.';
                break;
            case 'one':
                description.textContent = 'Only one date can be selected.';
                break;
            case 'oneExtended':
                description.textContent = 'Only one date can be selected. Allows keyboard selection on "Enter/Space" key press.';
                break;
            case 'many':
                description.textContent = 'Allows multiple dates selection. The first selected date determines the begining of a date selection range. Last selected date sets the end of the range. All hovered dates in between will also be selected when the end date is decided. They will appear as hovered until the end date is selected.';
                break;
            case 'zeroOrMany':
                description.textContent = 'Allows zero or more dates to be selected.';
                break;
            case 'oneOrMany':
                description.textContent = 'Allows one or more dates to be selected. Doesn\'t allow zero selection.';
                break;
            case 'zeroOrOne':
                description.textContent = 'Zero or one date can be selected.';
                break;
            case 'week':
                description.textContent = 'Selects 7 days in a row from the selected date. The selected date is the beginning of the date range and the next 6 days are also selected to form a week( 7 days in a row).';
                break;
            case 'range':
                description.textContent = 'Selectes a range of dates between two dates. The first selected date marks the beginning of the range and the second selected date marks the end. Every date between the first and second date selection will also be selected. The next selected date will clear all previously selected and set the start for a new date range.  If the keyboard key \'Control\' is pressed it is possible to start a second range selection by keeping the previous. All dates that are about to be selected are marked as hovered.';
                break;
        }
    }

    init(): void {
        // init code.
        const that = this;

        if (that.calendar.selectionMode) {
            that.setDescription(that.calendar.selectionMode);
        }

        that.modeSelector.addEventListener('change', function (event: CustomEvent) {
            that.calendar.selectionMode = event.detail.label;
            that.setDescription(event.detail.label);
        });
    }
}