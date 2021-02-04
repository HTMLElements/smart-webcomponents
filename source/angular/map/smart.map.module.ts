import { NgModule } from '@angular/core';

import { MapComponent } from './smart.map';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [MapComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [MapComponent]
})

export class MapModule { }
