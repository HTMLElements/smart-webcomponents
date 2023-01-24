import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { ButtonComponent } from "@smart-webcomponents-angular/button";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild("button", { read: ButtonComponent, static: false })
  button: ButtonComponent;
  log: string;

  clickMe() {
    this.button.disabled = true;

    const hasAttribute = this.button.nativeElement.hasAttribute("disabled");
    this.log = "Disabled: " + hasAttribute;
  }

  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
  }
}
