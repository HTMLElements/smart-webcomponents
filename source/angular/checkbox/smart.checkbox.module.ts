import { NgModule } from '@angular/core';
	
import { CheckBoxComponent } from './smart.checkbox';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [CheckBoxComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [CheckBoxComponent]
})

export class CheckBoxModule { }
