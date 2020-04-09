import { NgModule } from '@angular/core';
	
import { ChipComponent } from './smart.chip';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [ChipComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ChipComponent]
})

export class ChipModule { }
