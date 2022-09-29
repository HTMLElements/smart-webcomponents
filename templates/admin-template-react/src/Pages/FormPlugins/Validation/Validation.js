import './Validation.scss';
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Smart } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function Validation() {

    useEffect(() => {

        document.title = `Validation - ${defaultTitle}`;

        new Smart.Form('#form', {
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
                    ],
                    info: 'Your personal email.'
                },
                {
                    label: 'Password',
                    dataField: 'password',
                    controlType: 'password',
                    required: true,
                    placeholder: 'Password',
                    validationRules: [
                        { type: 'stringLength', min: 3, message: 'Password has to be at least 3 characters' }
                    ],
                    info: 'A strong password.'
                },
                {
                    label: 'Confirm password',
                    dataField: 'passwordConfirm',
                    controlType: 'password',
                    required: true,
                    placeholder: 'Confirm password',
                    // validationRules: [
                    //     {
                    //         type: 'custom',
                    //         validationCallback: () => {
                    //             const password = document.getElementById('password').value;
                    //             const passwordConfirm = document.getElementById('passwordConfirm').value;

                    //             if (password && passwordConfirm) {
                    //                 return password === passwordConfirm
                    //             }

                    //             return true

                    //         },
                    //         message: 'Passwords must match'
                    //     }
                    // ],
                    info: 'Confirm your new password.'
                },
                {
                    label: 'Required field',
                    dataField: 'requiredField',
                    controlType: 'input',
                    required: true,
                    placeholder: 'Required'
                },
                {
                    label: 'ZIP code',
                    dataField: 'zip',
                    controlType: 'input',
                    placeholder: 'ZIP code',
                    info: 'E.g. "123-45-6789"',
                    validationRules: [
                        { type: 'zipCode', message: 'A valid ZIP code is required' }
                    ]
                },
                {
                    dataField: 'dropdownValue',
                    controlType: 'dropdownlist',
                    label: 'Select preference',
                    required: true,
                    controlOptions: {
                        dataSource: [
                            { label: 'Option 1', value: 'value1' },
                            { label: 'Option 2', value: 'value2' },
                            { label: 'Option 3', value: 'value3' }
                        ]
                    }
                },
                {
                    label: 'More information',
                    dataField: 'moreInfo',
                    controlType: 'textarea',
                    info: 'Tell us more about yourself'
                },
                {
                    dataField: 'gender',
                    controlType: 'option',
                    label: 'Gender',
                    optionsLayout: 'vertical',
                    required: true,
                    options: [
                        { label: 'Male', value: 'm' },
                        { label: 'Female', value: 'f' },
                        { label: 'Non-binary', value: 'nb' }
                    ]
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

        const rules = [
            {
                input: '#passwordConfirm',
                message: 'Passwords must match',
                type: 'compare',
                comparisonTarget: function (input) {

                    let password = document.querySelector('#password');

                    if (password) {

                        return password.value;

                    }
                },
            },
        ];

        new Smart.Utilities.Validator(rules, '#form');

    }, []);



    return (
        <div className="container validation-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Form Validation</h4></div>
            </div>

            <div className="card">
                <div className="card-body">
                    <p>Form validation using Smart.Form.</p>
                    <form id="form"></form>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(Validation)