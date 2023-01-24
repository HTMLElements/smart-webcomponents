import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from 'smart-webcomponents-react/carousel';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.carousel = React.createRef();
	}

	dataSource = [{
		label: 'Mauris eget nisi ipsum',
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nisi ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
					per inceptos himenaeos.In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.Sed eu facilisis lectus.
					In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.`,
		image: `./../../../src/images/carousel-square-1.jpg`
	},
	{
		label: 'Ut faucibus commodo velit',
		content: `Duis non viverra nisl, at varius arcu. Ut faucibus commodo velit id blandit. In diam nisi, congue in leo quis, sodales pharetra elit. Sed eu facilisis lectus.
					In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.Sed eu facilisis lectus.
					In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.`,
		image: `./../../../src/images/carousel-square-2.jpg`
	},
	{
		label: 'Donec tincidunt',
		content: `Nulla imperdiet eleifend laoreet. Fusce tincidunt ligula nisi, ac lobortis neque aliquet ac. Donec tincidunt, justo et viverra feugiat, metus neque efficitur arcu,
					vel condimentum diam dolor ut mi.In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.Donec tincidunt, justo et viverra feugiat, metus neque efficitur arcu,
					vel condimentum diam dolor ut mi.In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.`,
		image: `./../../../src/images/carousel-square-3.jpg`
	}];

	init() {
		const template = document.createElement('template');

		template.id = 'itemTemplate';
		template.innerHTML = `
		<h3 className="template-header">{{label}}</h3>
		<p className="template-content">{{content}}</p>
		<img className="template-image" src="{{image}}" />
		`;

		document.body.appendChild(template);

		this.carousel.current.itemTemplate = template.id;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Carousel ref={this.carousel} id="carousel" className="slide" autoPlay slideShow
					loop dataSource={this.dataSource}></Carousel>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
