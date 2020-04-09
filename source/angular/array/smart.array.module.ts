import { NgModule } from '@angular/core';
	
import { ArrayComponent } from './smart.array';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [ArrayComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ArrayComponent]
})

export class ArrayModule { }
