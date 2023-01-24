import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Toast } from 'smart-webcomponents-react/toast';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.templateContainer = React.createRef();
	}

	componentDidMount() {
		this.templateContainer.current.innerHTML = `
			<template id="toastTemplate6"> <span className="message Toast-item-content">{{message}}</span>
			<Button 
			className="raised primary">RETRY</Button>
			</template>
			<template id="notificationMessagingTemplate">
				<div className="message-template">
					<div className="message-header"> <i className="material-icons icon">&#xE0B7;</i>  <span className="message"> Messages </span> 
						<i
						className="material-icons dot">&#xE061;</i> <span><i className="material-icons arrow">&#xE313;</i></span>
					</div>
					<div className="message-content">
						<h3>Justin Rhyss</h3>
			<span className="Toast-item-content">{{message}}</span>
					</div>
					<img src="https://www.htmlelements.com/demos/images/notifications-icon2.png" className="profile-picture">
					<div className="message-footer smart-hidden">
						<Button >REPLY</Button>
						<Button >ARCHIVE</Button>
					</div>
				</div>
			</template>
			<template id="toastTemplate3"> <span className="message Toast-item-content">{{message}}</span> 
			<Button 
			className="primary flat">UNDO</Button>
			</template>
			<template id="toastTemplate4"> <span className="message Toast-item-content">{{message}}</span>
			<Button 
			className="success flat">UNDO</Button>
			</template>
			<template id="toastTemplate5"> <span className="message Toast-item-content">{{message}}</span>
			<Button 
			className="success raised">UNDO</Button>
			</template>
		`;
	}

	render() {
		return (
			<div>
				<div ref={this.templateContainer}></div>
				<div className="smart-demo-container">
					<section>
						<h2>smartToast</h2>
						<div>
							<h2>smartToast is used for system messaging.</h2>
							<div className="module">
								<p>smartToast represents an element which displays an unobtrusive notification
								to the user. Multiple instances of the same toast can be shown at the same
								time. In case with multiple instances, they are stacked vertically into
			                        special containers positioned:</p>
								<ul>
									<li>top-left</li>
									<li>top-right</li>
									<li>bottom-left</li>
									<li>bottom-right</li>
									<li>center(in modal mode)</li>
									<li>custom container, defined by the user</li>
								</ul>
							</div>
							<div className="module">
								<h3>Toast components</h3>
								<p>Header area
			                        <br />Content area
			                        <br />Icon
			                        <br />
								</p>
								<h3>Behavior</h3>
								<p>Open
			                        <br />Close</p>
							</div>
						</div>
					</section>
					<nav>
						<h2>Contents</h2>
						<ul>
							<li><a href="#toast-usage">Usage</a>
							</li>
							<li><a href="#toast-usage">Snackbar</a>
							</li>
							<li><a href="#toast-notification">Notification</a>
							</li>
						</ul>
					</nav>
					<section id="toast-usage">
						<h2>Usage</h2>
						<p><strong>As a snackbar</strong>
						</p>
						<p>Snackbars appear above most elements on screen, and they are equal in
						elevation to the floating action button. However, they are lower in elevation
			                than dialogs, bottom sheets, and navigation drawers.</p>
						<p>Snackbars should contain a single line of text directly related to the
						operation performed. They may contain a text action. They cannot contain
			                icons.</p>
					</section>
					<section id="toast-usage2">
						<div className="module ">
							<p><strong>Very short text strings</strong>
							</p>
							<p>Snackbars should contain a single line of text directly related to the
							operation performed. They may contain a text action. They cannot contain
			                    icons.</p>
						</div>
						<div className="module">
							<div id="toastContainer1" className="toast-container"></div>
							<Toast  appendTo="toastContainer1" autoOpen className="snackbar">Message sent</Toast>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
