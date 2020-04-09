import { NgModule } from '@angular/core';
	
import { MenuComponent } from './smart.menu';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { MenuItemComponent } from './smart.menuitem';
import { MenuItemsGroupComponent } from './smart.menuitemsgroup';

@NgModule({
    declarations: [MenuComponent, MenuItemComponent, MenuItemsGroupComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [MenuComponent, MenuItemComponent, MenuItemsGroupComponent]
})

export class MenuModule { }
