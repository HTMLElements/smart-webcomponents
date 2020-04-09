import { NgModule } from '@angular/core';
	
import { SliderComponent } from './smart.slider';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [SliderComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [SliderComponent]
})

export class SliderModule { }
