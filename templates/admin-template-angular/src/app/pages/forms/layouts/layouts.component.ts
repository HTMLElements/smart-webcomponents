import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { FormComponent, Smart } from 'smart-webcomponents-angular/form';

@Component({
  selector: 'sm-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutsComponent implements AfterViewInit {

  basicForm!: FormComponent;
  horizontalForm!: FormComponent;
  formRow!: FormComponent;
  inlineForm!: FormComponent;

  constructor() { }

  ngAfterViewInit(): void {

    this.basicForm = new Smart.Form('#layouts-basic-form', {
      labelPosition: 'top',
      controls: [
        {
          label: 'Email address',
          dataField: 'email',
          controlType: 'input',
          required: true,
          placeholder: 'Email',
          validationRules: [
            { type: 'email', message: 'Please enter a valid email' }
          ]
        },
        {
          label: 'Password',
          dataField: 'password',
          controlType: 'password',
          required: true,
          placeholder: 'Password',
          validationRules: [
            { type: 'stringLength', min: 3, message: 'Password has to be at least 3 characters' }
          ]
        },
        {
          label: 'Info',
          dataField: 'info',
          controlType: 'textarea',
          info: 'Tell us more about yourself'
        },
        {
          dataField: 'agreement',
          label: 'I agree',
          controlType: 'boolean',
          required: true
        },
        {
          controlType: 'button',
          action: 'submit',
          label: 'Submit',
          cssClass: 'success',
          align: 'right'
        }
      ]
    }, false);

    this.horizontalForm = new Smart.Form('#layouts-horizontal-form', {
      labelPosition: 'left',
      controls: [
        {
          label: 'Email address',
          dataField: 'email2',
          controlType: 'input',
          required: true,
          placeholder: 'Email',
          validationRules: [
            { type: 'email', message: 'Please enter a valid email' }
          ]
        },
        {
          label: 'Password',
          dataField: 'password2',
          controlType: 'password',
          required: true,
          placeholder: 'Password',
          validationRules: [
            { type: 'stringLength', min: 3, message: 'Password has to be at least 3 characters' }
          ]
        },
        {
          label: 'Info',
          dataField: 'info2',
          controlType: 'textarea',
          info: 'Tell us more about yourself'
        },
        {
          dataField: 'gender',
          controlType: 'option',
          label: 'Gender',
          optionsLayout: 'vertical',
          options: [
            { label: 'Male', value: 'm' },
            { label: 'Female', value: 'f' },
            { label: 'Non-binary', value: 'nb' }
          ]
        },
        {
          dataField: 'agreement2',
          label: 'I agree',
          controlType: 'boolean',
          required: true
        },
        {
          controlType: 'button',
          action: 'submit',
          label: 'Submit',
          cssClass: 'success',
          align: 'right'
        }
      ]
    }, false);

    this.formRow = new Smart.Form('#layouts-form-row', {
      labelPosition: 'top',
      controls: [
        {
          controlType: 'group',
          columns: 2,
          controls: [{
            label: 'Email address',
            dataField: 'email3',
            controlType: 'input',
            required: true,
            placeholder: 'Email',
            validationRules: [
              { type: 'email', message: 'Please enter a valid email' }
            ]
          },
          {
            label: 'Password',
            dataField: 'password3',
            controlType: 'password',
            required: true,
            placeholder: 'Password',
            validationRules: [
              { type: 'stringLength', min: 3, message: 'Password has to be at least 3 characters' }
            ]
          }]
        },
        {
          label: 'Address',
          dataField: 'address1',
          controlType: 'input',
          placeholder: '9581 Lovers Ln'
        },
        {
          label: 'Address 2',
          dataField: 'address2',
          controlType: 'input',
          placeholder: '7118 Spring St'
        },
        {
          controlType: 'group',
          columns: 3,
          controls: [{
            label: 'City',
            dataField: 'city',
            controlType: 'input'
          }, {
            label: 'State',
            dataField: 'state',
            controlType: 'dropdownlist',
            controlOptions: {
              dataSource: ['Andhra Pradesh', 'Manipur', 'Tamil Nadu']
            }
          }, {
            label: 'ZIP',
            dataField: 'zip',
            controlType: 'input'
          }]
        },
        {
          dataField: 'agreement3',
          label: 'I agree',
          controlType: 'boolean'
        },
        {
          controlType: 'button',
          action: 'submit',
          label: 'Submit',
          cssClass: 'success',
          align: 'right'
        }
      ]
    });

    this.inlineForm = new Smart.Form('#layouts-inline-form', {
      labelPosition: 'top',
      controls: [
        {
          controlType: 'group',
          columns: 4,
          controls: [{
            dataField: 'name',
            controlType: 'input',
            placeholder: 'John Doe'
          },
          {
            dataField: 'username',
            controlType: 'input',
            placeholder: 'Username',
            prepend: '@'
          },
          {
            dataField: 'agreement4',
            label: 'I agree',
            controlType: 'boolean'
          },
          {
            controlType: 'button',
            action: 'submit',
            label: 'Submit',
            cssClass: 'success',
            align: 'left'
          }]
        }
      ]
    });

  }

}
