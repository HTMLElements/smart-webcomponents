import {
  Component,
  ViewChild,
  OnInit,
  AfterViewInit,
  ElementRef
} from "@angular/core";
import { CalendarComponent } from "smart-webcomponents-angular/calendar";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild("calendar", { read: CalendarComponent, static: false })
  calendar: CalendarComponent;

  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
  }

  onChange(value) {
    const that = this;
    if (that.calendar.weeks) {
      that.calendar.weeks = parseInt(value);
      that.calendar.nativeElement.style.height =
        120 + 32 * (that.calendar.weeks - 1) + "px";
    }
    if (that.calendar.weeks) {
      that.calendar.nativeElement.style.height =
        120 + 32 * (that.calendar.weeks - 1) + "px";
    }
  }
}
