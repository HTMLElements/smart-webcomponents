import { NgModule } from '@angular/core';
	
import { CardComponent } from './smart.card';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [CardComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [CardComponent]
})

export class CardModule { }
