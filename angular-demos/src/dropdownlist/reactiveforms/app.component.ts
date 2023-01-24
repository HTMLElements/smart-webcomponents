import { Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export class Hero {

	constructor(
		public id: number,
		public name: string,
		public power: string,
		public alterEgo!: string
	) { }

}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
	return (control: AbstractControl): { [key: string]: any } | null => {
		const forbidden = nameRe.test(control.value);
		return forbidden ? { 'forbiddenName': { value: control.value } } : null;
	};
}


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	powers = ['Really Smart', 'Super Flexible',
		'Super Hot', 'Weather Changer'];

	heroForm = new FormGroup({
		name: new FormControl('Dr IQ', [
			Validators.required,
			Validators.minLength(4),
			forbiddenNameValidator(/bob/i)]),
		power: new FormControl(this.powers[0]),
		alterEgo: new FormControl('Chuck Overstreet')
	});

	get name() { return this.heroForm.get('name'); }
	get alterEgo() { return this.heroForm.get('alterEgo'); }
	get power() { return this.heroForm.get('power'); }


	submitted = false;

	onSubmit() {
		this.submitted = true;
	}

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.
	}

	newHero() {
		this.name.setValue('');
		this.alterEgo.setValue('');
		this.power.setValue('');
	}

	get diagnostic() {
		return JSON.stringify({
			name: this.name.value,
			alterEgo: this.alterEgo.value,
			power: this.power.value
		});
	}
}