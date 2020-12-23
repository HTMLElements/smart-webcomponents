import { NgModule } from '@angular/core';

import { SchedulerComponent } from './smart.scheduler';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [SchedulerComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [SchedulerComponent]
})

export class SchedulerModule { }
