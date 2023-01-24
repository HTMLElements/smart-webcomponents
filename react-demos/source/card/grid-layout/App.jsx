import React from "react";
import ReactDOM from "react-dom";
import { Card } from 'smart-webcomponents-react/card';
import { Pager } from 'smart-webcomponents-react/pager';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.card = React.createRef();
		this.card2 = React.createRef();
		this.card3 = React.createRef();
		this.card4 = React.createRef();
		this.card5 = React.createRef();
		this.card6 = React.createRef();
		this.card7 = React.createRef();
	}

	dataSource = {
		title: 'Marketing',
		content: '123.4M'
	};

	dataSource2 = {
		title: 'Conversion',
		content: '537',
		percentage: '+22',
		image: './../../../src/images/card-demo-chart-4.png'
	};

	dataSource3 = {
		title: 'Impressions',
		content: '123.4M',
		percentage: '+12.3',
		image: './../../../src/images/card-demo-chart-5.png'
	};

	dataSource4 = {
		title: 'Sales',
		content: '345.8M'
	};

	dataSource5 = {
		title: 'Design',
		content: '345.2M'
	};

	dataSource6 = {
		title: 'Clicks',
		content: '537'
	};

	init() {
		const that = this;

		document.getElementById('templateContainer').innerHTML = `
			<template id="smallTemplate">
			<div className="card-title">{{title}}</div>
			<div className="card-content">{{content}}</div>
			</template>
			<template id="mediumTemplate">
			<div className="card-title">{{title}}</div>
			<div className="card-content">{{content}}</div>
			<div className="card-target"> <span className="card-percentage">{{percentage}}%</span> of target</div>
			<div
				className="card-graphic">
				<img src="{{image}}" />
			</div>
			</template>
			<template id="largeTemplate">
			<h3>{{title}}</h3>
			<div className="carrusel">
				<div className="slide">
					<div className="card-graphic">
						<img src="{{image1}}" />
					</div>
				</div>
				<div className="slide hidden">
					<div className="card-graphic">
						<img src="{{image2}}" />
					</div>
				</div>
				<div className="slide hidden">
					<div className="card-graphic">
						<img src="{{image3}}" />
					</div>
				</div>
			</div>
			<div className="pager"></div>
			</template>`;

		const chartsCard = that.card.current;

		chartsCard.dataSource = {
			title: 'Progress',
			image1: './../../../src/images/card-demo-chart-1.png',
			image2: './../../../src/images/card-demo-chart-2.png',
			image3: './../../../src/images/card-demo-chart-3.png'
		};

		chartsCard.contentHandler = function (card) {
			ReactDOM.render(<Pager showPageIndexSelectors  pageIndexSelectors={3}></Pager>, card.querySelector('.pager'), function () {
				const pager = this.nativeElement,
					slides = card.querySelectorAll('.slide');

				pager.addEventListener('change', function (event) {
					for (let i = 0; i < slides.length; i++) {
						i === event.detail.index ? slides[i].classList.remove('hidden') : slides[i].classList.add('hidden');
					}
				});
			})
		};
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<smart-cards>
					<Card ref={this.card} id="charts" className="image-card large" itemTemplate="largeTemplate"></Card>
					<Card ref={this.card2} dataSource={this.dataSource} id="marketing" className="image-card small" itemTemplate="smallTemplate"></Card>
					<Card ref={this.card3} dataSource={this.dataSource2} id="conversion" className="image-card medium" itemTemplate="mediumTemplate"></Card>
					<Card ref={this.card4} dataSource={this.dataSource3} id="impressions" className="image-card medium" itemTemplate="mediumTemplate"></Card>
					<Card ref={this.card5} dataSource={this.dataSource4} id="sales" className="image-card small" itemTemplate="smallTemplate"></Card>
					<Card ref={this.card6} dataSource={this.dataSource5} id="design" className="image-card small" itemTemplate="smallTemplate"></Card>
					<Card ref={this.card7} dataSource={this.dataSource6} id="clicks" className="image-card small" itemTemplate="smallTemplate"></Card>
				</smart-cards>
				<div id="templateContainer"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
