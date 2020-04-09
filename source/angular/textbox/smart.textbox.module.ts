import { NgModule } from '@angular/core';
	
import { TextBoxComponent } from './smart.textbox';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { ListItemComponent } from './smart.listitem';
import { ListItemsGroupComponent } from './smart.listitemsgroup';

@NgModule({
    declarations: [TextBoxComponent, ListItemComponent, ListItemsGroupComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [TextBoxComponent, ListItemComponent, ListItemsGroupComponent]
})

export class TextBoxModule { }
