document.addEventListener("DOMContentLoaded", function (event) {
    const basePath = 'assets/images/', carousel = document.getElementById('carousel');
    carousel.dataSource = [
        {
            label: 'Create a Smart Website <br />for your Clients',
            content: `Our goal is to help our customers deliver modern responsive websites <br />and applications that work on any device and are pleasure to use. `,
            image: `${basePath}carousel/full-screen/slide-1.jpg`
        },
        {
            label: 'Do It Right',
            content: `Poster can be one of the effective marketing and advertising materials. <br />It is also a great tool to use when you want to present your services.`,
            image: `${basePath}carousel/full-screen/slide-3.jpg`
        },
        {
            label: 'Using Banner Stands <br />to Increase Trade Show Traffic',
            content: `Complex project management experience. <br />When selecting an offshore software development company, ensure that they have.`,
            image: `${basePath}carousel/full-screen/slide-2.jpg`
        }
    ];

    // Create a Reactive Form.
    const form = new Smart.Form('#contactForm', {

        name: ['', {
            validationRules: [
                {type: 'required', message: 'Name is required'},
                {type: 'stringLength', min: 2, message: 'First Name requires minimum 2 characters'}
            ]
        }],
        email: ['', {
            validationRules: [
                {type: 'required', message: 'E-mail is required'},
                {type: 'email', message: 'The entered e-mail is not valid'}
            ]
        }],
        phone: ['', {
            validationRules: [
                {type: 'required', message: 'Phone is required'}
            ]
        }],
        appointment: ['', {
            validationRules: [{type: 'required', message: 'Appointment date is required'}]
        }],
        message: ['', {
            validationRules: [{type: 'required', message: 'Message date is required'}]
        }]
    });

    form.showSummary = false;
    // set form's value.
    form.value = {
        name: 'Peter Smith',
        email: 'peter@jqwidgets.com',
        phone: '+359 878 999 888',
        appointment: new Date(),
        message: 'Hello dear friends...'
    }

    /*document.querySelector('.submit smart-button').addEventListener('click', () => {
        validator.validate();
    });*/

    // handle value changes and log them.
    form.onValueChanges = function (value) {
        document.getElementById('log').innerHTML = JSON.stringify(value);
    }

    // log Form's value
    document.getElementById('log').innerHTML = JSON.stringify(form.value);
});