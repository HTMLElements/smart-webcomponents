import { NgModule } from '@angular/core';
	
import { WindowComponent } from './smart.window';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [WindowComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [WindowComponent]
})

export class WindowModule { }
