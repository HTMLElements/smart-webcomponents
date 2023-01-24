import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Card } from 'smart-webcomponents-react/card';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <header>
			        <div className="logo">Company name</div>
			        <div className="button-group">
			            <Button  className="flat">FEATURES</Button>
			            <Button  className="flat">ENTERPRICE</Button>
			            <Button  className="flat">SUPPORT</Button>
			            <Button  id="login" className="primary outlined">LOGIN</Button>
			        </div>
			    </header>
			    <section className="user">
			        <div className="container">
			             <h1 className="headline">Pricing</h1>
			            <p className="content">Quickly build an effective pricing table for your potential customers
			                with this layout. It's built with default Material-UI components with little
			                customization.</p>
			        </div>
			    </section>
			    <section className="articles">
			        <div className="container">
			            <Card  id="free">
			                <div className="thumb-section">
			                     <h2>Free</h2>
			                </div>
			                <div className="content">
			                     <h3>$0<sub>/mo</sub></h3>
			                    <p>10 users included</p>
			                    <p>2 GB of storage</p>
			                    <p>Help center access</p>
			                    <p>Email support</p>
			                    <Button  className="primary outlined">SIGN UP FOR FREE</Button>
			                </div>
			            </Card>
			            <Card  className="popular" id="pro">
			                <div className="thumb-section">
			                     <h2>Pro</h2>
			                    <p className="subheadline">Most popular</p>
			                </div>
			                <div className="content">
			                     <h3>$15<sub>/mo</sub></h3>
			                    <p>20 users included</p>
			                    <p>10 GB of storage</p>
			                    <p>Help center access</p>
			                    <p>Priority email support</p>
			                    <Button  className="primary">GET STARTED</Button>
			                </div>
			            </Card>
			            <Card  id="enterprice">
			                <div className="thumb-section">
			                     <h2>Enterprise</h2>
			                </div>
			                <div className="content">
			                     <h3>$30<sub>/mo</sub></h3>
			                    <p>50 users included</p>
			                    <p>30 GB of storage</p>
			                    <p>Help center access</p>
			                    <p>Phone & email support</p>
			                    <Button  className="primary outlined">CONTACT US</Button>
			                </div>
			            </Card>
			        </div>
			    </section>
			    <footer>
			        <div className="container">
			            <ul>Company
			                <li>Team</li>
			                <li>History</li>
			                <li>Contact us</li>
			                <li>Locations</li>
			            </ul>
			            <ul>Features
			                <li>Cool stuff</li>
			                <li>Random feature</li>
			                <li>Team feature</li>
			                <li>Developer stuff</li>
			                <li>Another one</li>
			            </ul>
			            <ul>Resources
			                <li>Resource</li>
			                <li>Resource name</li>
			                <li>Another resource</li>
			                <li>Final resource</li>
			            </ul>
			            <ul>Legal
			                <li>Privacy policy</li>
			                <li>Terms of use</li>
			            </ul>
			        </div>
			    </footer>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
