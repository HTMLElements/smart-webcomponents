import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ListMenuModule } from "@smart-webcomponents-angular/listmenu";
import { ButtonModule } from "@smart-webcomponents-angular/button";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [ListMenuModule, BrowserModule, ButtonModule],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {}
