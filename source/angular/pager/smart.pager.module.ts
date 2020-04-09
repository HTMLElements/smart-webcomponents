import { NgModule } from '@angular/core';
	
import { PagerComponent } from './smart.pager';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [PagerComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [PagerComponent]
})

export class PagerModule { }
