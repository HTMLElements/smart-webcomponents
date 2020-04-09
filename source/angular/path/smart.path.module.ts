import { NgModule } from '@angular/core';
	
import { PathComponent } from './smart.path';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [PathComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [PathComponent]
})

export class PathModule { }
