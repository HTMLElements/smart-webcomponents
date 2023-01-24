import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from 'smart-webcomponents-react/carousel';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.getElementById("horizontalSlider"),
	        smartCarousel = document.querySelector('smart-carousel');
	    smartCarousel.dataSource = [{
	            headline: 'Slide 1',
	            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	        },
	        {
	            headline: 'Slide 2',
	            content: 'Suspendisse ornare nulla non risus bibendum, vitae tempus magna egestas.'
	        },
	        {
	            headline: 'Slide 3',
	            content: 'Donec ac ex hendrerit, condimentum metus a, vestibulum quam.'
	        },
	        {
	            headline: 'Slide 4',
	            content: 'Mauris rutrum est eget posuere sollicitudin.'
	        },
	        {
	            headline: 'Slide 5',
	            content: 'Duis vitae tortor at mi lobortis tristique.'
	        },
	        {
	            headline: 'Slide 6',
	            content: 'Quisque in lorem ut ligula rutrum convallis vel id neque.'
	        }
	    ];
	    slider.addEventListener('change', function(event) {
	        const size = event.detail.value;
	        smartCarousel.style.width = size + 'px';
	        smartCarousel.style.height = size / 2 + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="80" max="1000" value="400"
			    orientation="horizontal" scale-position="near" unit="px" show-unit></Slider>
			    <br />
			    <Carousel ref="carousel" className="animation" auto-play slide-show interval="1000"
			    loop indicators arrows></Carousel>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
