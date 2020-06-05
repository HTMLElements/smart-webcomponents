import { NgModule } from '@angular/core';

import { MultiInputComponent } from './smart.multiinput';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [MultiInputComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [MultiInputComponent]
})

export class MultiInputModule { }
