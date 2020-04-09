import { NgModule } from '@angular/core';
	
import { SortPanelComponent } from './smart.sortpanel';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [SortPanelComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [SortPanelComponent]
})

export class SortPanelModule { }
