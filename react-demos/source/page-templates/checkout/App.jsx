import React from "react";
import ReactDOM from "react-dom";
import { Breadcrumb } from 'smart-webcomponents-react/breadcrumb';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Card } from 'smart-webcomponents-react/card';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.card = React.createRef();
		this.breadcrumb = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.button3 = React.createRef();

		this.page = 1;
	}

	dataSource = [{
		label: 'Shipping address',
		value: '0'
	},
	{
		label: 'Payment details',
		value: '1'
	},
	{
		label: 'Review your order',
		value: '2'
	}];

	handleClick(buttonType) {
		let page = this.page;

		if (buttonType === 'prev') {
			this.page = page <= 0 ? 0 : page - 1;
		}
		else if (buttonType === 'next') {
			this.page = page >= 3 ? 3 : page + 1;
		}
		else {
			this.page = 4;
		}

		this.updateLayout(this.page);
	}

	updateLayout(page) {
		const breadcrumb = this.breadcrumb.current,
			card = this.card.current,
			prev = this.button.current.nativeElement,
			next = this.button2.current.nativeElement,
			placeOrder = this.button3.current.nativeElement;

		breadcrumb.step = page;
		breadcrumb.nativeElement.setAttribute('step', '' + page);

		switch (page) {
			case 1:
				prev.classList.add('smart-hidden');
				next.classList.remove('smart-hidden');
				placeOrder.classList.add('smart-hidden');
				break;
			case 2:
				prev.classList.remove('smart-hidden');
				next.classList.remove('smart-hidden');
				placeOrder.classList.add('smart-hidden');
				break;
			case 3:
				prev.classList.remove('smart-hidden');
				next.classList.add('smart-hidden');
				placeOrder.classList.remove('smart-hidden');
				break;
			case 4:
				prev.classList.add('smart-hidden');
				next.classList.add('smart-hidden');
				placeOrder.classList.add('smart-hidden');
				break;
		}

		card.nativeElement.setAttribute('page', '' + page);
	}

	init() {
		const template = document.createElement('template');

		template.id = 'breadcrumbTemplate';
		template.innerHTML = '<i className="material-icons breadcrumb-circle"></i>{{label}}';

		document.body.appendChild(template);

		this.breadcrumb.current.itemTemplate = template.id;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<header>
					<div className="logo">Company name</div>
				</header>
				<Card ref={this.card} id="card">
					<h1>Checkout</h1>
					<Breadcrumb ref={this.breadcrumb} id="breadcrumb" dataSource={this.dataSource}></Breadcrumb>
					<section id="address">
						<h2>Shipping address</h2>
						<form>
							<TextBox label="First name*" id="firstName"></TextBox>
							<TextBox label="Last name*" id="lastName"></TextBox>
							<TextBox label="Address line 1*" id="address1"></TextBox>
							<TextBox label="Address line 2" id="address2"></TextBox>
							<TextBox label="City*" id="city"></TextBox>
							<TextBox label="State/Province/Region" id="state"></TextBox>
							<TextBox label="Zip / Postal code*" id="zip"></TextBox>
							<TextBox label="Country*" id="country"></TextBox>
							<CheckBox>Use this address for payment details</CheckBox>
						</form>
					</section>
					<section id="details">
						<h2>Payment method</h2>
						<form>
							<TextBox label="Name on card*" id="nameOnCard"></TextBox>
							<TextBox label="Card number*" id="cardNumber"></TextBox>
							<TextBox label="Expiry date*" id="expiry"></TextBox>
							<TextBox label="CVV*" hint="Last three digits on signature strip" id="ccv"></TextBox>
							<CheckBox>Remember credit card details for next time</CheckBox>
						</form>
					</section>
					<section id="order">
						<h2>Order summary</h2>
						<table id="orderSumary">
							<tr>
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
						</table>
						<table>
							<tr>
								<th>Shipping</th>
								<th>Payment details</th>
								<th></th>
							</tr>
							<tr>
								<td>John Smith</td>
								<td>Card type</td>
								<td>Visa</td>
							</tr>
							<tr>
								<td>1 Material-UI Drive, Reactville,</td>
								<td>Card holder</td>
								<td>Mr John Smith</td>
							</tr>
							<tr>
								<td>Anytown, 99999, USA</td>
								<td>Card number</td>
								<td>xxxx-xxxx-xxxx-1234</td>
							</tr>
							<tr>
								<td></td>
								<td>Expiry date</td>
								<td>04/2024</td>
							</tr>
						</table>
					</section>
					<section id="sumary">
						<h2>Thank you for your order.</h2>
						<p>Your order number is #2001539. We have emailed your order confirmation,
			                and will send you an update when your order has shipped.</p>
					</section>
					<div className="buttons-container">
						<Button ref={this.button} onClick={this.handleClick.bind(this, 'prev')} id="prev" className="flat smart-hidden">BACK</Button>
						<Button ref={this.button2} onClick={this.handleClick.bind(this, 'next')} id="next" className="primary">NEXT</Button>
						<Button ref={this.button3} onClick={this.handleClick.bind(this)} id="placeOrder" className="primary smart-hidden">PLACE ORDER</Button>
					</div>
				</Card>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
