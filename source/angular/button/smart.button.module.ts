import { NgModule } from '@angular/core';
	
import { ButtonComponent } from './smart.button';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RepeatButtonComponent } from './smart.repeatbutton';
import { ToggleButtonComponent } from './smart.togglebutton';
import { PowerButtonComponent } from './smart.powerbutton';

@NgModule({
    declarations: [ButtonComponent, RepeatButtonComponent, ToggleButtonComponent, PowerButtonComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ButtonComponent, RepeatButtonComponent, ToggleButtonComponent, PowerButtonComponent]
})

export class ButtonModule { }
