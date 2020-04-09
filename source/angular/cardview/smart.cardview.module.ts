import { NgModule } from '@angular/core';
	
import { CardViewComponent } from './smart.cardview';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [CardViewComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [CardViewComponent]
})

export class CardViewModule { }
