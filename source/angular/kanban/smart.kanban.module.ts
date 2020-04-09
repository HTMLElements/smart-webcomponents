import { NgModule } from '@angular/core';
	
import { KanbanComponent } from './smart.kanban';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [KanbanComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [KanbanComponent]
})

export class KanbanModule { }
