import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Smart } from 'smart-webcomponents-angular/form';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit, OnInit {	 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
	    // Create a Reactive Form.
		const form = new Smart.Form('#profileForm', {
			firstName: ['', {
				validationRules: [
				   { type: 'required', message: 'First Name is required' },
				   { type: 'stringLength', min: 2, message: 'First Name requires minimum 2 characters' }
				]
			}],
			lastName: ['', {
			  validationRules: [{ type: 'required', message: 'Last Name is required' }]
			}
			],
			address: new Smart.FormGroup({
			  street: ['', {
				validationRules: [
					{ type: 'required', message: 'Street is required' }
				]
			  }
			  ],
			  city: [''],
			  state: [''],
			  zip: ['']
			})
		  });

		  // set form's value.
		  form.value = {
			  firstName: 'Peter',
			  lastName: 'Smith',
			  address: {
				  street: '507 - 20th Ave. E. Apt. 2A',
				  city: 'Seattle',
				  state: 'WA',
				  zip: '98122'
			  }
		  }



		  // handle value changes and log them.
		  form.onValueChanges = function(value) {
			document.getElementById('log').innerHTML = JSON.stringify(value);
		  }

		  // log Form's value
		  document.getElementById('log').innerHTML = JSON.stringify(form.value);
    }
}