import { NgModule } from '@angular/core';

import { DateInputComponent } from './smart.dateinput';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [DateInputComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [DateInputComponent]
})

export class DateInputModule { }
