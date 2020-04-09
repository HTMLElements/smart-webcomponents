import { NgModule } from '@angular/core';
	
import { CarouselComponent } from './smart.carousel';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [CarouselComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [CarouselComponent]
})

export class CarouselModule { }
