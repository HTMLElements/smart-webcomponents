import { NgModule } from '@angular/core';
	
import { LayoutComponent } from './smart.layout';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [LayoutComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [LayoutComponent]
})

export class LayoutModule { }
