import { NgModule } from '@angular/core';
	
import { MultilineTextBoxComponent } from './smart.multilinetextbox';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { ListItemComponent } from './smart.listitem';
import { ListItemsGroupComponent } from './smart.listitemsgroup';

@NgModule({
    declarations: [MultilineTextBoxComponent, ListItemComponent, ListItemsGroupComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [MultilineTextBoxComponent, ListItemComponent, ListItemsGroupComponent]
})

export class MultilineTextBoxModule { }
