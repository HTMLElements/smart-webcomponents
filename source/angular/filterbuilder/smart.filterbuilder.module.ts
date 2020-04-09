import { NgModule } from '@angular/core';
	
import { FilterBuilderComponent } from './smart.filterbuilder';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [FilterBuilderComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [FilterBuilderComponent]
})

export class FilterBuilderModule { }
