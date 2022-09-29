import './Checkout.scss';

import { useEffect, useRef } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { defaultTitle } from '../../../contexts/themeContext';

import { Button, Tabs, TabItem, Input, RadioButton, MaskedTextBox } from '../../../smartImports';

function List() {

    const tabsRef = useRef(null);

    useEffect(() => {

        document.title = `E-commerce Checkout - ${defaultTitle}`;

        setTimeout(() => {
            Array.from(
                tabsRef?.current.nativeElement
                    .querySelectorAll('smart-tabs .smart-tab-label-container:not(:first-child)')
            )
                .forEach(element => element.classList.add('unreached'));

        }, 200);

        new window.Smart.Form('#checkoutForm', {
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
                    placeholder: 'First name'
                },
                {
                    dataField: 'lastName',
                    controlType: 'input',
                    label: 'Last name',
                    placeholder: 'Last name',
                    required: true
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
                    dataField: 'region',
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
                    controlType: 'boolean',
                    columnSpan: 2
                },
                {
                    controlType: 'button',
                    action: 'button',
                    label: 'Use this Address',
                    cssClass: 'primary next',
                    columnSpan: 2
                }
            ]
        });

    }, []);

    const tabTemplate1 = `
        <div class="d-flex">
            <div class="mr-3">
                <button class="btn btn-primary btn-icon">
                    <i class="fas fa-shopping-cart m-0 font-size-16px"></i>
                </button>
            </div>

            <div>
                <span class="text-primary mb-1 d-block">Cart</span>
                <small class="text-muted">Your Cart items</small>
            </div>
        </div>
    `
    const tabTemplate2 = `
        <div class="d-flex">
            <div class="mr-3">
                <button class="btn btn-primary btn-icon">
                    <i class="fas fa-home m-0 font-size-16px"></i>
                </button>
            </div>

            <div>
                <span class="text-primary mb-1 d-block">Address</span>
                <small class="text-muted">Enter Your Address</small>
            </div>
        </div>
    `
    const tabTemplate3 = `
        <div class="d-flex">
            <div class="mr-3">
                <button class="btn btn-primary btn-icon">
                    <i class="fas fa-credit-card m-0 font-size-16px"></i>
                </button>
            </div>

            <div>
                <span class="text-primary mb-1 d-block">Payment</span>
                <small class="text-muted">Select Payment Method</small>
            </div>
        </div>
    `

    const handleTabChange = (e) => {

        if (e.detail.index) {

            const index = e.detail.index;

            tabsRef?.current.nativeElement
                .querySelector(`.smart-tab-label-container:nth-child(${index + 1})`)
                ?.classList.remove('unreached');

        }

    };

    const handleTabClick = (e) => {

        if (e.target.closest('.next')) {

            tabsRef.current.select(tabsRef.current.selectedIndex + 1);

        } else if (e.target.closest('.prev')) {

            tabsRef.current.select(tabsRef.current.selectedIndex - 1);

        }
    }

    return (
        <div className="container e-commerce-checkout">
            <div className="row">
                <div className="col-12 mb-3"><h4>Checkout</h4></div>
            </div>

            <div className="card h-100">
                <div className="card-body">
                    <Tabs
                        ref={tabsRef}
                        onChange={handleTabChange}
                        onClick={handleTabClick}
                        className="w-100 auto-height"
                        animation="none"
                    >
                        <TabItem label={tabTemplate1}>
                            <div className="row">
                                <div className="col-xl-8 mb-5">
                                    <div className="card shadow-1 hover-shadow-3 mb-5">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-12 col-md-4 text-center">
                                                    <a href="#">
                                                        <img src="assets/images/products/product-1.png" alt="" />
                                                    </a>
                                                </div>

                                                <div className="col-8 col-md-5">
                                                    <h6 className="mb-3">
                                                        <a href="#" className="text-secondary">Apple Watch Series 5</a>
                                                    </h6>

                                                    <span className="d-block mb-2">By <a href="#" className="text-primary">Apple</a></span>

                                                    <span className="d-block text-success mb-1">In Stock</span>

                                                    <div className="input-group input-group-sm mt-3 w-100px">
                                                        <div className="input-group-prepend">
                                                            <Button className="primary small">+</Button>
                                                        </div>

                                                        <Input className="form-control text-center" placeholder="qty" value="3"></Input>

                                                        <div className="input-group-append">
                                                            <Button className="primary small">-</Button>
                                                        </div>
                                                    </div>

                                                    <p className="text-muted mt-3">Delivery by, Wed Apr 25</p>
                                                    <span className="text-success">17% off 4 offers Available</span>
                                                </div>

                                                <div className="col-4 col-md-3 text-center">
                                                    <h4 className="item-price">$19.99</h4>
                                                    <p>
                                                        <span className="smart-badge smart-badge-success smart-badge-pill">Free Shipping</span>
                                                    </p>

                                                    <button type="button" className="btn btn-sm btn-outline-danger mt-1 w-100">
                                                        <i className="fas fa-trash font-size-16px mr-2"></i>
                                                        <span>Remove</span>
                                                    </button>

                                                    <button type="button" className="btn btn-sm btn-outline-primary mt-3 w-100">
                                                        <i className="fas fa-heart font-size-16px mr-2"></i>
                                                        <span className="text-truncate">Add to Wishlist</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card shadow-1 hover-shadow-3 mb-5">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-12 col-md-4 text-center">
                                                    <a href="#">
                                                        <img src="assets/images/products/product-2.png" alt="" />
                                                    </a>
                                                </div>

                                                <div className="col-8 col-md-5">
                                                    <h6 className="mb-3">
                                                        <a href="#" className="text-secondary">Apple iPhone 11 Black 64GB</a>
                                                    </h6>

                                                    <span className="d-block mb-2">By <a href="#" className="text-primary">Apple</a></span>

                                                    <span className="d-block text-success mb-1">In Stock</span>

                                                    <div className="input-group input-group-sm mt-3 w-100px">
                                                        <div className="input-group-prepend">
                                                            <Button className="primary small">+</Button>
                                                        </div>

                                                        <Input className="form-control text-center" placeholder="qty" value="1"></Input>

                                                        <div className="input-group-append">
                                                            <Button className="primary small">-</Button>
                                                        </div>
                                                    </div>

                                                    <p className="text-muted mt-3">Delivery by, Wed Apr 25</p>
                                                    <span className="text-success">17% off 4 offers Available</span>
                                                </div>

                                                <div className="col-4 col-md-3 text-center">
                                                    <h4 className="item-price">$379.99</h4>

                                                    <button type="button" className="btn btn-sm btn-outline-danger mt-1 w-100">
                                                        <i className="fas fa-trash font-size-16px mr-2"></i>
                                                        <span>Remove</span>
                                                    </button>

                                                    <button type="button" className="btn btn-sm btn-outline-primary mt-3 w-100">
                                                        <i className="fas fa-heart font-size-16px mr-2"></i>
                                                        <span className="text-truncate">Add to Wishlist</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card shadow-1 hover-shadow-3 mb-5">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-12 col-md-4 text-center">
                                                    <a href="#">
                                                        <img src="assets/images/products/product-3.png" alt="" />
                                                    </a>
                                                </div>

                                                <div className="col-8 col-md-5">
                                                    <h6 className="mb-3">
                                                        <a href="#" className="text-secondary">Apple iMac 21.5"</a>
                                                    </h6>

                                                    <span className="d-block mb-2">By <a href="#" className="text-primary">Apple</a></span>

                                                    <span className="d-block text-danger mb-1">Out of Stock</span>

                                                    <div className="input-group input-group-sm mt-3 w-100px">
                                                        <div className="input-group-prepend">
                                                            <Button className="primary small">+</Button>
                                                        </div>

                                                        <Input className="form-control text-center" placeholder="qty" value="1"></Input>

                                                        <div className="input-group-append">
                                                            <Button className="primary small">-</Button>
                                                        </div>
                                                    </div>

                                                    <p className="text-muted mt-3">Delivery by, Wed Dec 25</p>
                                                </div>

                                                <div className="col-4 col-md-3 text-center">
                                                    <h4 className="item-price">$1219.99</h4>
                                                    <p>
                                                        <span className="smart-badge smart-badge-success smart-badge-pill">Free Shipping</span>
                                                    </p>

                                                    <button type="button" className="btn btn-sm btn-outline-danger mt-1 w-100">
                                                        <i className="fas fa-trash font-size-16px mr-2"></i>
                                                        <span>Remove</span>
                                                    </button>

                                                    <button type="button" className="btn btn-sm btn-outline-primary mt-3 w-100">
                                                        <i className="fas fa-heart font-size-16px mr-2"></i>
                                                        <span className="text-truncate">Add to Wishlist</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card shadow-1 hover-shadow-3 mb-5">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-12 col-md-4 text-center">
                                                    <a href="#">
                                                        <img src="assets/images/products/product-4.png" alt="" />
                                                    </a>
                                                </div>

                                                <div className="col-8 col-md-5">
                                                    <h6 className="mb-3">
                                                        <a href="#" className="text-secondary">Headphones</a>
                                                    </h6>

                                                    <span className="d-block mb-2">By <a href="#" className="text-primary">OneOdio</a></span>

                                                    <span className="d-block text-success mb-1">In Stock</span>

                                                    <div className="input-group input-group-sm mt-3 w-100px">
                                                        <div className="input-group-prepend">
                                                            <Button className="primary small">+</Button>
                                                        </div>

                                                        <Input className="form-control text-center" placeholder="qty" value="3"></Input>

                                                        <div className="input-group-append">
                                                            <Button className="primary small">-</Button>
                                                        </div>
                                                    </div>

                                                    <p className="text-muted mt-3">Delivery by, Wed Apr 25</p>
                                                    <span className="text-success">20% off 3 offers Available</span>
                                                </div>

                                                <div className="col-4 col-md-3 text-center">
                                                    <h4 className="item-price">$27.99</h4>
                                                    <p>
                                                        <span className="smart-badge smart-badge-success smart-badge-pill">Free Shipping</span>
                                                    </p>

                                                    <button type="button" className="btn btn-sm btn-outline-danger mt-1 w-100">
                                                        <i className="fas fa-trash font-size-16px mr-2"></i>
                                                        <span>Remove</span>
                                                    </button>

                                                    <button type="button" className="btn btn-sm btn-outline-primary mt-3 w-100">
                                                        <i className="fas fa-heart font-size-16px mr-2"></i>
                                                        <span className="text-truncate">Add to Wishlist</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 mb-5">
                                    <div className="card shadow-1">
                                        <div className="card-body">
                                            <div className="input-group">
                                                <Input className="form-control" placeholder="Apply promo code"></Input>
                                                <div className="input-group-append">
                                                    <Button className="primary">Apply</Button>
                                                </div>
                                            </div>

                                            <hr />

                                            <div className="price-details">
                                                <h6 className="price-title">Price Details</h6>
                                                <ul className="list-unstyled font-size-16px">
                                                    <li className="d-flex justify-content-between mb-3">
                                                        <div className="">Total MRP</div>
                                                        <div className="">$598</div>
                                                    </li>
                                                    <li className="d-flex justify-content-between mb-3">
                                                        <div className="">Bag Discount</div>
                                                        <div className="text-success">-25$</div>
                                                    </li>
                                                    <li className="d-flex justify-content-between mb-3">
                                                        <div className="">Estimated Tax</div>
                                                        <div className="">$1.3</div>
                                                    </li>
                                                    <li className="d-flex justify-content-between mb-3">
                                                        <div className="">EMI Eligibility</div>
                                                        <a href="#" className="text-primary">Details</a>
                                                    </li>
                                                    <li className="d-flex justify-content-between mb-3">
                                                        <div className="">Delivery Charges</div>
                                                        <div className="text-success">Free</div>
                                                    </li>
                                                </ul>
                                                <hr />
                                                <ul className="list-unstyled font-size-18px">
                                                    <li className="d-flex justify-content-between">
                                                        <div className="font-weight-bolder text-primary">Total</div>
                                                        <div className="font-weight-bolder text-primary">$574</div>
                                                    </li>
                                                </ul>
                                                <Button className="primary w-100 next">Place Order</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabItem>

                        <TabItem label={tabTemplate2}>
                            <div className="row">
                                <div className="col-xl-8 mb-5">
                                    <div className="card shadow-1 mb-5">
                                        <div className="card-body">
                                            <form id="checkoutForm"></form>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 mb-5">
                                    <div className="card shadow-1">
                                        <div className="card-body">
                                            <div className="price-details">
                                                <h4>John Doe</h4>
                                                <div className="font-size-16px my-5">
                                                    <p className="mb-0">9247 Glen Eagles Drive</p>
                                                    <p>Lewis Center, OH 12345</p>
                                                    <p>UTC-5: Eastern Standard Time (EST)</p>
                                                    <p>101-332-1143</p>
                                                </div>

                                                <Button className="primary w-100 next">Deliver To This Address</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabItem>

                        <TabItem label={tabTemplate3}>
                            <div className="row">
                                <div className="col-xl-8 mb-5">
                                    <div className="card shadow-1 mb-5">
                                        <div className="card-body">
                                            <h5>Payment options</h5>
                                            <p>Be sure to click on correct payment option</p>

                                            <h6 className="">John Doe</h6>

                                            <div className="field-holder">
                                                <RadioButton groupName="delivery-options" checked>
                                                    US Unlocked Debit Card 12XX XXXX XXXX 0000
                                                </RadioButton>
                                            </div>

                                            <div className="mt-1">
                                                <div className="form-inline">
                                                    <label>Enter CVV:</label>
                                                    <MaskedTextBox hint="The last 3 digits of the back on your credit card" mask="###" className="w-50px mx-3"></MaskedTextBox>
                                                    <Button className="primary small">Apply</Button>
                                                </div>
                                            </div>

                                            <hr className="my-4" />

                                            <ul className="list-unstyled">
                                                <li>
                                                    <div className="field-holder">
                                                        <RadioButton groupName="delivery-options">Credit / Debit / ATM Card</RadioButton>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="field-holder">
                                                        <RadioButton groupName="delivery-options">Net Banking</RadioButton>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="field-holder">
                                                        <RadioButton groupName="delivery-options">EMI (Easy Installment)</RadioButton>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="field-holder">
                                                        <RadioButton groupName="delivery-options">Cash On Delivery</RadioButton>
                                                    </div>
                                                </li>
                                            </ul>

                                            <hr className="my-2" />

                                            <div className="my-5">
                                                <button className="btn btn-outline-primary btn-sm">
                                                    <i className="fas fa-plus-circle mr-2"></i>
                                                    <span>Add Gift Card</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 mb-5">
                                    <div className="card shadow-1">
                                        <div className="card-body">
                                            <div className="price-details">
                                                <h4>Price Details</h4>

                                                <ul className="list-unstyled font-size-16px mt-5">
                                                    <li className="d-flex justify-content-between mb-3">
                                                        <div>Price of 3 items</div>
                                                        <div>
                                                            <strong>$699.30</strong>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex justify-content-between mb-3">
                                                        <div>Delivery Charges</div>
                                                        <div className="text-success">Free</div>
                                                    </li>
                                                </ul>
                                                <hr />
                                                <ul className="list-unstyled font-size-18px mt-5">
                                                    <li className="d-flex justify-content-between mb-3">
                                                        <div className="font-weight-bolder">Amount Payable</div>
                                                        <div className="font-weight-bolder text-primary">$699.30</div>
                                                    </li>
                                                </ul>

                                                <Button className="primary w-100">CONTINUE TO PAYMENT</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabItem>
                    </Tabs>
                </div>
            </div>

        </div>
    )
}

export default withAnimation(List)