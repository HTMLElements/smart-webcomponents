import { NgModule } from '@angular/core';
	
import { AccordionComponent } from './smart.accordion';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AccordionItemComponent } from './smart.accordionitem';

@NgModule({
    declarations: [AccordionComponent, AccordionItemComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [AccordionComponent, AccordionItemComponent]
})

export class AccordionModule { }
