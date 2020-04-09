import { NgModule } from '@angular/core';
	
import { RatingComponent } from './smart.rating';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [RatingComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [RatingComponent]
})

export class RatingModule { }
