import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { CalendarComponent } from "smart-webcomponents-angular/calendar";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild("calendar", { read: CalendarComponent, static: false })
  calendar: CalendarComponent;
  eventLog: string;

  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
  }

  onChange(event: CustomEvent) {
    this.eventLog = event.detail.value.toString();
  }
}
