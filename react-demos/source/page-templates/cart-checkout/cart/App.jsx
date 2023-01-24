import React from "react";
import ReactDOM from "react-dom";
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Window } from 'smart-webcomponents-react/window';
import { Input } from 'smart-webcomponents-react/input';
import { Grid, Smart } from 'smart-webcomponents-react/grid';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.grid = React.createRef();
		this.window = React.createRef();
		this.total = React.createRef();
		this.gridIdToRemove = 0;
	}


	gridClickHandler(e) {
		if (e.target.classList.contains('delete-product-icon')) {
			this.gridIdToRemove = e.target.id;
			this.window.current.open();
		}
	}

	windowClickHandler(e) {
		if (e.target.textContent === 'YES') {
			let totalSelector = this.total.current;
			let totalContent = totalSelector.innerText;

			totalContent = totalContent.replace(',', '.');
			totalContent = totalContent.split(': $')[1];
			totalContent = parseFloat(totalContent).toFixed(2);

			const col = this.grid.current.rows[this.gridIdToRemove]._cells[4].row.data;
			let deleteProdPrice = (parseFloat(col.price).toFixed(2) * parseInt(col.quantity));

			totalContent = totalContent - deleteProdPrice;
			totalContent = parseFloat(totalContent.toFixed(2));

			totalSelector.innerText = 'Total: $' + totalContent;

			this.closeDeleteModal(1);
		}

		if (e.target.textContent === 'NO') {
			this.closeDeleteModal();
		}
	}

	closeDeleteModal(confirmDelete = 0) {
		if (confirmDelete === 1) {
			this.grid.current.rows.splice(this.gridIdToRemove, 1);
		}

		this.window.current.close();
	}

	productImages = [
		'./../../../src/images/tablet-184888_960_720.jpg',
		'./../../../src/images/quadrocopter-1658967_960_720.png',
		'./../../../src/images/battery-1049664_960_720.jpg',
	];

	gridSettings = {
		layout: {
			rowHeight: 100
		},
		dataSource: new Smart.DataAdapter(
			{
				dataSource: [
					{
						image: this.productImages[0],
						title: 'Amazon - Case for Amazon Fire 7" Tablets - Black',
						description: 'Protect your Amazon Fire 7" tablet from scratches and bumps on the go with this slim Amazon B00ZGUYN1Q case, which features a full-coverage design with polyurethane and microfiber materials for durability. The built-in stand enables hands-free viewing.',
						price: 24.99,
						quantity: 1,
						total: '',
					},
					{
						image: this.productImages[1],
						title: '3DR - Propellers for 3DR Solo Drones (2-Pack) - Black',
						description: '3D Robotics Propellers for Solo Drones: Buy this set of replacement propellers before you need them so you can get back to flying as soon as you damage or lose a propeller. The 1-piece design of these propellers keeps them secure during flight, self-tightening so you can install them in an instant and return to in-air fun.',
						price: 14.95,
						quantity: 1,
						total: '',
					},
					{
						image: this.productImages[2],
						title: '3DR - Solo Smart Rechargeable Battery - Black',
						description: '3D Robotics Battery for Solo Drones: Instead of waiting for your lone battery to recharge, get back to flying right away with this rechargeable battery for Solo drones. The battery can power your drone for up to 25 minutes with no camera attached, or 20 minutes carrying a camera.',
						price: 149.95,
						quantity: 2,
						total: '',
					},
					{
						image: this.productImages[0],
						title: 'Amazon - Case for Amazon Fire HD 8 Tablets - Black',
						description: 'Take your Amazon Fire HD 8 tablet on the go with this Amazon B00XM5W2WE case, which features a folio cover that guards your device\'s display and automatically wakes up your device when opened.The built-in stand offers comfortable hands-free viewing.',
						price: 39.99,
						quantity: 3,
						total: '',
					},
				],
				dataFields:
					[
						'image: string',
						'title: string',
						'description: string',
						'price: string',
						'quantity: string',
						'total: string',
					]
			}),
		columns: [
			{
				label: '', dataField: 'image', cellsAlign: 'center', align: 'center', width: '10%',
				template: function (formatObject) {
					if (!formatObject.template) {
						formatObject.template = '<i className="material-icons delete-product-icon" id="' + formatObject.row.visibleIndex + '">close</i><img className="product-image" src = "' + formatObject.value + '" />';
					}
				}
			},
			{
				label: 'Name', dataField: 'title', width: '40%', formatFunction(settings) {
					settings.template = '<span className="product-title">' + settings.row.data.title + '</span><span className="product-description">' + settings.row.data.description + '</span>';
				}
			},
			{
				label: 'Price', dataField: 'price', cellsAlign: 'center', align: 'center', width: '20%', template: function (formatObject) {
					if (!formatObject.template) {
						formatObject.template = '$' + formatObject.value;
					}
				}
			},
			{
				label: 'Quantity', dataField: 'quantity', width: '10%', cellsAlign: 'center', align: 'center', formatFunction(settings) {
					settings.template = '<smart-input placeholder="Quantity" value=' + settings.row.data.quantity + '></smart-input>';
				}
			},
			{
				label: 'Total', dataField: 'total', cellsAlign: 'center', align: 'center', width: '20%', formatFunction(settings) {
					settings.template = '$' + parseFloat(settings.row.data.price) * parseFloat(settings.row.data.quantity);
				}
			}
		]
	}

	handleMenuItemClick() {
		window.location.href = '../checkout';
	}

	init() {
		// this.grid.current.nativeElement.addEventListener('click', gridClickHandler);

		// this.window.current.nativeElement.addEventListener('click', windowClickHandler);
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

							<MenuItem shortcut="Ctrl+R" onClick={this.handleMenuItemClick.bind(this)}>
								<i className="material-icons">
									payment
                    </i>
							</MenuItem>

							<MenuItemsGroup>
								<i className="material-icons">
									shopping_cart
                    </i>

								<MenuItem value="Cart" className="menu-cart-title">
									Cart
                    </MenuItem>

								<MenuItem value="Cart">
									<div className=" jqx-grid-layout centered">
										<div className="row menu-cart-row">
											<div className="col-md-8 col-sm-12 menu-cart-product-content">
												<div className="cart-product-title">
													Case for Amazon Fire 7
                                    </div>

												<div className="cart-product-price">
													$24.99
                                    </div>
											</div>
											<div className="col-md-4 col-sm-12">
												<img src="./../../../src/images/tablet-184888_960_720.jpg" className="menu-cart-product-image" />
											</div>
										</div>
										<div className="row menu-cart-row">
											<div className="col-md-8 col-sm-12 menu-cart-product-content">
												<div className="cart-product-title">
													Propellers for 3DR Solo Drones
                                    </div>

												<div className="cart-product-price">
													$14.95
                                    </div>
											</div>
											<div className="col-md-4 col-sm-12">
												<img src="./../../../src/images/quadrocopter-1658967_960_720.png" className="menu-cart-product-image" />
											</div>
										</div>
										<div className="row menu-cart-row">
											<div className="col-md-8 menu-cart-product-content">
												<div className="cart-product-title">
													Solo Smart Rechargeable Battery
                                    </div>

												<div className="cart-product-price">
													$149.95
                                    </div>
											</div>
											<div className="col-md-4">
												<img src="./../../../src/images/battery-1049664_960_720.jpg" className="menu-cart-product-image" />
											</div>
										</div>
										<div className="row menu-cart-row">
											<div className="col-md-8 menu-cart-product-content">
												<div className="cart-product-title">
													Case for Amazon Fire 7
                                    </div>

												<div className="cart-product-price">
													$24.99
                                    </div>
											</div>
											<div className="col-md-4">
												<img src="./../../../src/images/tablet-184888_960_720.jpg" className="menu-cart-product-image" />
											</div>
										</div>
									</div>
								</MenuItem>

								<MenuItem value="Mars">
									<div className=" jqx-grid-layout centered">
										<div className="row menu-cart-row">

											<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
												<Button onClick={this.handleMenuItemClick.bind(this)}>View Cart</Button>
											</div>

											<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
												<Button>Total $459,81</Button>
											</div>

										</div>
									</div>
								</MenuItem>

							</MenuItemsGroup>

							<MenuItem shortcut="Ctrl+F">
								<i className="material-icons">
									search
                    </i>
							</MenuItem>

						</Menu>

					</div>
				</header>


				<section className="cart-container">

					<Grid {...this.gridSettings} ref={this.grid} id="gridCartTable" onClick={this.gridClickHandler.bind(this)}></Grid>

					<div ref={this.total} className="total">
						Total: $459,81
        </div>

					<div className="discount">
						<div className="jqx-grid-layout centered">
							<div className="row">

								<div className="col-xl-8 col-lg-8 col-md-6 col-sm-6 col-12">
									<Input placeholder="Discount Coupon"></Input>
								</div>

								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
									<div className="buttons">
										<Button className="primary btn-outlined icon text">Apply</Button>
										<Button className="primary btn-success icon text" onClick={this.handleMenuItemClick.bind(this)}>Checkout</Button>
									</div>
								</div>

							</div>
						</div>
					</div>
				</section>


				<Window ref={this.window} id="delete-prod-modal" onclick={this.windowClickHandler.bind(this)} label="Delete product" headerButtons={[]}>
					<div id="article">
						<section>
							<h3>Are you sure you want to delete this product?</h3>

							<div className=" jqx-grid-layout centered">
								<div className="row delete-modal-cart-row">
									<div className="col-md-6 col-sm-12 menu-cart-product-content">
										<Button className="confirm-delete-modal">YES</Button>
									</div>
									<div className="col-md-6 col-sm-12 menu-cart-product-content">
										<Button className="close-delete-modal">NO</Button>
									</div>
								</div>
							</div>
						</section>
					</div>
				</Window>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
