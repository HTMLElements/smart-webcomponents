import { NgModule } from '@angular/core';
	
import { SwitchButtonComponent } from './smart.switchbutton';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [SwitchButtonComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [SwitchButtonComponent]
})

export class SwitchButtonModule { }
