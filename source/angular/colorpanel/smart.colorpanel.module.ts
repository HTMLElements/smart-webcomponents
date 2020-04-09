import { NgModule } from '@angular/core';
	
import { ColorPanelComponent } from './smart.colorpanel';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [ColorPanelComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ColorPanelComponent]
})

export class ColorPanelModule { }
