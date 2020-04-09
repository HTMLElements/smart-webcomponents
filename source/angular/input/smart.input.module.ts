import { NgModule } from '@angular/core';
	
import { InputComponent } from './smart.input';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [InputComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [InputComponent]
})

export class InputModule { }
