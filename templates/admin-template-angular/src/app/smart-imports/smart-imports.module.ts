import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'smart-webcomponents-angular/toast';
import { MenuModule } from 'smart-webcomponents-angular/menu';
import { InputModule } from 'smart-webcomponents-angular/input';
import { TooltipModule } from 'smart-webcomponents-angular/tooltip';
import { ButtonModule, Smart } from 'smart-webcomponents-angular/button';
import { ButtonGroupModule } from 'smart-webcomponents-angular/buttongroup';
import { CalendarModule } from 'smart-webcomponents-angular/calendar';
import { ChartModule } from 'smart-webcomponents-angular/chart';
import { TableModule } from 'smart-webcomponents-angular/table';
import { ProgressBarModule } from 'smart-webcomponents-angular/progressbar';
import { PasswordTextBoxModule } from 'smart-webcomponents-angular/passwordtextbox';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';
import { CardModule } from 'smart-webcomponents-angular/card';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { DropDownButtonModule } from "smart-webcomponents-angular/dropdownbutton";
import { TabsModule } from 'smart-webcomponents-angular/tabs';
import { CarouselModule } from 'smart-webcomponents-angular/carousel';
import { AccordionModule } from 'smart-webcomponents-angular/accordion';
import { PagerModule } from 'smart-webcomponents-angular/pager';
import { ListBoxModule } from 'smart-webcomponents-angular/listbox';
import { BreadcrumbModule } from 'smart-webcomponents-angular/breadcrumb';
import { WindowModule } from 'smart-webcomponents-angular/window';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';
import { DateInputModule } from 'smart-webcomponents-angular/dateinput';
import { TimeInputModule } from 'smart-webcomponents-angular/timeinput';
import { TextAreaModule } from 'smart-webcomponents-angular/textarea';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { SwitchButtonModule } from 'smart-webcomponents-angular/switchbutton';
import { ColorInputModule } from 'smart-webcomponents-angular/colorinput';
import { MultiSplitButtonModule } from 'smart-webcomponents-angular/multisplitbutton';
import { SchedulerModule } from 'smart-webcomponents-angular/scheduler';
import { EditorModule } from 'smart-webcomponents-angular/editor';
import { MaskedTextBoxModule } from 'smart-webcomponents-angular/maskedtextbox';
import { CardViewModule } from 'smart-webcomponents-angular/cardview';
import { KanbanModule } from 'smart-webcomponents-angular/kanban';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, ToastModule, MenuModule, InputModule, TooltipModule,
    ButtonModule, CalendarModule, ChartModule, TableModule, ProgressBarModule,
    ButtonGroupModule, PasswordTextBoxModule, CheckBoxModule, CardModule, DropDownListModule,
    DropDownButtonModule, TabsModule, CarouselModule, AccordionModule, PagerModule,
    ListBoxModule, BreadcrumbModule, WindowModule, MultilineTextBoxModule, DateInputModule,
    TimeInputModule, TextAreaModule, RadioButtonModule, SwitchButtonModule, ColorInputModule,
    MultiSplitButtonModule, SchedulerModule, EditorModule, MaskedTextBoxModule, CardViewModule,
    KanbanModule
  ],
  exports: [
    MenuModule, ToastModule, InputModule, TooltipModule, ButtonModule,
    CalendarModule, ChartModule, TableModule, ProgressBarModule, ButtonGroupModule,
    PasswordTextBoxModule, CheckBoxModule, CardModule, DropDownListModule, DropDownButtonModule,
    TabsModule, CarouselModule, AccordionModule, PagerModule, ListBoxModule,
    BreadcrumbModule, WindowModule, MultilineTextBoxModule, DateInputModule,
    TimeInputModule, TextAreaModule, RadioButtonModule, SwitchButtonModule, ColorInputModule,
    MultiSplitButtonModule, SchedulerModule, EditorModule, MaskedTextBoxModule, CardViewModule,
    KanbanModule
  ]
})
export class SmartImportsModule {
  constructor() {
    Smart.License = 'license key'; //REMOVE THIS
  }
}
