import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GridModule } from 'smart-webcomponents-angular/grid';

import { AppComponent } from './app.component';
import { GridCellComponent } from './grid-cell.component';
import { smartDomService } from './smart-dom.service';

@NgModule({
    declarations: [AppComponent, GridCellComponent],
    imports: [BrowserModule, GridModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent, GridCellComponent],
    providers: [smartDomService]
})

export class AppModule { }
