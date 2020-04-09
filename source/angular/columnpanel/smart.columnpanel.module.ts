import { NgModule } from '@angular/core';
	
import { ColumnPanelComponent } from './smart.columnpanel';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [ColumnPanelComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ColumnPanelComponent]
})

export class ColumnPanelModule { }
