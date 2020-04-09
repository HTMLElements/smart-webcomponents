import { NgModule } from '@angular/core';
	
import { MultiSplitButtonComponent } from './smart.multisplitbutton';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { ListItemComponent } from './smart.listitem';
import { ListItemsGroupComponent } from './smart.listitemsgroup';

@NgModule({
    declarations: [MultiSplitButtonComponent, ListItemComponent, ListItemsGroupComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [MultiSplitButtonComponent, ListItemComponent, ListItemsGroupComponent]
})

export class MultiSplitButtonModule { }
