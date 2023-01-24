import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FormComponent, Smart } from 'smart-webcomponents-angular/form';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit, OnInit {	 
	@ViewChild('profileForm', { read: FormComponent, static: false }) profileForm: FormComponent;
	@ViewChild('log', { static: false }) log;
	
	formValue = {
		employee: {
			name: {
				firstName: 'Anne',
				lastName: 'Smith',
			},
			details: {
				address: '1st Ave SW',
				company: 'N/A',
				city: 'Austin',
				state: 'Texas',
				zip: '78209'
			}
		}
	}
	
	value = '';
	
	ngOnInit(): void {
		// onInit code.
	}

	handleReady($event) {
		setTimeout(()=> {
			this.profileForm.value = this.formValue;
			this.value = JSON.stringify(this.formValue);

			this.profileForm.nativeElement.onValueChanges = (value) => {
				this.value = JSON.stringify(value);
			}
		});
	}

	ngAfterViewInit(): void {
	
    }
}