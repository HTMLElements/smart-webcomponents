import { NgModule } from '@angular/core';
	
import { LedComponent } from './smart.led';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [LedComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [LedComponent]
})

export class LedModule { }
