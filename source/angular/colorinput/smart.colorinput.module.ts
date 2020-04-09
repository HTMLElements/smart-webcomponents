import { NgModule } from '@angular/core';
	
import { ColorInputComponent } from './smart.colorinput';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [ColorInputComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ColorInputComponent]
})

export class ColorInputModule { }
