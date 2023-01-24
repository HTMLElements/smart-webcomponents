import { Component } from "@angular/core";

@Component({
	selector: 'grid-cell-component',
	inputs: ['value'],
	template: `<div [ngStyle]="{'color': value > 500 ? '#6db33b' : '#e62727'}">{{ value }}</div>`
})
export class GridCellComponent {
	value: number;
}