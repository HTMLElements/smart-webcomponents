import { NgModule } from '@angular/core';
	
import { GroupPanelComponent } from './smart.grouppanel';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [GroupPanelComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [GroupPanelComponent]
})

export class GroupPanelModule { }
