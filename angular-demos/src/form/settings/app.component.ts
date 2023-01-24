import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Smart } from 'smart-webcomponents-angular/form';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit, OnInit {	 
	@ViewChild('topLabelLocation', { read: RadioButtonComponent, static: false }) topLabelLocation!: RadioButtonComponent;
	@ViewChild('leftLabelLocation', { read: RadioButtonComponent, static: false }) leftLabelLocation!: RadioButtonComponent;
	@ViewChild('columnsList', { read: DropDownListComponent, static: false }) columnsList!: DropDownListComponent;
	@ViewChild('readonly', { read: CheckBoxComponent, static: false }) readonly!: CheckBoxComponent;
	@ViewChild('showColonAfterLabel', { read: CheckBoxComponent, static: false }) showColonAfterLabel!: CheckBoxComponent;
	
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		 const form = new Smart.Form('#profileForm', {
				controls: [
					{
						controlType: 'group',
						label: 'Photo',
						controls: [{
							template: '<div style=" overflow: hidden;"><img width="90" src="../../images/people/john.png"/></div>',
							controlType: 'template'
						}]
					},
					{
					controlType: 'group',
					label: 'Profile',
					dataField: 'profile',
					labelPosition: 'top',
					controls: [
					{
						dataField: 'firstName',
						controlType: 'input',
						label: 'First name',
						required: true,
						info: 'Enter first name',
						placeholder: 'First name',
						cssClass: 'outlined',
						infoPosition: 'right'
					},
					{
						dataField: 'lastName',
						controlType: 'input',
						label: 'Last name',
						placeholder: 'Last name',
						required: true,
						cssClass: 'outlined',
						info: 'Enter last name'
					},
					{
						dataField: 'birthDate',
						controlType: 'date',
						label: 'Birth Date',
						placeholder: 'Birth date',
						cssClass: 'outlined'
					},
					{
						dataField: 'company',
						controlType: 'input',
						label: 'Company',
						placeholder: 'Company name',
						cssClass: 'outlined',
						required: false
					},
					{
						label: 'Address',
						dataField: 'address',
						controlType: 'group',
						controls: [
							{
								dataField: 'street',
								controlType: 'input',
								label: 'Street',
								placeholder: 'Address',
								required: true,
								cssClass: 'outlined'
							},
							{
								dataField: 'city',
								controlType: 'input',
								label: 'City',
								placeholder: 'City',
								cssClass: 'outlined',
								required: true
							},
							{
								dataField: 'state',
								controlType: 'dropdownlist',
								label: 'State',
								required: true,
								cssClass: 'outlined',
								controlOptions: {
									placeholder: 'State',
									dataSource: ['California', 'New York', 'Oregon', 'Illinois', 'Texas']
								}
							},
							{
								dataField: 'zip',
								controlType: 'input',
								placeholder: 'Zip',
								cssClass: 'outlined',
								label: 'Zip code',
								required: true
							}
						]
					}
				]
				},
				{
					controlType: 'group',
					columns: 2,
					controls: [
						{
							controlType: 'button',
							action: 'submit',
							label: 'Sign up',
							cssClass: 'success',
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

		form.value = {
			profile: {
					firstName: 'John',
					lastName: 'Scott',
					birthDate: '1985-05-15',
					company: 'N/A',
					address: {
						street: '1st Ave SW',
						city: 'San Antonio',
						state: 'Texas',
						zip: '78209'
					}
			}
		}

		const applyLabelPosition = () => {
			setTimeout(()=> {
				if (this.leftLabelLocation.checked) {
					form.labelPosition = 'left';
				}
				else {
					form.labelPosition = 'top';
				}
			});
		}

		this.topLabelLocation.addEventListener('change', applyLabelPosition);
		this.leftLabelLocation.addEventListener('change', applyLabelPosition);
		this.columnsList.addEventListener('change', () => {
			const columns = this.columnsList.selectedIndexes[0] + 1;

			form.profile.columns = columns;
			form.profile.address.columns = columns;
			form.profile.address.columnSpan = columns;
		});
		
		this.readonly.addEventListener('change', () => {
			form.readonly = this.readonly.checked;
		});
		
		this.showColonAfterLabel.addEventListener('change', () => {
			form.showColonAfterLabel = this.showColonAfterLabel.checked;
		});
    }
}