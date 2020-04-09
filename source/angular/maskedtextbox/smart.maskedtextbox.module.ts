import { NgModule } from '@angular/core';
	
import { MaskedTextBoxComponent } from './smart.maskedtextbox';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [MaskedTextBoxComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [MaskedTextBoxComponent]
})

export class MaskedTextBoxModule { }
