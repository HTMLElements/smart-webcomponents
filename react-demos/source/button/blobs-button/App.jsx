import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="button-demo blobs-button">
			        <label>Blobs button</label>
			        <div className="demo-buttons-group">
			            <Button  className="blob-btn">Blob Button <span className="blob-btn__inner">
			
			                    <span className="blob-btn__blobs">
			
			                        <span className="blob-btn__blob"></span>
 <span className="blob-btn__blob"></span>
			                <span
			                className="blob-btn__blob"></span> <span className="blob-btn__blob"></span>
</span>
			                    </span>
			            </Button>
			            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-blobs-button">
			                <defs>
			                    <filter id="goo">
			                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
			                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
			                        result="goo"></feColorMatrix>
			                        <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
			                    </filter>
			                </defs>
			            </svg>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
