import { NgModule } from '@angular/core';

import { TextAreaComponent } from './smart.textarea';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [TextAreaComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [TextAreaComponent]
})

export class TextAreaModule { }
