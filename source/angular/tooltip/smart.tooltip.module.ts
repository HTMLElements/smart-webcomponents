import { NgModule } from '@angular/core';
	
import { TooltipComponent } from './smart.tooltip';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [TooltipComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [TooltipComponent]
})

export class TooltipModule { }
