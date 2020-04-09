import { NgModule } from '@angular/core';
	
import { ColorPickerComponent } from './smart.colorpicker';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [ColorPickerComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ColorPickerComponent]
})

export class ColorPickerModule { }
