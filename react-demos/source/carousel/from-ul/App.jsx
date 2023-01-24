import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from 'smart-webcomponents-react/carousel';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Carousel loop className="slide">
			        <ul>
			            <li>
			                 <h2>Slide 1</h2>
			                <p>Pellentesque in est aliquet.</p>
			                <p>Pellentesque in est aliquet, fringilla lorem a...</p>
			            </li>
			            <li>
			                 <h2>Slide 2</h2>
			                <p>Pellentesque in est aliquet, fringilla lorem a.</p>
			                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
			            </li>
			            <li>
			                 <h2>Slide 3</h2>
			                <p>Nulla facilisi. Sed dictum justo sit amet ligula cursus.</p>
			                <p>Pellentesque in est aliquet, fringilla lorem a...</p>
			            </li>
			        </ul>
			    </Carousel>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
