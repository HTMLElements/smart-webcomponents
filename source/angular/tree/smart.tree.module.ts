import { NgModule } from '@angular/core';
	
import { TreeComponent } from './smart.tree';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { TreeItemComponent } from './smart.treeitem';
import { TreeItemsGroupComponent } from './smart.treeitemsgroup';

@NgModule({
    declarations: [TreeComponent, TreeItemComponent, TreeItemsGroupComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [TreeComponent, TreeItemComponent, TreeItemsGroupComponent]
})

export class TreeModule { }
