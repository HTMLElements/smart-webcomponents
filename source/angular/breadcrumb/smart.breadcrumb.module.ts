import { NgModule } from '@angular/core';
	
import { BreadcrumbComponent } from './smart.breadcrumb';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [BreadcrumbComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [BreadcrumbComponent]
})

export class BreadcrumbModule { }
