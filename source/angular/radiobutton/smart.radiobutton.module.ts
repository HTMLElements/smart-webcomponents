import { NgModule } from '@angular/core';
	
import { RadioButtonComponent } from './smart.radiobutton';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [RadioButtonComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [RadioButtonComponent]
})

export class RadioButtonModule { }
