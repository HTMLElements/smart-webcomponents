import { NgModule } from '@angular/core';
	
import { DateTimePickerComponent } from './smart.datetimepicker';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [DateTimePickerComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [DateTimePickerComponent]
})

export class DateTimePickerModule { }
