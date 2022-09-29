import './FormLayouts.scss';
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Smart } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function FormLayouts() {

    useEffect(() => {

        document.title = `Form Layouts - ${defaultTitle}`

        new Smart.Form('#basicForm', {
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
        });

        new Smart.Form('#horizontalForm', {
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
        });

        new Smart.Form('#formRow', {
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

        new Smart.Form('#inlineForm', {
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
        
    }, []);

    return (
        <div className="container form-layouts-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Form Layouts</h4></div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Basic form</h4>
                        </div>
                        <div className="card-body">
                            <form id="basicForm"></form>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Horizontal form</h4>
                        </div>
                        <div className="card-body">
                            <form id="horizontalForm"></form>
                        </div>
                    </div>
                </div>

                <div className="col-12 mb-5">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="label">Form row</h4>
                        </div>
                        <div className="card-body">
                            <form id="formRow"></form>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="label">Inline form</h4>
                        </div>
                        <div className="card-body">
                            <form id="inlineForm"></form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(FormLayouts)