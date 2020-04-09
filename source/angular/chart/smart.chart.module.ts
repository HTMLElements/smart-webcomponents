import { NgModule } from '@angular/core';
	
import { ChartComponent } from './smart.chart';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [ChartComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ChartComponent]
})

export class ChartModule { }
