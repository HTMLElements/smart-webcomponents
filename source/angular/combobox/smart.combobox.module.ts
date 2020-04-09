import { NgModule } from '@angular/core';
	
import { ComboBoxComponent } from './smart.combobox';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { ListItemComponent } from './smart.listitem';
import { ListItemsGroupComponent } from './smart.listitemsgroup';

@NgModule({
    declarations: [ComboBoxComponent, ListItemComponent, ListItemsGroupComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ComboBoxComponent, ListItemComponent, ListItemsGroupComponent]
})

export class ComboBoxModule { }
