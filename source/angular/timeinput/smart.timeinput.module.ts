import { NgModule } from '@angular/core';

import { TimeInputComponent } from './smart.timeinput';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [TimeInputComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [TimeInputComponent]
})

export class TimeInputModule { }
