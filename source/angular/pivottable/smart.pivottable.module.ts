import { NgModule } from '@angular/core';

import { PivotTableComponent } from './smart.pivottable';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [PivotTableComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [PivotTableComponent]
})

export class PivotTableModule { }
