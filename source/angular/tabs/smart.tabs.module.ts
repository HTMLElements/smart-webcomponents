import { NgModule } from '@angular/core';
	
import { TabsComponent } from './smart.tabs';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { TabItemComponent } from './smart.tabitem';
import { TabItemsGroupComponent } from './smart.tabitemsgroup';

@NgModule({
    declarations: [TabsComponent, TabItemComponent, TabItemsGroupComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [TabsComponent, TabItemComponent, TabItemsGroupComponent]
})

export class TabsModule { }
