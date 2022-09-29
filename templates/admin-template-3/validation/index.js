window.initValidation = function () {
    new window.Smart.Form('#form', {
        labelPosition: 'top',
        controls: [
            {
                label: 'Email address',
                dataField: 'email',
                controlType: 'input',
                required: true,
                placeholder: 'Email',
                cssClass: 'outlined',
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
                validationRules: [
                    {
                        type: 'compare', comparisonType: '===', comparisonTarget: function () {
                            return document.getElementById('password').value;
                        }, message: 'Passwords must match'
                    }
                ],
                info: 'Confirm your new password.'
            },
            {
                label: 'Required field',
                dataField: 'requiredField',
                controlType: 'input',
                required: true,
                placeholder: 'Required',
                cssClass: 'outlined'
            },
            {
                label: 'ZIP code',
                dataField: 'zip',
                controlType: 'input',
                placeholder: 'ZIP code',
                info: 'E.g. "123-45-6789"',
                cssClass: 'outlined',
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
                info: 'Tell us more about yourself',
                cssClass: 'outlined'
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
}