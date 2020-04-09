import { NgModule } from '@angular/core';
	
import { GridComponent } from './smart.grid';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [GridComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [GridComponent]
})

export class GridModule { }
