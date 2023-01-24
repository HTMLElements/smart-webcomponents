import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Carousel } from 'smart-webcomponents-react/carousel';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.carousel = React.createRef();
		this.textbox = React.createRef();
	}

	generateDataSource(items) {
		const dataSource = Array(items).fill({});

		dataSource.forEach((element, index) => dataSource[index] = {
			image: `./../../../src/images/carousel-medium-${index + 1}.jpg`,
			label: 'Slide ' + index,
			content: 'Content ' + index
		});

		return dataSource;
	}

	dataSource = this.generateDataSource(6);

	handleChange(property, event) {
		this.carousel.current[property] =  property.indexOf('hide') === 0 ? !event.detail.value : event.detail.value;
	}

	handleClick(methodName) {
		this.carousel.current[methodName]();
	}

	handleSlideTo() {
		this.carousel.current.slideTo(parseInt('' + this.textbox.current.value) || 0);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Carousel ref={this.carousel} dataSource={this.dataSource} id="carousel"></Carousel>

				<div id="navigationBox">
					<CheckBox onChange={this.handleChange.bind(this, 'hideArrows')} id="arrows" checked>Show Arrows</CheckBox>
					<br />
					<CheckBox onChange={this.handleChange.bind(this, 'hideIndicators')} id="indicators" checked>Show Indicators</CheckBox>
					<br />
					<CheckBox onChange={this.handleChange.bind(this, 'wheel')} id="wheel" >Navigate via Mouse Wheel</CheckBox>
					<br />
					<CheckBox onChange={this.handleChange.bind(this, 'swipe')} id="swipe" >Navigate via Swipe Left / Swipe Right</CheckBox>
					<br />
					<CheckBox onChange={this.handleChange.bind(this, 'slideShow')} id="slideShow" >SlideShow</CheckBox>
					<br />
					<CheckBox onChange={this.handleChange.bind(this, 'loop')} id="loop" >Loop</CheckBox>
					<br />
					<hr />
					<Button onClick={this.handleClick.bind(this, 'play')} id="playButton">Play</Button>
					<Button onClick={this.handleClick.bind(this, 'pause')} id="pauseButton">Pause</Button>
					<br />
					<br />
					<Button onClick={this.handleClick.bind(this, 'prev')} id="prevButton">Prev</Button>
					<Button onClick={this.handleClick.bind(this, 'next')} id="nextButton">Next</Button>
					<br />
					<br />
					<Button onClick={this.handleSlideTo.bind(this)} id="slideToButton">Slide To</Button>
					<br />
					<TextBox ref={this.textbox} id="slideToValue" placeholder="Value"></TextBox>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
