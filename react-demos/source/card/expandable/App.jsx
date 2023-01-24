import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Card } from 'smart-webcomponents-react/card';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.card = React.createRef();
		this.card2 = React.createRef();
		this.card3 = React.createRef();
		this.card4 = React.createRef();
		this.card5 = React.createRef();
		this.card6 = React.createRef();
	}

	dataSource = [{
		image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Tiger_in_Ranthambhore.jpg',
		title: 'Bengal tiger',
		comment: 'Bengal tigers weigh up to 325 kg (717 lb), and reach a head and body length of 320 cm (130 in).',
		content: 'The Bengal tiger (<em>Panthera tigris tigris</em>) is the most numerous tiger. By 2011, the total population was estimated at fewer than 2,500 individuals with a decreasing trend.'
	},
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg/1280px-Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg',
		title: 'Indochinese tiger',
		comment: 'Males range in size from 2.55 to 2.85 m (8.4 to 9.4 ft) and in weight from 150 to 195 kg (331 to 430 lb).',
		content: 'The Indochinese tiger (<em>Panthera tigris corbetti</em>) is a tiger subspecies occurring in Myanmar, Thailand, Lao PDR, Viet Nam, Cambodia and southwestern China.'
	},
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/MalayanTiger01.jpg/1280px-MalayanTiger01.jpg',
		title: 'Malayan tiger',
		comment: 'The average length of a male is 8 ft 6 in (259 cm), and of a female 7 ft 10 in (239 cm).',
		content: 'The Malayan tiger (<em>Panthera tigris jacksoni</em>) is a tiger subspecies that inhabits the southern and central parts of the Malay Peninsula and has been classified as Critically Endangered by IUCN in 2015 as the population was roughly estimated at 250 to 340 adult individuals in 2013; this population likely comprises less than 250 mature breeding individuals, with a declining trend.'
	},
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/1280px-P.t.altaica_Tomak_Male.jpg',
		title: 'Siberian tiger',
		comment: 'The body length is not less than 150 cm (60 in), condylobasal length of skull 250 mm (10 in).',
		content: 'The Siberian tiger (<em>Panthera tigris altaica</em>), also called Amur tiger, is a tiger subspecies inhabiting mainly the Sikhote Alin mountain region with a small population in southwest Primorye Province in the Russian Far East. The Siberian tiger once ranged throughout all of Korea, north-eastern China, Russian Far East, and eastern Mongolia.'
	},
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/2012_Suedchinesischer_Tiger.JPG/1280px-2012_Suedchinesischer_Tiger.JPG',
		title: 'South China tiger',
		comment: 'Males measure from 230 to 265 cm (91 to 104 in) between the pegs, and weigh 130 to 175 kg (287 to 386 lb).',
		content: 'The South China tiger (<em>Panthera tigris tigris</em>) is a tiger population in the provinces of Fujian, Guangdong, Hunan, Jiangxi in southern China.'
	},
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Panthera_tigris_sumatran_subspecies.jpg',
		title: 'Malayan tiger',
		comment: 'Males weigh 100 to 140 kg (220 to 310 lb) and measure 2.2 to 2.55 m (87 to 100 in).',
		content: 'The Sumatran tiger (<em>Panthera tigris sondaica</em>) is a tiger population that lives in the Indonesian island of Sumatra.'
	}
	];

	contentHandler = function (card) {
		ReactDOM.render(
			<div>
				<Button className="share">Share</Button>
				<Button className="more">More</Button>
				<ToggleButton><i className="material-icons">&#xE313;</i></ToggleButton>
			</div>, card.querySelector('.card-buttons'), function () {
				const toggleBtn = card.getElementsByTagName('smart-toggle-button')[0],
					moreBtn = card.querySelector('.more'),
					content = card.querySelector('.card-content');

				moreBtn.addEventListener('click', function () {
					content.classList.remove('hidden');
					toggleBtn.checked = true;
				});

				toggleBtn.addEventListener('click', function () {
					content.classList.toggle('hidden');
				});
			});
	};

	init() {
		document.getElementById('templateContainer').innerHTML =
			`<template id="customTemplate">
					<div className="card-image">
					<img src="{{image}}">
					<h2 className="card-title">{{title}}</h2>
				</div>
				<div className="card-comment">
					{{comment}}
				</div>
				<div className="card-buttons"></div>
				<div className="card-content hidden">
					{{content}}
				</div>
			</template>`;

		const that = this,
			cards = [that.card.current, that.card2.current, that.card3.current,
			that.card4.current, that.card5.current, that.card6.current];

		for (let i = 0; i < cards.length; i++) {
			cards[i].dataSource = this.dataSource[i];
		}
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<smart-cards>
					<Card ref={this.card} contentHandler={this.contentHandler.bind(this)} className="expandable-card" itemTemplate="customTemplate"></Card>
					<Card ref={this.card2} contentHandler={this.contentHandler.bind(this)} className="expandable-card" itemTemplate="customTemplate"></Card>
					<Card ref={this.card3} contentHandler={this.contentHandler.bind(this)} className="expandable-card" itemTemplate="customTemplate"></Card>
					<Card ref={this.card4} contentHandler={this.contentHandler.bind(this)} className="expandable-card" itemTemplate="customTemplate"></Card>
					<Card ref={this.card5} contentHandler={this.contentHandler.bind(this)} className="expandable-card" itemTemplate="customTemplate"></Card>
					<Card ref={this.card6} contentHandler={this.contentHandler.bind(this)} className="expandable-card" itemTemplate="customTemplate"></Card>
				</smart-cards>
				<div id="templateContainer"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
