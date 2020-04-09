import { NgModule } from '@angular/core';
	
import { TableComponent } from './smart.table';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [TableComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [TableComponent]
})

export class TableModule { }
