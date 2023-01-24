import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from 'smart-webcomponents-react/carousel';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.carousel = React.createRef();
	}

	generateDataSource(items) {
		const basePath = './../../../src/images/';
		let dataSource = Array(items).fill({});

		dataSource.forEach((element, index) => dataSource[index] = {
			image: `${basePath}carousel-large-${index + 1}.jpg`,
			thumb: `${basePath}carousel-xs-${index + 1}.jpg`
		});

		return dataSource;
	}

	dataSource = this.generateDataSource(7);

	init() {
		const template = document.createElement('template');

		template.innerHTML = '<img src="{{thumb}}"/>';
		template.id = 'thumb';

		document.body.appendChild(template);

		this.carousel.current.indicatorTemplate = 'thumb';
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Carousel ref={this.carousel} id="carousel" dataSource={this.dataSource} autoPlay slideShow loop></Carousel>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
