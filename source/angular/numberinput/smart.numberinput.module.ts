import { NgModule } from '@angular/core';

import { NumberInputComponent } from './smart.numberinput';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [NumberInputComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [NumberInputComponent]
})

export class NumberInputModule { }
