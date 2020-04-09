import { NgModule } from '@angular/core';
	
import { CalendarComponent } from './smart.calendar';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [CalendarComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [CalendarComponent]
})

export class CalendarModule { }
