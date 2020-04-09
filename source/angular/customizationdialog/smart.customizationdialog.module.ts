import { NgModule } from '@angular/core';
	
import { CustomizationDialogComponent } from './smart.customizationdialog';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [CustomizationDialogComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [CustomizationDialogComponent]
})

export class CustomizationDialogModule { }
