import { NgModule } from '@angular/core';
	
import { SplitterComponent } from './smart.splitter';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { SplitterItemComponent } from './smart.splitteritem';
import { SplitterBarComponent } from './smart.splitterbar';

@NgModule({
    declarations: [SplitterComponent, SplitterItemComponent, SplitterBarComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [SplitterComponent, SplitterItemComponent, SplitterBarComponent]
})

export class SplitterModule { }
