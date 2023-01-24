import React from "react";
import ReactDOM from "react-dom";
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Splitter id="splitter" liveResize>
			        <SplitterItem id="item0">
			            <p>The tiger (Panthera tigris) is the largest cat species, most recognizable
			                for its pattern of dark vertical stripes on reddish-orange fur with a lighter
			                underside.</p>
			        </SplitterItem>
			        <SplitterItem id="item1">
			             <h2>BENGAL TIGER</h2>
			            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tiger_in_Ranthambhore.jpg/220px-Tiger_in_Ranthambhore.jpg"
			            />
			            <p>The Bengal tiger's coat is yellow to light orange, with stripes ranging
			                from dark brown to black; the belly and the interior parts of the limbs
			                are white, and the tail is orange with black rings.</p>
			            <p>Males have an average total length of 270 to 310 cm (110 to 120 in) including
			                the tail, while females measure 240 to 265 cm (94 to 104 in) on average.
			                The tail is typically 85 to 110 cm</p>
			        </SplitterItem>
			    </Splitter>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
