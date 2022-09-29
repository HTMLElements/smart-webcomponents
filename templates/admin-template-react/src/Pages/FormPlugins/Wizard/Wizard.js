import './Wizard.scss';
import { useEffect, useRef } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button, Smart, TabItem, Tabs } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function Wizard() {

    const tabsRef = useRef(null);
    const tabsSuccessRef = useRef(null);
    const tabsErrorRef = useRef(null);
    const tabsFancyRef = useRef(null);
    const tabsFancySuccessRef = useRef(null);
    const tabsFancyErrorRef = useRef(null);

    useEffect(() => {

        document.title = `Wizard - ${defaultTitle}`;

        setTimeout(() => {

            Array.from(document.querySelectorAll('smart-tabs .smart-tab-label-container:not(:first-child)'))
                .forEach(element => element.classList.add('unreached'));

        }, 200);

        const form = new Smart.Form('#checkoutForm', {
            label: 'Checkout',
            labelAlign: 'center',
            viewMode: 'breadcrumb',
            showSummary: false,
            showButtons: true,
            controls: [
                {
                    controlType: 'group',
                    label: 'Shipping Address',
                    dataField: 'address',
                    columns: 2,
                    labelPosition: 'top',
                    controls: [
                        {
                            dataField: 'firstName',
                            controlType: 'input',
                            label: 'First name',
                            required: true,
                            info: 'Enter first name',
                            placeholder: 'First name',
                            infoPosition: 'right'
                        },
                        {
                            dataField: 'lastName',
                            controlType: 'input',
                            label: 'Last name',
                            placeholder: 'Last name',
                            required: true,
                            info: 'Enter last name'
                        },
                        {
                            dataField: 'address1',
                            controlType: 'input',
                            columnSpan: 2,
                            label: 'Address line 1',
                            placeholder: 'Address line 1',
                            required: true
                        },
                        {
                            dataField: 'address2',
                            controlType: 'input',
                            columnSpan: 2,
                            label: 'Address line 2',
                            placeholder: 'Address line 2'
                        },
                        {
                            dataField: 'city',
                            controlType: 'input',
                            label: 'City',
                            placeholder: 'City',
                            required: true
                        },
                        {
                            dataField: 'state',
                            controlType: 'input',
                            label: 'State/Province/Region',
                            placeholder: 'State'
                        },
                        {
                            dataField: 'zip',
                            controlType: 'input',
                            placeholder: 'Zip / Postal code',
                            columnSpan: 2,
                            label: 'Zip / Postal code',
                            required: true
                        },
                        {
                            dataField: 'country',
                            controlType: 'dropdownlist',
                            placeholder: 'Country',
                            label: 'Country',
                            columnSpan: 2,
                            controlOptions: {
                                dataSource: [
                                    'Brazil',
                                    'Bulgaria',
                                    'Chile',
                                    'China',
                                    'Denmark',
                                    'Finland',
                                    'France',
                                    'India',
                                    'Maldives',
                                    'Nigeria',
                                    'Singapore',
                                    'Turkey',
                                    'United Kingdom of Great Britain and Northern Ireland (the)',
                                    'United States of America (the)',
                                    'Uruguay',
                                ]
                            },
                            required: true
                        },
                        {
                            dataField: 'useThisAddress',
                            label: 'Use this address for payment details',
                            controlType: 'boolean'
                        }
                    ]
                },
                {
                    controlType: 'group',
                    dataField: 'payment',
                    label: 'Payment method',
                    controls: [
                        {
                            dataField: 'nameOnCard',
                            label: 'Name on card',
                            required: true,
                            placeholder: 'Name on card'
                        },
                        {
                            dataField: 'cardNumber',
                            label: 'Card number',
                            required: true,
                            controlType: 'mask',
                            controlOptions: {
                                mask: '#### - #### - #### - ####'
                            }
                        },
                        {
                            dataField: 'expiryDate',
                            label: 'Expiry date',
                            required: true,
                            controlType: 'date',
                            placeholder: 'Name on card',
                            controlOptions: {
                                formatString: 'MM/yyyy'
                            }
                        },
                        {
                            dataField: 'cvv',
                            label: 'CVV',
                            required: true,
                            controlType: 'mask',
                            controlOptions: {
                                mask: '###'
                            }
                        },
                        {
                            dataField: 'rememberCard',
                            label: 'Remember credit card details for next time',
                            controlType: 'boolean'
                        }
                    ]
                },
                {
                    controlType: 'group',
                    label: 'Review your order',
                    dataField: 'orderSummary',
                    controls: [
                        {
                            controlType: 'group',
                            columns: 2,
                            dataField: 'order',
                            controls: [
                                {
                                    controlType: 'template',
                                    dataField: 'products',
                                    columnSpan: 2
                                }
                            ]
                        },
                        {
                            controlType: 'group',
                            columns: 2,
                            columnSpan: 2,
                            controls: [
                                {
                                    controlType: 'button',
                                    action: 'submit',
                                    label: 'Place Order',
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
                    ]
                }
            ]
        })

        const updateOrderSummary = () => {
            const value = form.value;
            form.onValueChanges = null;
            form.orderSummary.order.products.value = `
    <section id="order">
            <h2>Order summary</h2>
    
            <table id="orderSumary">
                <tbody><tr>
                    <td>Product 1 A nice thing</td>
                    <td>$9.99</td>
                </tr>
                <tr>
                    <td>Product 2 Another thing</td>
                    <td>$3.45</td>
                </tr>
                <tr>
                    <td>Product 3 Something else</td>
                    <td>$6.51</td>
                </tr>
                <tr>
                    <td>Product 4 Best thing of all</td>
                    <td>$14.11</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td id="total">$34.06</td>
                </tr>
            </tbody></table>
    
            <table>
                <tbody><tr>
                    <th>Shipping</th>
                    <th>Payment details</th>
                    <th></th>
                </tr>
                <tr>
                    <td>${value.address.firstName} ${value.address.lastName}</td>
                    <td>Card type</td>
                    <td>Visa</td>
                </tr>
                <tr>
                    <td>${value.address.address1}, ${value.address.city}</td>
                    <td>Card holder</td>
                    <td>${value.payment.nameOnCard}</td>
                </tr>
                <tr>
                    <td>${value.address.city}, ${value.address.zip}, ${value.address.country}</td>
                    <td>Card number</td>
                    <td>${value.payment.cardNumber}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Expiry date</td>
                    <td>${value.payment.expiryDate}</td>
                </tr>
            </tbody></table>
        </section>
    `;

            form.onValueChanges = () => {
                updateOrderSummary();
            }
        }

        updateOrderSummary();

        form.onValueChanges = updateOrderSummary;

    }, []);

    const handleTabsChange = (tabs, e) =>
        tabs?.current?.nativeElement.querySelector(`.smart-tab-label-container:nth-child(${e.detail.index + 1})`)
            .classList
            .remove('unreached')

    const handleTabsClick = (tabs, e) =>
        e.target.closest('.next')
            ? tabs?.current.select(tabs?.current.selectedIndex + 1)
            : e.target.closest('.prev')
                ? tabs?.current.select(tabs?.current.selectedIndex - 1)
                : {}

    return (
        <div className="container wizard-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Wizard</h4></div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <Tabs
                                ref={tabsRef}
                                onChange={handleTabsChange.bind(null, tabsRef)}
                                onClick={handleTabsClick.bind(null, tabsRef)}
                                className="w-100 h-150"
                                animation="none"
                            >
                                <TabItem label="Step 1">
                                    Do this first
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev" disabled>Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 2">
                                    Do this second
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 3">
                                    Do this third
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 4">
                                    Do this fourth
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next" disabled>Next</Button>
                                    </div>
                                </TabItem>
                            </Tabs>

                            <Tabs
                                ref={tabsSuccessRef}
                                onChange={handleTabsChange.bind(null, tabsSuccessRef)}
                                onClick={handleTabsClick.bind(null, tabsSuccessRef)}
                                className="w-100 h-150 success"
                                animation="none"
                            >
                                <TabItem label="Step 1">
                                    Do this first
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev" disabled>Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 2">
                                    Do this second
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 3">
                                    Do this third
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 4">
                                    Do this fourth
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next" disabled>Next</Button>
                                    </div>
                                </TabItem>
                            </Tabs>

                            <Tabs
                                ref={tabsErrorRef}
                                onChange={handleTabsChange.bind(null, tabsErrorRef)}
                                onClick={handleTabsClick.bind(null, tabsErrorRef)}
                                className="w-100 h-150 error"
                                animation="none"
                            >
                                <TabItem label="Step 1">
                                    Do this first
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev" disabled>Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 2">
                                    Do this second
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 3">
                                    Do this third
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 4">
                                    Do this fourth
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next" disabled>Next</Button>
                                    </div>
                                </TabItem>
                            </Tabs>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <Tabs
                                ref={tabsFancyRef}
                                onChange={handleTabsChange.bind(null, tabsFancyRef)}
                                onClick={handleTabsClick.bind(null, tabsFancyRef)}
                                className="w-100 h-150 fancy"
                                animation="none"
                            >
                                <TabItem label="Step 1">
                                    Do this first
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev" disabled>Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 2">
                                    Do this second
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 3">
                                    Do this third
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 4">
                                    Do this fourth
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next" disabled>Next</Button>
                                    </div>
                                </TabItem>
                            </Tabs>

                            <Tabs
                                ref={tabsFancySuccessRef}
                                onChange={handleTabsChange.bind(null, tabsFancySuccessRef)}
                                onClick={handleTabsClick.bind(null, tabsFancySuccessRef)}
                                className="w-100 h-150 fancy success"
                                animation="none"
                            >
                                <TabItem label="Step 1">
                                    Do this first
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev" disabled>Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 2">
                                    Do this second
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 3">
                                    Do this third
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 4">
                                    Do this fourth
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next" disabled>Next</Button>
                                    </div>
                                </TabItem>
                            </Tabs>

                            <Tabs
                                ref={tabsFancyErrorRef}
                                onChange={handleTabsChange.bind(null, tabsFancyErrorRef)}
                                onClick={handleTabsClick.bind(null, tabsFancyErrorRef)}
                                className="w-100 h-150 fancy error"
                                animation="none"
                            >
                                <TabItem label="Step 1">
                                    Do this first
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev" disabled>Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 2">
                                    Do this second
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 3">
                                    Do this third
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next">Next</Button>
                                    </div>
                                </TabItem>
                                <TabItem label="Step 4">
                                    Do this fourth
                                    <div className="d-flex justify-content-end">
                                        <Button className="mr-2 small-button primary outlined prev">Previous</Button>
                                        <Button className="small-button primary next" disabled>Next</Button>
                                    </div>
                                </TabItem>
                            </Tabs>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <form id="checkoutForm"></form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(Wizard)