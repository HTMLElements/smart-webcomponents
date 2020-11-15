import { NgModule } from '@angular/core';

import { LayoutComponent } from './smart.layout';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { LayoutItemComponent } from './smart.layoutitem';
import { LayoutGroupComponent } from './smart.layoutgroup';
import { TabLayoutItemComponent } from './smart.tablayoutitem';
import { TabLayoutGroupComponent } from './smart.tablayoutgroup';

@NgModule({
    declarations: [LayoutComponent, LayoutItemComponent, LayoutGroupComponent, TabLayoutItemComponent, TabLayoutGroupComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [LayoutComponent, LayoutItemComponent, LayoutGroupComponent, TabLayoutItemComponent, TabLayoutGroupComponent]
})

export class LayoutModule { }
