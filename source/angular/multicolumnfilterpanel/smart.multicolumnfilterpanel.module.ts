import { NgModule } from '@angular/core';
	
import { MultiColumnFilterPanelComponent } from './smart.multicolumnfilterpanel';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [MultiColumnFilterPanelComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [MultiColumnFilterPanelComponent]
})

export class MultiColumnFilterPanelModule { }
