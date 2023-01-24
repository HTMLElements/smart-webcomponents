import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Toast } from 'smart-webcomponents-react/toast';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.toast = React.createRef();
		this.dropdownlist = React.createRef();
		this.blink = React.createRef();
	}

	handleOpen(event) {
		const type = this.dropdownlist.current,
			toast = this.toast.current;

		toast.open();

		if (type.selectedValues.length > 0 && type.selectedValues[0] !== 'null') {
			toast.value = type.selectedValues[0];
		}
		else {
			toast.value = 'Toast !';
		}
	}

	handleCloseLast() {
		this.toast.current.closeLast();
	}

	handleCloseAll() {
		this.toast.current.closeAll();
	}

	handlePosition(position) {
		this.toast.current.position = position;
	}

	handleType(event) {
		this.toast.current.type = this.dropdownlist.current.selectedValues[0] === 'null' ? null : this.dropdownlist.current.selectedValues[0];
	}

	handleAutoClose(event) {
		this.toast.current.autoClose = event.detail.value;
	}

	handleBlink(event) {
		this.blink.current.checked ? this.toast.current.nativeElement.classList.add('blink') : this.toast.current.nativeElement.classList.remove('blink');
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Toast ref={this.toast} position="top-left" autoOpen showCloseButton type={null}>Toast !</Toast>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<Button onClick={this.handleOpen.bind(this)} id="openButton">Open</Button>
						<br />
						<Button onClick={this.handleCloseLast.bind(this)} id="closeLastButton">CloseLast</Button>
						<br />
						<Button onClick={this.handleCloseAll.bind(this)} id="closeAllButton">CloseAll</Button>
						<br />
						<br />Position:
			            <br />
						<RadioButton onChange={this.handlePosition.bind(this, 'top-left')} id="toastTopLeft" groupName="toastPosition"
							checked>Top-left</RadioButton>
						<br />
						<RadioButton onChange={this.handlePosition.bind(this, 'top-right')} id="toastTopRight" groupName="toastPosition">Top-right</RadioButton>
						<br />
						<RadioButton onChange={this.handlePosition.bind(this, 'bottom-left')} id="toastBottomLeft" groupName="toastPosition">Bottom-left</RadioButton>
						<br />
						<RadioButton onChange={this.handlePosition.bind(this, 'bottom-right')} id="toastBottomRight" groupName="toastPosition">Bottom-right</RadioButton>
						<hr />Type:
			            <br />
						<DropDownList ref={this.dropdownlist} onChange={this.handleType.bind(this)} id="type" dataSource={["info", "warning", "success", "error", "mail", "time", "null"]}></DropDownList>
						<hr />
						<CheckBox onChange={this.handleAutoClose.bind(this)} id="autoClose">Auto close</CheckBox>
						<br />
						<CheckBox onChange={this.handleBlink.bind(this)} ref={this.blink} id="blink">Blink</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
