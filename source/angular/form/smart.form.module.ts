import { NgModule } from '@angular/core';

import { FormComponent } from './smart.form';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormControlComponent } from './smart.formcontrol';
import { FormGroupComponent } from './smart.formgroup';

@NgModule({
    declarations: [FormComponent, FormControlComponent, FormGroupComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [FormComponent, FormControlComponent, FormGroupComponent]
})

export class FormModule { }
