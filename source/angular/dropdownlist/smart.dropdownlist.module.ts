import { NgModule } from '@angular/core';
	
import { DropDownListComponent } from './smart.dropdownlist';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { ListItemComponent } from './smart.listitem';
import { ListItemsGroupComponent } from './smart.listitemsgroup';

@NgModule({
    declarations: [DropDownListComponent, ListItemComponent, ListItemsGroupComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [DropDownListComponent, ListItemComponent, ListItemsGroupComponent]
})

export class DropDownListModule { }
