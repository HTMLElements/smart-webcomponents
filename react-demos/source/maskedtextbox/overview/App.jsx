import React from "react";
import ReactDOM from "react-dom";
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';

class App extends React.Component {

	init() {
	
	    // Your code here
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="smart-demo-container">
			        <section>
			            <div>
			                 <h2>Masked Text fields use a mask to distinguish between proper and improper user input.</h2>
			                <div className="module">
			                    <p>Masked Text fields typically reside in forms but can appear in other places,
			                        like dialog boxes and search.</p>
			                </div>
			            </div>
			        </section>
			        <section id="masked-text-box-layout">
			            <div>
			                <div className="module">
			                    <p></p>
			                </div>
			                <div className="module">
			                    <div className="light-theme">
			                        <MaskedTextBox  hint="Idle & empty" mask="###-###-##-##"></MaskedTextBox>
			                        <br/>
			                        <label>Idle & empty</label>
			                        <br/>
			                        <br/>
			                        <MaskedTextBox  hint="Press" mask="###-###-##-##"
			                        placeholder="Placeholder"></MaskedTextBox>
			                        <br/>
			                        <label>Placeholder</label>
			                        <br/>
			                        <br/>
			                        <MaskedTextBox  hint="Focus" mask="###-###-##-##"
			                        auto-show-mask></MaskedTextBox>
			                        <br/>
			                        <label>Auto-show mask</label>
			                        <br/>
			                        <br/>
			                        <MaskedTextBox  hint="Disabled" mask="###-###-##-##"
			                        disabled></MaskedTextBox>
			                        <br/>
			                        <label>Disabled</label>
			                        <br/>
			                        <br/>
			                        <br/>
			                    </div>
			                </div>
			            </div>
			            <div>
			                <div className="module">
			                    <p>Input text can be grouped in different ways, with special characters added
			                        in appropriate places, such as hyphens added to a phone number. Once the
			                        first special character is reached, the cursor automatically jumps to the
			                        next group.</p>
			                </div>
			                <div className="module">
			                    <div className="light-theme">
			                        <MaskedTextBox  hint="" value="6503036565" mask="(###) ### - ####"></MaskedTextBox>
			                    </div>
			                    <p>Input text grouped and formatted for a phone number</p>
			                </div>
			                <div className="module">
			                    <div className="light-theme">
			                        <MaskedTextBox  hint="" value="4147968713856921" mask="#### - #### - #### - ####"></MaskedTextBox>
			                    </div>
			                    <p>Input text grouped and formatted for a credit card number</p>
			                </div>
			            </div>
			        </section>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
