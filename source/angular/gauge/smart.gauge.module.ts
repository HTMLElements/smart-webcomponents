import { NgModule } from '@angular/core';
	
import { GaugeComponent } from './smart.gauge';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [GaugeComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [GaugeComponent]
})

export class GaugeModule { }
