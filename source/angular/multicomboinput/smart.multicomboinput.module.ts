import { NgModule } from '@angular/core';

import { MultiComboInputComponent } from './smart.multicomboinput';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [MultiComboInputComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [MultiComboInputComponent]
})

export class MultiComboInputModule { }
