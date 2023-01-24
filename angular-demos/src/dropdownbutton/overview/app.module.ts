import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { DropDownButtonModule } from "@smart-webcomponents-angular/dropdownbutton";
import { ListMenuModule } from "@smart-webcomponents-angular/listmenu";
import { ButtonModule } from "@smart-webcomponents-angular/button";
import { SwitchButtonModule } from "@smart-webcomponents-angular/switchbutton";
import { CalendarModule } from "@smart-webcomponents-angular/calendar";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CalendarModule,
    ListMenuModule,
    ButtonModule,
    SwitchButtonModule,
    DropDownButtonModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {}
