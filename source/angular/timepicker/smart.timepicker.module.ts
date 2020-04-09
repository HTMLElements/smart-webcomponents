import { NgModule } from '@angular/core';
	
import { TimePickerComponent } from './smart.timepicker';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [TimePickerComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [TimePickerComponent]
})

export class TimePickerModule { }
