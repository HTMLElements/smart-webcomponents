import { NgModule } from '@angular/core';
	
import { TankComponent } from './smart.tank';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [TankComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [TankComponent]
})

export class TankModule { }
