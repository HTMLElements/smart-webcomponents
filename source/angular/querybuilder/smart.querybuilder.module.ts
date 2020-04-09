import { NgModule } from '@angular/core';
	
import { QueryBuilderComponent } from './smart.querybuilder';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [QueryBuilderComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [QueryBuilderComponent]
})

export class QueryBuilderModule { }
