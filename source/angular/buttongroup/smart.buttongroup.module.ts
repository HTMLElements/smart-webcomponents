import { NgModule } from '@angular/core';

import { ButtonGroupComponent } from './smart.buttongroup';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [ButtonGroupComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ButtonGroupComponent]
})

export class ButtonGroupModule { }
