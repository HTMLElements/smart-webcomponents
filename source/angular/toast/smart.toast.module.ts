import { NgModule } from '@angular/core';
	
import { ToastComponent } from './smart.toast';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [ToastComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ToastComponent]
})

export class ToastModule { }
