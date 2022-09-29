import { useEffect, useState } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button, ButtonGroup } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

const billingsOptions = [
    {
        key: 'Monthly',
        community: 0,
        developer: 39,
        team: 179
    }, {
        key: 'Annual',
        community: 0,
        developer: 399,
        team: 1499
    }
];

function Pricing() {

    const [billing, setBilling] = useState(billingsOptions.find(b => b.key === 'Monthly'));

    useEffect(() => { document.title = `Pricing - ${defaultTitle}` }, []);

    const handleBillingChange = (e) => {

        const selectedBilling = e.detail.values[0];

        setBilling(
            billingsOptions.find(billing => selectedBilling.includes(billing.key))
        )
    }

    return (
        <div className="container">

            <div className="text-center mt-5 mb-5">
                <h3>Plans for Business or Individual Customers</h3>
                <div className="mb-3">Now with a 7-day free trial!</div>
                <ButtonGroup
                    onChange={handleBillingChange}
                    id="buttonGroup"
                    dataSource={[`${billingsOptions[0].key} billing`, `${billingsOptions[1].key} billing`]}
                ></ButtonGroup>
            </div>

            <div className="row">
                <div className="col-lg-4 mb-5">
                    <div className="card hover-bg-primary hover-text-light shadow-3 hover-shadow-6 h-100">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center h-100 px-4">
                                <div className="text-center mb-5">
                                    <h6 className="font-weight-bold">Community</h6>
                                    <span className="display-3 js-price">${billing.community}</span>
                                    <p className="font-weight-bold mt-4">Includes:</p>
                                    <p>Free</p>
                                    <p>Use in unlimited Web applications, SaaS projects, intranets and websites.</p>
                                    <p>Perpetual and royalty free</p>
                                    <p>Source code</p>
                                </div>
                                <div className="mt-auto mb-5">
                                    <Button className="primary outlined">Sign up</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-5">
                    <div className="card hover-bg-primary hover-text-light shadow-3 hover-shadow-6 h-100">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center h-100 px-4">
                                <div className="text-center mb-5">
                                    <h6 className="font-weight-bold">Developer</h6>
                                    <span className="display-3 js-price">${billing.developer}</span>
                                    <p className="font-weight-bold mt-4">Includes:</p>
                                    <p>1 Developer</p>
                                    <p>Use in unlimited Web applications, SaaS projects, intranets and websites.</p>
                                    <p>Perpetual and royalty free</p>
                                    <p>Source code</p>
                                    <p>Premium Support</p>
                                </div>
                                <div className="mt-auto mb-5">
                                    <Button className="primary">Sign up</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-5">
                    <div className="card hover-bg-primary hover-text-light shadow-3 hover-shadow-6 h-100">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center h-100 px-4">
                                <div className="text-center mb-5">
                                    <h6 className="font-weight-bold">Team</h6>
                                    <span className="display-3 js-price">${billing.team}</span>
                                    <p className="font-weight-bold mt-4">Includes:</p>
                                    <p>5 Developers</p>
                                    <p>Use in unlimited Web applications, SaaS projects, intranets and websites.</p>
                                    <p>Perpetual and royalty free</p>
                                    <p>Limited access to Source Code</p>
                                    <p>Community Support</p>
                                </div>
                                <div className="mt-auto mb-5">
                                    <Button className="primary outlined">Sign up</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-5">
                <div className="border-bottom"></div>
            </div>

            <div className="row">
                <div className="col-lg-12 text-center mb-5">
                    <h5 className="font-weight-bold">Frequently asked questions (FAQ)</h5>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100 shadow-3 hover-shadow-5 border">
                        <div className="card-body">
                            <p className="font-weight-bold">Duis arcu turpis, pulvinar?</p>
                            <p>Ut finibus ipsum nulla, at tincidunt lacus elementum ullamcorper. Duis arcu turpis, pulvinar ut orci sit amet, accumsan gravida felis. Nulla facilisi. Aenean ut sollicitudin erat. Suspendisse arcu erat, scelerisque vel enim ut, finibus malesuada dui. Proin ac lectus ac nisi mollis lobortis a nec nulla.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100 shadow-3 hover-shadow-5 border">
                        <div className="card-body">
                            <p className="font-weight-bold">Sed laoreet et?</p>
                            <p>Mauris accumsan metus libero, nec tristique mi venenatis at.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100 shadow-3 hover-shadow-5 border">
                        <div className="card-body">
                            <p className="font-weight-bold">Fusce pellentesque lacus vitae sem rutrum faucibus?</p>
                            <p>Aliquam quis scelerisque risus, vel posuere orci. Etiam convallis fermentum massa eget laoreet. Curabitur mattis, lectus ut imperdiet fringilla, diam nibh facilisis nisi.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100 shadow-3 hover-shadow-5 border">
                        <div className="card-body">
                            <p className="font-weight-bold">Class aptent taciti sociosqu?</p>
                            <p>In mi ex, dignissim eu sodales sed, elementum ac justo. Integer felis sem, ornare sit amet dui commodo, porta malesuada ex. Suspendisse ut porttitor magna.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(Pricing)