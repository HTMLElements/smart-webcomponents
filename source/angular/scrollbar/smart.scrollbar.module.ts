import { NgModule } from '@angular/core';
	
import { ScrollBarComponent } from './smart.scrollbar';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [ScrollBarComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ScrollBarComponent]
})

export class ScrollBarModule { }
