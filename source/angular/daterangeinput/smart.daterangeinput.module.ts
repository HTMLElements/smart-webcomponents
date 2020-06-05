import { NgModule } from '@angular/core';

import { DateRangeInputComponent } from './smart.daterangeinput';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [DateRangeInputComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [DateRangeInputComponent]
})

export class DateRangeInputModule { }
