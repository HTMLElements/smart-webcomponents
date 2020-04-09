import { NgModule } from '@angular/core';
	
import { ListBoxComponent } from './smart.listbox';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { ListItemComponent } from './smart.listitem';
import { ListItemsGroupComponent } from './smart.listitemsgroup';

@NgModule({
    declarations: [ListBoxComponent, ListItemComponent, ListItemsGroupComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ListBoxComponent, ListItemComponent, ListItemsGroupComponent]
})

export class ListBoxModule { }
