import React from "react";
import ReactDOM from "react-dom";
import { Editor } from 'smart-webcomponents-react/editor';

class App extends React.Component {

	sanitized = true;

	value = `
	Cross-Site Scripting (XSS) attacks are a type of injection, 
	in which malicious scripts are injected into otherwise benign and trusted websites. 
	XSS attacks occur when an attacker uses a web application to send malicious code, 
	generally in the form of a browser side script, to a different end user. 
	Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses 
	input from a user within the output it generates without validating or encoding it.
	The following is an attempt for a XSS attack:
		<script></script>
		<IMG """><SCRIPT>alert(" XSS")</SCRIPT>"\>
		<IMG SRC=/ onerror="alert(String.fromCharCode(88,83,83))"></img>
		\<a onmouseover=alert(document.cookie)\>xxs link\</a\>
			<IMG SRC=\`javascript: alert("RSnake says, 'XSS'")\`>
		<IMG SRC=JaVaScRiPt:alert('XSS')>
		<svg/onload='+/" /+/onmouseover=1/+/[*/[]/+alert(1)//'>
		<SCRIPT SRC=http://xss.rocks/xss.js></SCRIPT>
		<IMG src=javascript:alert(&quot;XSS&quot;)>`;

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<Editor id="editor" sanitized={this.sanitized} value={this.value}>
					<div>
						<h2>What is Lorem Ipsum?</h2>
						<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting
			                industry. Lorem Ipsum has been the industry's standard dummy text ever
			                since the 1500s, when an unknown printer took a galley of type and scrambled
			                it to make a type specimen book. It has survived not only five centuries,
			                but also the leap into electronic typesetting, remaining essentially unchanged.
			                It was popularised in the 1960s with the release of Letraset sheets containing
			                Lorem Ipsum passages, and more recently with desktop publishing software
			                like Aldus PageMaker including versions of Lorem Ipsum.
							</p>
					</div>
				</Editor>
				<div className="options">
					<div className="description">
						<p>The following demo illustrates an attempt to inject XSS into the Editor's
			                content. However the <b>sanitized</b> property is enabled and does not allow
			                scripts and javascript functions to be executed from inside the content
			                of the element.</p>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
