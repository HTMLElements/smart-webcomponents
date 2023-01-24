import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { CalendarComponent } from 'smart-webcomponents-angular/calendar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild("dropdownlist", { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
  @ViewChild("calendar", { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
  log: string;
  dataSource = [
    { value: 0, label: "Sunday" },
    { value: 1, label: "Monday" },
    { value: 2, label: "Tuesday" },
    { value: 3, label: "Wednesday" },
    { value: 4, label: "Thursday" },
    { value: 5, label: "Friday" },
    { value: 6, label: "Saturday" }
  ];

  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
  }

  onChange(event: CustomEvent) {
    this.calendar.firstDayOfWeek = event.detail.index;
    this.log = "First day of week is " + event.detail.label;
  }
}
