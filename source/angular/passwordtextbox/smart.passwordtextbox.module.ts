import { NgModule } from '@angular/core';
	
import { PasswordTextBoxComponent } from './smart.passwordtextbox';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [PasswordTextBoxComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [PasswordTextBoxComponent]
})

export class PasswordTextBoxModule { }
