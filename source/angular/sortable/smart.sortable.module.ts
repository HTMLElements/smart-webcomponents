import { NgModule } from '@angular/core';
	
import { SortableComponent } from './smart.sortable';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [SortableComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [SortableComponent]
})

export class SortableModule { }
