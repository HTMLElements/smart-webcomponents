import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-horizontal-layout">
			        <div>
			            <label>Default Buttons</label>
			            <div className="demo-buttons-group">
			                <Button >Normal</Button>
			                <Button  className="raised">Raised</Button>
			                <Button  className="outlined">Outlined</Button>
			                <Button  className="flat">Flat</Button>
			                <Button  className="floating"><span className="button-demo-icon demo-icon demo-device-icon-phone-portrait demo-button-demo-icon"><i className="material-icons">&#xE53F;</i></span>
			                </Button>
			            </div>
			        </div>
			        <div>
			            <label>Primary Buttons</label>
			            <div className="demo-buttons-group">
			                <Button  className="primary">Normal</Button>
			                <Button  className="raised primary">Raised</Button>
			                <Button  className="outlined primary">Outlined</Button>
			                <Button  className="flat primary">Flat</Button>
			                <Button  className="floating primary"><span className="button-demo-icon demo-icon demo-device-icon-phone-portrait demo-button-demo-icon"><i className="material-icons">&#xE53F;</i></span>
			                </Button>
			            </div>
			        </div>
			        <div>
			            <label>Secondary Buttons</label>
			            <div className="demo-buttons-group">
			                <Button  className="secondary">Normal</Button>
			                <Button  className="raised secondary">Raised</Button>
			                <Button  className="outlined secondary">Outlined</Button>
			                <Button  className="flat secondary">Flat</Button>
			                <Button  className="floating secondary"><span className="button-demo-icon demo-icon demo-device-icon-phone-portrait demo-button-demo-icon"><i className="material-icons">&#xE53F;</i></span>
			                </Button>
			            </div>
			        </div>
			        <div>
			            <label>Success Buttons</label>
			            <div className="demo-buttons-group">
			                <Button  className="success">Normal</Button>
			                <Button  className="raised success">Raised</Button>
			                <Button  className="outlined success">Outlined</Button>
			                <Button  className="flat success">Flat</Button>
			                <Button  className="floating success"><span className="button-demo-icon demo-icon demo-device-icon-phone-portrait demo-button-demo-icon"><i className="material-icons">&#xE53F;</i></span>
			                </Button>
			            </div>
			        </div>
			        <div>
			            <label>Error Buttons</label>
			            <div className="demo-buttons-group">
			                <Button  className="error">Normal</Button>
			                <Button  className="raised error">Raised</Button>
			                <Button  className="outlined error">Outlined</Button>
			                <Button  className="flat error">Flat</Button>
			                <Button  className="floating error"><span className="button-demo-icon demo-icon demo-device-icon-phone-portrait demo-button-demo-icon"><i className="material-icons">&#xE53F;</i></span>
			                </Button>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
