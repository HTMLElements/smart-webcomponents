window.initSettings1 = function () {
    new window.Smart.Form('#form', {
        labelPosition: 'left',
        showSummary: false,
        controls: [
            {
                label: 'Username',
                dataField: 'username',
                controlType: 'input',
                required: true,
                cssClass: 'form-control',
                value: 'IamAdev'
            },
            {
                label: 'E-mail address',
                dataField: 'email',
                controlType: 'input',
                required: true,
                cssClass: 'form-control',
                value: 'iamadev@jqwidgets.com',
                validationRules: [
                    {type: 'email', message: 'Please enter a valid email'}
                ],
                info: 'Email will not be publicly displayed.'
            },
            {
                dataField: 'language',
                controlType: 'dropdownlist',
                label: 'Language',
                required: true,
                value: 'english',
                controlOptions: {
                    dataSource: [
                        {label: 'English', value: 'english'},
                        {label: 'Espanol - Spanish', value: 'spanish'},
                        {label: 'Dansk - Danish', value: 'danish'},
                        {label: 'Deutsch - German', value: 'german'}
                    ]
                }
            },
            {
                dataField: 'timezone',
                controlType: 'dropdownlist',
                label: 'Time Zone',
                required: true,
                value: 'option4',
                controlOptions: {
                    dataSource: [
                        {label: '(GMT-11:00) International Date Line West', value: 'option1'},
                        {label: '(GMT-11:00) Midway Island', value: 'option2'},
                        {label: '(GMT-11:00) Samoa', value: 'option3'},
                        {label: '(GMT-10:00) Hawaii', value: 'option4'},
                        {label: '(GMT-08:00) Alaska', value: 'option5'},
                        {label: '(GMT-07:00) Pacific Time (US & Canada)', value: 'option6'},
                        {label: '(GMT-07:00) Tijuana', value: 'option7'},
                        {label: '(GMT-07:00) Arizona', value: 'option8'},
                        {label: '(GMT-06:00) Mountain Time (US & Canada)', value: 'option9'}
                    ]
                }
            },
            {
                controlType: 'label',
                label: 'Communication'
            },
            {
                dataField: 'comunications',
                controlType: 'boolean',
                optionsLayout: 'horizontal',
                options: [
                    {label: 'E-mail', value: 'value1'},
                    {label: 'SMS', value: 'value2'},
                    {label: 'Phone', value: 'value3'}
                ]
            },
            {
                dataField: 'agreement',
                label: 'Require personal information to reset your password.',
                controlType: 'boolean',
                required: true,
                info: 'For extra security, this requires you to confirm your email or phone number when you reset your password.'
            },
            {
                controlType: 'group',
                columns: 2,
                columnSpan: 2,
                controls: [
                    {
                        controlType: 'button',
                        action: 'submit',
                        label: 'Submit',
                        cssClass: 'primary'
                    },
                    {
                        controlType: 'button',
                        action: 'reset',
                        label: 'Cancel',
                        align: 'left'
                    }
                ]
            }
        ]
    });

    addTodayMenuOpenHandlers();
}