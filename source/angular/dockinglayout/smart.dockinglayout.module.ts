import { NgModule } from '@angular/core';
	
import { DockingLayoutComponent } from './smart.dockinglayout';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [DockingLayoutComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [DockingLayoutComponent]
})

export class DockingLayoutModule { }
