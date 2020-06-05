import { NgModule } from '@angular/core';

import { CheckInputComponent } from './smart.checkinput';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [CheckInputComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [CheckInputComponent]
})

export class CheckInputModule { }
