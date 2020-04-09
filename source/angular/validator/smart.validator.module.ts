import { NgModule } from '@angular/core';
	
import { ValidatorComponent } from './smart.validator';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [ValidatorComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ValidatorComponent]
})

export class ValidatorModule { }
