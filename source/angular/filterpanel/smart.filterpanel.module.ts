import { NgModule } from '@angular/core';
	
import { FilterPanelComponent } from './smart.filterpanel';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [FilterPanelComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [FilterPanelComponent]
})

export class FilterPanelModule { }
