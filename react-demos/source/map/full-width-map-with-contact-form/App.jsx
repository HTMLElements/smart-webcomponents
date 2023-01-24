import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'smart-webcomponents-react/button';
import { Input} from 'smart-webcomponents-react/input';
import { Map } from 'smart-webcomponents-react/map';
import { TextArea} from 'smart-webcomponents-react/textarea';

class App extends React.Component {

	mapType = "roadmap";
	apiKey = "";
	query = "miami";


	componentDidMount() {
	
	}

	render() {
		return (
			<div>
			    <div className="demo-description">
			         <h1>Full Width Map With a Contact Form Demo</h1>
			        <div>For the following demo we show our "Map" component set up in full-width
			            of the parent component including other of our elements such as: "Input",
			            "smart-text-area" and "Button".</div>
			    </div>
			    <div className="wrapper">
			         <h2>Contact us</h2>
			        <div className="container">
			            <div className="map-container">
			                <Map ref="map" query={this.query} apiKey={this.apiKey}
			                mapType={this.mapType}></Map>
			            </div>
			            <div className="form-container">
			                <form action="">
			                    <div className="form-inputs">
			                        <div className="form-col">
			                            <div className="form-row">
			                                <Input ref="input" placeholder="Your name" className="underlined"></Input>
			                            </div>
			                            <div className="form-row">
			                                <Input ref="input2" placeholder="Your email" className="underlined"></Input>
			                            </div>
			                            <div className="form-row">
			                                <Input ref="input3" placeholder="Subject" className="underlined"></Input>
			                            </div>
			                        </div>
			                        <div className="form-textarea">
			                            <TextArea className="underlined" placeholder="Your message" rows="10"
			                            cols="20" auto-expand></TextArea>
			                        </div>
			                    </div>
			                    <div className="form-button">
			                        <Button ref="button">Send message</Button>
			                    </div>
			                </form>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
