import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { DockingLayoutModule } from 'smart-webcomponents-angular/dockinglayout';
import { GaugeModule } from 'smart-webcomponents-angular/gauge';
import { CarouselModule } from 'smart-webcomponents-angular/carousel';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';
import { ProgressBarModule } from 'smart-webcomponents-angular/progressbar';
import { TankModule } from 'smart-webcomponents-angular/tank';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DockingLayoutModule, ButtonModule, GaugeModule, CarouselModule, MultilineTextBoxModule, ProgressBarModule, TankModule],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})

export class AppModule { }
