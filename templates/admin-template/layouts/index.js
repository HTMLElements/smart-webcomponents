window.initLayouts = function () {
    new window.Smart.Form('#basicForm', {
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
                info: 'Tell us more about yourself',
                cssClass: 'outlined'
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

    new window.Smart.Form('#horizontalForm', {
        labelPosition: 'left',
        controls: [
            {
                label: 'Email address',
                dataField: 'email2',
                controlType: 'input',
                required: true,
                placeholder: 'Email',
                cssClass: 'outlined',
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
                cssClass: 'outlined',
                validationRules: [
                    { type: 'stringLength', min: 3, message: 'Password has to be at least 3 characters' }
                ]
            },
            {
                label: 'Info',
                dataField: 'info2',
                controlType: 'textarea',
                info: 'Tell us more about yourself',
                cssClass: 'outlined'
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

    new window.Smart.Form('#formRow', {
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
                    cssClass: 'outlined',
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
                    cssClass: 'outlined',
                    validationRules: [
                        { type: 'stringLength', min: 3, message: 'Password has to be at least 3 characters' }
                    ]
                }]
            },
            {
                label: 'Address',
                dataField: 'address1',
                controlType: 'input',
                placeholder: '9581 Lovers Ln',
                cssClass: 'outlined'
            },
            {
                label: 'Address 2',
                dataField: 'address2',
                controlType: 'input',
                placeholder: '7118 Spring St',
                cssClass: 'outlined'
            },
            {
                controlType: 'group',
                columns: 3,
                controls: [{
                    label: 'City',
                    dataField: 'city',
                    controlType: 'input',
                    cssClass: 'outlined'
                }, {
                    label: 'State',
                    dataField: 'state',
                    controlType: 'dropdownlist',
                    controlOptions: {
                        dataSource: ['Andhra Pradesh', 'Manipur', 'Tamil Nadu']
                    },
                    cssClass: 'outlined'
                }, {
                    label: 'ZIP',
                    dataField: 'zip',
                    controlType: 'input',
                    cssClass: 'outlined'
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

    new window.Smart.Form('#inlineForm', {
        labelPosition: 'top',
        controls: [
            {
                controlType: 'group',
                columns: 4,
                controls: [{
                    dataField: 'name',
                    controlType: 'input',
                    placeholder: 'John Doe',
                    cssClass: 'outlined'
                },
                {
                    dataField: 'username',
                    controlType: 'input',
                    placeholder: 'Username',
                    cssClass: 'outlined',
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