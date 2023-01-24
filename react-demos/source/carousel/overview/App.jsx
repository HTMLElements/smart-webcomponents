import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from 'smart-webcomponents-react/carousel';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.carousel = React.createRef();
	}

	generateDataSource(items) {
		const basePath = 'https://www.htmlelements.com/demos/images/';
		const dataSource = Array(items).fill({});

		dataSource.forEach((element, index) => dataSource[index] = {
			image: `${basePath}carousel-medium-${index + 1}.jpg`,
			label: 'Slide ' + index,
			content: 'Content ' + index
		});

		return dataSource
	}

	dataSource = this.generateDataSource(6);

	componentDidMount() {
	}

	render() {
		return (<Carousel dataSource={this.dataSource} ref={this.carousel}></Carousel>);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
