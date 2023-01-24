import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">To add spacing between stacked items, use 'spacing' or 'spacing-#' where
			        # is from 2 to 6.</div>
			    <div className="smart-stack-layout spacing">
			        <Button ref="button" className="primary item">OK</Button>
			        <Button ref="button2" className="secondary item">Cancel</Button>
			    </div>
			    <label>Stack Layout Spacing - 1</label>
			    <br/>
			    <div className="smart-stack-layout spacing-2">
			        <Button ref="button3" className="primary item">OK</Button>
			        <Button ref="button4" className="secondary item">Cancel</Button>
			    </div>
			    <label>Stack Layout Spacing - 2</label>
			    <br/>
			    <div className="smart-stack-layout spacing-3">
			        <Button ref="button5" className="primary item">OK</Button>
			        <Button ref="button6" className="secondary item">Cancel</Button>
			    </div>
			    <label>Stack Layout Spacing - 3</label>
			    <br/>
			    <div className="smart-stack-layout spacing-4">
			        <Button ref="button7" className="primary item">OK</Button>
			        <Button ref="button8" className="secondary item">Cancel</Button>
			    </div>
			    <label>Stack Layout Spacing - 4</label>
			    <br/>
			    <div className="smart-stack-layout spacing-5">
			        <Button ref="button9" className="primary item">OK</Button>
			        <Button ref="button10" className="secondary item">Cancel</Button>
			    </div>
			    <label>Stack Layout Spacing - 5</label>
			    <br/>
			    <div className="smart-stack-layout spacing-6">
			        <Button ref="button11" className="primary item">OK</Button>
			        <Button ref="button12" className="secondary item">Cancel</Button>
			    </div>
			    <label>Stack Layout Spacing - 6</label>
			    <br/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
