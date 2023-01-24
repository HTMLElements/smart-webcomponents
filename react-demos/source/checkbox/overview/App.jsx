import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.checkbox = React.createRef();
		this.checkbox2 = React.createRef();
	}

	init() {

		// Your code here.
	}


	componentDidMount() {
		this.checkbox.current.nativeElement.setAttribute('focus', '');
		this.checkbox2.current.nativeElement.setAttribute('focus', '');
	}

	render() {
		return (
			<div>
				<section id="check-box">
					<div>
						<p>Checkboxes allow the user to select multiple options from a set.</p>
						<br />
						<p>If you have multiple options appearing in a list, you can preserve space
			                by using checkboxes instead of on/off switches.</p>
						<br />
						<p>If you have a single option, avoid using a checkbox and use an on/off
			                switch instead.</p>
						<br />
					</div>
					<br />
					<div>
						<div className="check-box-container-light">
							<CheckBox checked></CheckBox>
							<CheckBox ></CheckBox>
						</div>
					</div>
				</section>
				<br />
				<section id="check-box-light">
					<div>
						<div className="check-box-table-light">
							<table>
								<tbody>
									<tr>
										<td>
											<p></p>
										</td>
										<td>
											<p>hover</p>
										</td>
										<td>
											<p>focused</p>
										</td>
										<td>
											<p>pressed</p>
										</td>
										<td>
											<p>disabled</p>
										</td>
									</tr>
									<tr>
										<td colspan="5">
											<p>On</p>
										</td>
									</tr>
									<tr>
										<td>
											<p></p>
										</td>
										<td>
											<CheckBox hover checked></CheckBox>
										</td>
										<td>
											<CheckBox ref={this.checkbox} checked></CheckBox>
										</td>
										<td>
											<CheckBox active checked></CheckBox>
										</td>
										<td>
											<CheckBox checked disabled></CheckBox>
										</td>
									</tr>
									<tr>
										<td colspan="5">
											<p>Off</p>
										</td>
									</tr>
									<tr>
										<td>
											<p></p>
										</td>
										<td>
											<CheckBox hover></CheckBox>
										</td>
										<td>
											<CheckBox ref={this.checkbox2}></CheckBox>
										</td>
										<td>
											<CheckBox active></CheckBox>
										</td>
										<td>
											<CheckBox disabled></CheckBox>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</section>
			</div >
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
