import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Smart } from 'smart-webcomponents-angular/form';
import { ButtonComponent } from 'smart-webcomponents-angular/button';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit, OnInit {	 
	@ViewChild('addBtn', { read: ButtonComponent, static: false }) addBtn!: ButtonComponent;
	@ViewChild('removeBtn', { read: ButtonComponent, static: false }) removeBtn!: ButtonComponent;
	@ViewChild('insertBtn', { read: ButtonComponent, static: false }) insertBtn!: ButtonComponent;
	@ViewChild('hideBtn', { read: ButtonComponent, static: false }) hideBtn!: ButtonComponent;
	@ViewChild('showBtn', { read: ButtonComponent, static: false }) showBtn!: ButtonComponent;

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
	  const form = new Smart.Form('#profileForm', {
				showSummary: false,
				showColonAfterLabel: true,
				controls: [{
					controlType: 'group',
					label: 'Customer Profile',
					dataField: 'profile',
					controls: [
						{
							dataField: 'firstName',
							controlType: 'input',
							label: 'First name',
							placeholder: 'First name',
							cssClass: 'underlined'
						},
						{
							dataField: 'lastName',
							controlType: 'input',
							label: 'Last name',
							placeholder: 'Last name',
							cssClass: 'underlined'
						},
						{
							dataField: 'address',
							controlType: 'input',
							label: 'Address',
							placeholder: 'Address',
							cssClass: 'underlined'
						},
						{
							dataField: 'city',
							controlType: 'input',
							label: 'City',
							placeholder: 'City',
							cssClass: 'underlined'
						},
						{
							dataField: 'state',
							controlType: 'dropdownlist',
							label: 'State',
							cssClass: 'underlined',
							controlOptions: {
								placeholder: 'State',
								dataSource: ['California', 'New York', 'Oregon', 'Illinois', 'Texas']
							}
						}
					]
				},
				{
					controlType: 'boolean',
					dataField: 'acceptTerms',
					label: 'Agree to terms and conditions'
				},
				{
					controlType: 'group',
					columns: 2,
					controls: [
						{
							controlType: 'button',
							action: 'submit',
							label: 'Submit',
							cssClass: 'primary',
							align: 'right'
						},
						{
							controlType: 'button',
							action: 'reset',
							label: 'Cancel',
							align: 'left'
						}
					]
				}
			]}
		);
		
		const addBtn = this.addBtn;
		const insertBtn = this.insertBtn;
		const removeBtn = this.removeBtn;
		const hideBtn = this.hideBtn;
		const showBtn = this.showBtn;

		addBtn.addEventListener('click', () => {
			form.profile.addControl(
				{
					dataField: 'zip',
					controlType: 'input',
					placeholder: 'Zip',
					cssClass: 'underlined',
					label: 'Zip code'
				}
			);
			
			addBtn.disabled = true;
			removeBtn.disabled = false;
		});
		
		insertBtn.addEventListener('click', () => {
			form.profile.insertControl(1,
				{
					dataField: 'middleName',
					controlType: 'input',
					label: 'Middle name',
					placeholder: 'Middle name',
					cssClass: 'underlined'
				}
			);
			
			insertBtn.disabled = true;
		});
		
		removeBtn.addEventListener('click', () => {
			form.profile.removeControl('zip');
			removeBtn.disabled = true;
			addBtn.disabled = false;
		});
		
		hideBtn.addEventListener('click', () => {
			form.profile.city.hide();
			showBtn.disabled = false;
			hideBtn.disabled = true;
		});
		
		showBtn.addEventListener('click', () => {
			form.profile.city.show();
			showBtn.disabled = true;
			hideBtn.disabled = false;
		});
    }
}