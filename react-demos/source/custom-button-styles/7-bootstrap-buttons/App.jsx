import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	init() {
	
	
	    'use strict';
	    let submitButtons = document.querySelectorAll('smart-button.submit');
	    for (let i = 0; i < submitButtons.length; i++) {
	        let submitButton = submitButtons[i];
	        submitButton.addEventListener('click', function() {
	            if (submitButton.classList.contains('sending')) {
	                submitButton.classList.remove('sending');
	            } else {
	                submitButton.classList.add('sending');
	            }
	            setTimeout(function() {
	                submitButton.classList.remove('sending');
	            }, 4500);
	        });
	    }
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="button-demo bootstrap-buttons">
			        <label>Bootstrap Buttons</label>
			        <div className="demo-buttons-group">
			            <div className="row ">
			                <div className="col-md-2 col-sm-4">
			                    <form>
			                        <Button ref="button" className="submit success Button-element btn-block">Click Me</Button>
			                    </form>
			                    <form className="mt-4">
			                        <Button ref="button2" className="submit primary Button-element btn-block">Click Me</Button>
			                    </form>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
