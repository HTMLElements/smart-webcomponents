import React from "react";
import ReactDOM from "react-dom";
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Input } from 'smart-webcomponents-react/input';
import { Grid, Smart } from 'smart-webcomponents-react/grid';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {

	gridProps = {
		layout: {
			rowHeight: 50
		},
		dataSource: new Smart.DataAdapter(
			{
				dataSource: [
					{
						title: 'Amazon - Case for Amazon Fire 7" Tablets - Black',
						price: 24.99,
						quantity: 1,
					},
					{
						title: '3DR - Propellers for 3DR Solo Drones (2-Pack) - Black',
						price: 14.95,
						quantity: 1,
					},
					{
						title: '3DR - Solo Smart Rechargeable Battery - Black',
						price: 149.95,
						quantity: 2,
					},
					{
						title: 'Amazon - Case for Amazon Fire HD 8 Tablets - Black',
						price: 39.99,
						quantity: 3,
					},
					{
						title: '<b>Total</b>',
						price: 459.81,
						quantity: 0,
					},

				],
				dataFields:
					[
						'title: string',
						'price: string',
						'quantity: string',
					]
			}),
		columns: [
			{
				label: 'Product', dataField: 'title', width: '70%', formatFunction(settings) {
					settings.template = settings.row.data.title + (settings.row.data.quantity > 0 ? ' x ' + settings.row.data.quantity : '');
				}
			},
			{
				label: 'Total', dataField: 'quantity', width: '30%', cellsAlign: 'right', align: 'right', formatFunction(settings) {
					settings.template = (settings.row.data.quantity > 0 ? '$' + (parseFloat(settings.row.data.price) * parseFloat(settings.row.data.quantity)) : '<b>$' + settings.row.data.price + '</b>');
				}
			}
		]

	}

	handleClick() {
		window.location.href = '../cart';
	}

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<header>
					<div className="header-container">
						<div className="logo">
							<h1>My Shop</h1>
						</div>

						<Menu id="menu" minimizeWidth={500} dropDownPosition="bottom-left">
							<MenuItem shortcut="Ctrl+R" className="active-item">
								<i className="material-icons">
									payment
                    </i>
							</MenuItem>

							<MenuItem shortcut="Ctrl+G" onClick={this.handleClick.bind(this)}>
								<i className="material-icons">
									shopping_cart
                    </i>
							</MenuItem>

							<MenuItem shortcut="Ctrl+F">
								<i className="material-icons">
									search
                    </i>
							</MenuItem>

						</Menu>

					</div>
				</header>

				<section className="checkout-container">
					<div className="smart-card-holder">
						<div className=" smart-grid-layout centered">
							<div className="row">

								<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
									<div className="subtitle">
										Billing details
                        </div>

									<div className=" smart-grid-layout centered">
										<div className="row">
											<div className="col-md-6 col-sm-12 col-12">
												<label>First Name *</label>
												<Input></Input>
											</div>
											<div className="col-md-6 col-sm-12 col-12">
												<label>Last Name *</label>
												<Input></Input>
											</div>
										</div>

										<div className="row">
											<div className="col-md-12 col-sm-12 col-12">
												<label>Company Name</label>
												<Input></Input>
											</div>
										</div>

										<div className="row">
											<div className="col-md-6 col-sm-12 col-12">
												<label>Email Address *</label>
												<Input></Input>
											</div>
											<div className="col-md-6 col-sm-12 col-12">
												<label>Mobile No</label>
												<Input></Input>
											</div>
										</div>


										<div className="row">
											<div className="col-md-6 col-sm-12 col-12">
												<label>Country</label>
												<DropDownList dropDownPosition="bottom" placeholder="Text">
													<ListItem selected>Australia</ListItem>
													<ListItem>Brazil</ListItem>
													<ListItem>France</ListItem>
													<ListItem>Germany</ListItem>
													<ListItem>United States</ListItem>
												</DropDownList>
											</div>
											<div className="col-md-6 col-sm-12 col-12">
												<label>City</label>
												<Input></Input>
											</div>
										</div>

										<div className="row">
											<div className="col-md-12 col-sm-12 col-12">
												<label>Address</label>
												<Input></Input>
											</div>
										</div>

										<div className="row">
											<div className="col-md-12 col-sm-12 col-12">
												<Input placeholder="Apartment, suite, unit etc. (optional)"></Input>
											</div>
										</div>


										<div className="row">
											<div className="col-md-12 col-sm-12 col-12">
												<CheckBox>Create an account ?</CheckBox>
											</div>
										</div>

									</div>

								</div>

								<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
									<Grid {...this.gridProps} id="productCheckout"></Grid>

									<Button className="primary btn-outlined place-order text">Place Order</Button>
								</div>
							</div>
						</div>
					</div>

				</section>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
