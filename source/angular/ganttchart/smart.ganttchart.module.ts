import { NgModule } from '@angular/core';
	
import { GanttChartComponent } from './smart.ganttchart';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [GanttChartComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [GanttChartComponent]
})

export class GanttChartModule { }
