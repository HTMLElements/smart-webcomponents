import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	profileForm = this.fb.group({
		firstName: ['', Validators.required],
		lastName: [''],
		address: this.fb.group({
			street: [''],
			city: [''],
			state: [''],
			zip: ['']
		}),
		aliases: this.fb.array([
			this.fb.control('')
		])
	});

	get aliases() {
		return this.profileForm.get('aliases') as FormArray;
	}

	constructor(private fb: FormBuilder) { }


	updateProfile() {
		this.profileForm.patchValue({
			firstName: 'Nancy',
			address: {
				street: '123 Drew Street'
			}
		});
	}

	addAlias() {
		this.aliases.push(this.fb.control(''));
	}

	onSubmit() {
		// TODO: Use EventEmitter with form value
		console.warn(this.profileForm.value);
	}
}