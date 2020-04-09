import { NgModule } from '@angular/core';
	
import { ListMenuComponent } from './smart.listmenu';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { MenuItemComponent } from './smart.menuitem';
import { MenuItemsGroupComponent } from './smart.menuitemsgroup';

@NgModule({
    declarations: [ListMenuComponent, MenuItemComponent, MenuItemsGroupComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ListMenuComponent, MenuItemComponent, MenuItemsGroupComponent]
})

export class ListMenuModule { }
