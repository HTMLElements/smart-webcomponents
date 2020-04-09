import { NgModule } from '@angular/core';
	
import { ProgressBarComponent } from './smart.progressbar';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CircularProgressBarComponent } from './smart.circularprogressbar';

@NgModule({
    declarations: [ProgressBarComponent, CircularProgressBarComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ProgressBarComponent, CircularProgressBarComponent]
})

export class ProgressBarModule { }
