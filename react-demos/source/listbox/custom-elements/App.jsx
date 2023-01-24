import React from "react";
import ReactDOM from "react-dom";
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';
import { Slider } from 'smart-webcomponents-react/slider';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';
import { textChangeRangeIsUnchanged } from "typescript";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.listbox = React.createRef();
	}

	handleRendered() {
		const that = this;
		const listBoxLight = that.listbox.current;

		let listBoxLightSecondaryAction = listBoxLight.nativeElement.getElementsByClassName('secondLine');

		const sliderControl = function (event) {
			const slider = event.target;

			switch (slider.id) {
				case 'mediaSlider':
					slider.previousElementSibling.textContent = slider.value === slider.min ? 'volume_off' : 'volume_up';
					break;
				case 'alarmSlider':
					slider.previousElementSibling.textContent = slider.value === slider.min ? 'alarm_off' : 'alarm';
					break;
				case 'ringSlider':
					slider.previousElementSibling.textContent = slider.value === slider.min ? 'notifications_off' : 'notifications';
					break;
			}
		};

		// Light themed list box
		listBoxLightSecondaryAction[5].parentElement.classList.add('single-line');
		listBoxLightSecondaryAction[8].parentElement.classList.add('single-line');
		listBoxLightSecondaryAction[11].parentElement.classList.add('single-line');
		listBoxLightSecondaryAction[14].parentElement.classList.add('single-line');

		//Additional text
		listBoxLightSecondaryAction[7].textContent = 'Breeze';
		listBoxLightSecondaryAction[9].textContent = 'Notification';
		listBoxLightSecondaryAction[15].textContent = 'No apps can read notifications';

		ReactDOM.render(<SwitchButton />, listBoxLightSecondaryAction[5], function () {
			this.checked = true;
		});

		ReactDOM.render(<SwitchButton />, listBoxLightSecondaryAction[8]);

		ReactDOM.render(<SwitchButton />, listBoxLightSecondaryAction[11], function () {
			this.checked = true;
		});

		ReactDOM.render(<SwitchButton />, listBoxLightSecondaryAction[14], function () {
			this.checked = true;
		});

		ReactDOM.render(<Slider />, listBoxLightSecondaryAction[4], function () {
			this.nativeElement.id = 'ringSlider';
			this.value = this.max / 1.5;
			this.nativeElement.addEventListener('change', sliderControl);

			const icon = document.createElement('i');

			icon.classList.add('material-icons');
			icon.innerHTML = '&#xE7F4;';
			
			this.nativeElement.parentElement.insertBefore(icon, this.nativeElement);
		});
		
		ReactDOM.render(<Slider />, listBoxLightSecondaryAction[2], function () {
			this.nativeElement.id = 'mediaSlider';
			this.value = this.max / 2;
			this.nativeElement.addEventListener('change', sliderControl);
			
			const icon = document.createElement('i');
			
			icon.classList.add('material-icons');
			icon.innerHTML = '&#xE050;';
			
			this.nativeElement.parentElement.insertBefore(icon, this.nativeElement);
		});
		
		ReactDOM.render(<Slider />, listBoxLightSecondaryAction[3], function () {
			this.nativeElement.id = 'alarmSlider';
			this.value = this.max;
			this.nativeElement.addEventListener('change', sliderControl);
			
			const icon = document.createElement('i');
			
			icon.classList.add('material-icons');
			icon.innerHTML = '&#xE855;';
			
			this.nativeElement.parentElement.insertBefore(icon, this.nativeElement);
		});


	}

	init() {
		const that = this;
		const listBoxLight = that.listbox.current;

		const multiLineTemplate = document.createElement('template');

		multiLineTemplate.id = 'multiLineTemplate';
		multiLineTemplate.innerHTML = `
			<div className="templateContainer">
				<div className="firstLine">{{label}}</div>
				<div className="secondLine"></div>
			</div>
		`;

		document.body.appendChild(multiLineTemplate);

		listBoxLight.itemTemplate = multiLineTemplate.id;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="smart-demo-container">
					<div id="materialListBoxContainer">
						<section id="appearance">
							<div className="module">
								<ListBox ref={this.listbox} selectionMode="none" id="listBoxLight" onReady={this.handleRendered.bind(this)}>
									<ListItemsGroup label="Sound">
										<ListItem>Audio settings</ListItem>
										<ListItem>Accessory settings</ListItem>
										<ListItem readonly>Media volume</ListItem>
										<ListItem readonly>Alarm volume</ListItem>
										<ListItem readonly>Ring volume</ListItem>
										<ListItem>Also vibrate for calls</ListItem>
										<ListItem>Do not disturb</ListItem>
										<ListItem>Phone ringtone</ListItem>
										<ListItem>Increasing ringtone</ListItem>
										<ListItem>Notification sound</ListItem>
										<ListItem>Other sounds</ListItem>
									</ListItemsGroup>
									<ListItemsGroup label="Notification">
										<ListItem>Notification light</ListItem>
										<ListItem>When device is locked</ListItem>
										<ListItem>App notifications</ListItem>
										<ListItem>Keep notifications on lock screen</ListItem>
									</ListItemsGroup>
									<ListItemsGroup label="Advanced">
										<ListItem>Notification access</ListItem>
										<ListItem>Do not disturb access</ListItem>
									</ListItemsGroup>
								</ListBox>
								<p></p>
							</div>
						</section>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
