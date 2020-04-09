import { NgModule } from '@angular/core';
	
import { NumericTextBoxComponent } from './smart.numerictextbox';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [NumericTextBoxComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [NumericTextBoxComponent]
})

export class NumericTextBoxModule { }
