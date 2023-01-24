import React from "react";
import ReactDOM from "react-dom";
import { Card } from 'smart-webcomponents-react/card';

class App extends React.Component {

	dataSource = {
		content: 'Swipe left/right'
	};

	init() {
		const that = this,
			cards = document.querySelectorAll('smart-card');

		document.getElementById('templateContainer').innerHTML =
			`<template id="cardTemplate">
				<div className="card-content">{{content}}</div>
			</template>`;


		for (let i = 0; i < cards.length; i++) {
			const card = cards[i];

			card.addEventListener('swipeleft', function () {
				card.classList.add('swipe-left');
			});

			card.addEventListener('swiperight', function () {
				card.classList.add('swipe-right');
			});

			card.addEventListener("animationend", function () {
				card.remove();
			});
		}
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<smart-cards>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
					<Card dataSource={this.dataSource} itemTemplate="cardTemplate"></Card>
				</smart-cards>
				<div id="templateContainer"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
