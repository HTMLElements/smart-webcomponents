import { NgModule } from '@angular/core';
	
import { DropDownButtonComponent } from './smart.dropdownbutton';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [DropDownButtonComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [DropDownButtonComponent]
})

export class DropDownButtonModule { }
