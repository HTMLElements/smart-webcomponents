import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { ChartModule } from 'smart-webcomponents-angular/chart';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { ListBoxModule } from 'smart-webcomponents-angular/listbox';
import { ProgressBarModule } from 'smart-webcomponents-angular/progressbar';
import { TabsModule } from 'smart-webcomponents-angular/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { TabsChartsComponent } from './tabs-charts/tabs-charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    TabsChartsComponent,
    DashboardComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ButtonModule,
    ChartModule,
    GridModule,
    ListBoxModule,
    ProgressBarModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
