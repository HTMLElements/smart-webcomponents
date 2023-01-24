import React from "react";
import ReactDOM from "react-dom";
import { Array } from 'smart-webcomponents-react/array';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';
import { ComboBox } from 'smart-webcomponents-react/combobox';
import { Button, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Led } from 'smart-webcomponents-react/led';
import { ListBox } from 'smart-webcomponents-react/listbox';
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Gauge } from 'smart-webcomponents-react/gauge';
import { Tank } from 'smart-webcomponents-react/tank';
import { Slider } from 'smart-webcomponents-react/slider';
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.array = React.createRef();
	}

	elementTemplateDropDownList(element, dimensions) {
		const that = this.array.current;

		ReactDOM.render(<DropDownList
			dataSource={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']}
			selectionMode='one'
			dropDownAppendTo='body'></DropDownList>, new DocumentFragment(), function () {

				this.nativeElement.style.width = that.elementWidth + 'px';
				this.nativeElement.style.height = that.elementHeight + 'px';

				element.appendChild(this.nativeElement);
			})
	}

	changeProperty1(property, value, widgets) {
		for (let i = 0; i < widgets.length; i++) {
			const currentCustomElement = widgets[i].children[0];

			if (property === 'width' || property === 'height') {
				currentCustomElement.style[property] = value + 'px';
			}
			else if (property === 'disabled') {
				currentCustomElement.disabled = value;
			}
		}
	}

	getElementValue1(element, dimensions) {
		const customElement = element.children[0];

		return customElement.selectedValues[0];
	}

	setElementValue1(value, element, dimensions) {
		const customElement = element.children[0];

		customElement.selectedValues = [value];
	}

	elementTemplateComboBox(element, dimensions) {
		const that = this.array.current;

		ReactDOM.render(<ComboBox
			dataSource={['Bulgaria', 'France', 'UK', 'USA', 'Other country']}
			selectionMode='one'
			dropDownAppendTo='body'></ComboBox>, new DocumentFragment(), function () {

				this.nativeElement.style.width = that.elementWidth + 'px';
				this.nativeElement.style.height = that.elementHeight + 'px';

				element.appendChild(this.nativeElement);
			})
	}

	elementTemplateToggleButton(element, dimensions) {
		const that = this.array.current;

		ReactDOM.render(<ToggleButton></ToggleButton>, new DocumentFragment(), function () {
			this.nativeElement.style.width = that.elementWidth + 'px';
			this.nativeElement.style.height = that.elementHeight + 'px';

			element.appendChild(this.nativeElement);
		})
	}

	getElementValue2(element, dimensions) {
		const customElement = element.children[0];

		return customElement.checked;
	}

	setElementValue2(value, element, dimensions) {
		const customElement = element.children[0];

		if (value.toString() === 'true') {
			customElement.checked = true;
		}
		else {
			customElement.checked = false;
		}
	}

	elementTemplateLed(element, dimensions) {
		const that = this.array.current;

		ReactDOM.render(<Led></Led>, new DocumentFragment(), function () {
			this.nativeElement.style.width = that.elementWidth + 'px';
			this.nativeElement.style.height = that.elementHeight + 'px';

			element.appendChild(this.nativeElement);
		})
	}

	elementTemplatePowerButton(element, dimensions) {
		const that = this.array.current;

		ReactDOM.render(<PowerButton></PowerButton>, new DocumentFragment(), function () {
			this.nativeElement.style.width = that.elementWidth + 'px';
			this.nativeElement.style.height = that.elementHeight + 'px';

			element.appendChild(this.nativeElement);
		})
	}

	elementTemplateListBox(element, dimensions) {
		const that = this.array.current;

		ReactDOM.render(<ListBox
			dataSource={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']}
			selectionMode='one'></ListBox>, new DocumentFragment(), function () {
				this.nativeElement.style.width = that.elementWidth + 'px';
				this.nativeElement.style.height = that.elementHeight + 'px';

				element.appendChild(this.nativeElement);
			})
	}

	elementTemplateProgressBar(element, dimensions) {
		const that = this.array.current;

		ReactDOM.render(<ProgressBar></ProgressBar>, new DocumentFragment(), function () {
			this.nativeElement.style.width = that.elementWidth + 'px';
			this.nativeElement.style.height = that.elementHeight + 'px';

			element.appendChild(this.nativeElement);
		})
	}

	getElementValue3(element, dimensions) {
		const customElement = element.children[0];

		return customElement.value;
	}

	setElementValue3(value, element, dimensions) {
		const customElement = element.children[0];

		customElement.value = parseFloat(value);
	}

	elementTemplateCircularProgressBar(element, dimensions) {
		const that = this.array.current;

		ReactDOM.render(<CircularProgressBar></CircularProgressBar>, new DocumentFragment(), function () {
			this.nativeElement.style.width = that.elementWidth + 'px';
			this.nativeElement.style.height = that.elementHeight + 'px';

			element.appendChild(this.nativeElement);
		})
	}

	elementTemplateCheckBox(element, dimensions) {
		const that = this.array.current;

		ReactDOM.render(<CheckBox></CheckBox>, new DocumentFragment(), function () {
			this.nativeElement.style.width = that.elementWidth + 'px';
			this.nativeElement.style.height = that.elementHeight + 'px';

			element.appendChild(this.nativeElement);
		})
	}

	elementTemplateGauge(element, dimensions) {
		const that = this.array.current;

		ReactDOM.render(<Gauge
			analogDisplayType='fill'
			labelsVisibility='none'
			scalePosition='outside'></Gauge>, new DocumentFragment(), function () {
				this.nativeElement.style.width = that.elementWidth + 'px';
				this.nativeElement.style.height = that.elementHeight + 'px';

				element.appendChild(this.nativeElement);
			})
	}

	elementTemplateTank(element, dimensions) {
		const that = this.array.current;

		ReactDOM.render(<Tank></Tank>, new DocumentFragment(), function () {
			this.nativeElement.style.width = that.elementWidth + 'px';
			this.nativeElement.style.height = that.elementHeight + 'px';

			element.appendChild(this.nativeElement);
		})
	}

	elementTemplateSlider(element, dimensions) {
		const that = this.array.current;

		ReactDOM.render(<Slider
			labelsVisibility='none'
			showTooltip
			rangeSlider></Slider>, new DocumentFragment(), function () {
				this.nativeElement.style.width = that.elementWidth + 'px';
				this.nativeElement.style.height = that.elementHeight + 'px';

				element.appendChild(this.nativeElement);
			})
	}


	getElementValue4(element, dimensions) {
		const customElement = element.children[0];

		return customElement.values;
	}

	setElementValue4(result, element, dimensions) {
		const customElement = element.children[0];

		if (typeof result === 'string') {
			result = JSON.parse(result);
		}

		customElement.values = result;
	}

	elementTemplateDateTimePicker(element, dimensions) {
		const that = this.array.current;

		ReactDOM.render(<DateTimePicker
			formatString='d'
			calendarButton></DateTimePicker>, new DocumentFragment(), function () {
				this.nativeElement.style.width = that.elementWidth + 'px';
				this.nativeElement.style.height = that.elementHeight + 'px';

				element.appendChild(this.nativeElement);
			})
	}

	getElementValue5(element, dimensions) {
		const customElement = element.children[0];

		return customElement.value.toDate();
	}

	setElementValue5(value, element, dimensions) {
		const customElement = element.children[0];

		customElement.value = value;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demoContainer">
					<p>smartArray with DropDownList</p>
					<Array ref={this.array} id="dropDownListSmartArray"
						showIndexDisplay type="custom" value={["B", "D", "C"]} dimensions={1}
						rows={7} columns={1} elementWidth={200} elementHeight={30} customWidgetDefaultValue="A"
						elementTemplate={this.elementTemplateDropDownList.bind(this)} changeProperty={this.changeProperty1}
						getElementValue={this.getElementValue1} setElementValue={this.setElementValue1}></Array>
					<p>smartArray with ComboBox</p>
					<Array id="comboBoxSmartArray"
						showIndexDisplay type="custom" value={["France", "Bulgaria", "France", "USA"]}
						dimensions={1} rows={5} columns={1} elementWidth={200} elementHeight={30}
						customWidgetDefaultValue="Other country" elementTemplate={this.elementTemplateComboBox.bind(this)}
						changeProperty={this.changeProperty1} getElementValue={this.getElementValue1}
						setElementValue={this.setElementValue1}></Array>
					<p>smartArray with ToggleButton</p>
					<Array id="toggleButtonSmartArray"
						showIndexDisplay type="custom" value={[[false, true], [true, true]]}
						dimensions={2} rows={2} columns={2} elementWidth={50} elementHeight={35}
						customWidgetDefaultValue="false" elementTemplate={this.elementTemplateToggleButton.bind(this)}
						changeProperty={this.changeProperty1} getElementValue={this.getElementValue2}
						setElementValue={this.setElementValue2}></Array>
					<p>smartArray with Led</p>
					<Array id="ledButtonSmartArray" showIndexDisplay
						type="custom" value={[[false, true], [true, true]]} dimensions={2} rows={3}
						columns={3} elementWidth={20} elementHeight={20} customWidgetDefaultValue="false"
						elementTemplate={this.elementTemplateLed.bind(this)} changeProperty={this.changeProperty1}
						getElementValue={this.getElementValue2} setElementValue={this.setElementValue2}></Array>
					<p>smartArray with PowerButton</p>
					<Array id="powerButtonSmartArray"
						showIndexDisplay type="custom" value={[false, true, false, true]} dimensions={1}
						rows={1} columns={7} elementWidth={30} elementHeight={30} customWidgetDefaultValue="false"
						elementTemplate={this.elementTemplatePowerButton.bind(this)} changeProperty={this.changeProperty1}
						getElementValue={this.getElementValue2} setElementValue={this.setElementValue2}></Array>
				</div>
				<div className="demoContainer">
					<p>smartArray with ListBox</p>
					<Array id="listBoxSmartArray"
						showIndexDisplay type="custom" value={[["B", "D"], ["A", "E"]]} dimensions={2}
						rows={2} columns={3} elementWidth={120} elementHeight={100} customWidgetDefaultValue="A"
						elementTemplate={this.elementTemplateListBox.bind(this)} changeProperty={this.changeProperty1}
						getElementValue={this.getElementValue1} setElementValue={this.setElementValue1}></Array>
					<p>smartArray with ProgressBar</p>
					<Array id="progressBarSmartArray"
						showIndexDisplay type="custom" value={[20, 30, 10]} dimensions={1} rows={5}
						columns={1} elementWidth={180} elementHeight={30} customWidgetDefaultValue={0}
						elementTemplate={this.elementTemplateProgressBar.bind(this)} changeProperty={this.changeProperty1}
						getElementValue={this.getElementValue3} setElementValue={this.setElementValue3}></Array>
					<p>smartArray with CircularProgressBar</p>
					<Array id="circularProgressBarSmartArray"
						showIndexDisplay type="custom" value={[20, 30, 10]} dimensions={1} rows={1}
						columns={5} elementWidth={100} elementHeight={100} customWidgetDefaultValue={0}
						elementTemplate={this.elementTemplateCircularProgressBar.bind(this)} changeProperty={this.changeProperty1}
						getElementValue={this.getElementValue3} setElementValue={this.setElementValue3}></Array>
					<p>smartArray with CheckBox</p>
					<Array id="checkBoxSmartArray"
						showIndexDisplay type="custom" value={[[false, true], [true, true]]}
						dimensions={2} rows={4} columns={4} elementWidth={16} elementHeight={16}
						customWidgetDefaultValue="false" elementTemplate={this.elementTemplateCheckBox.bind(this)}
						changeProperty={this.changeProperty1} getElementValue={this.getElementValue2}
						setElementValue={this.setElementValue2}></Array>
					<p>smartArray with DateTimePicker</p>
					<Array id="dateTimePickerSmartArray"
						showIndexDisplay type="custom" value={[["new Date(2017, 10, 2)"], ["new Date(2012, 5, 11)"]]}
						dimensions={2} rows={2} columns={4} elementWidth={120} elementHeight={30}
						customWidgetDefaultValue="new Date(2017, 0, 1)" elementTemplate={this.elementTemplateDateTimePicker.bind(this)}
						changeProperty={this.changeProperty1} getElementValue={this.getElementValue5}
						setElementValue={this.setElementValue5}></Array>
				</div>
				<div className="demoContainer">
					<p>smartArray with Gauge</p>
					<Array id="gaugeSmartArray" showIndexDisplay
						type="custom" value={[[50, 1], [100, 12]]} dimensions={2} rows={2} columns={3}
						elementWidth={150} elementHeight={150} customWidgetDefaultValue={0}
						elementTemplate={this.elementTemplateGauge.bind(this)} changeProperty={this.changeProperty1}
						getElementValue={this.getElementValue3} setElementValue={this.setElementValue3}></Array>
					<p>smartArray with Slider</p>
					<Array id="sliderSmartArray" showIndexDisplay
						type="custom" value={[[[50, 90], [0, 10]], [[90, 100], [12, 12]]]} dimensions={2}
						rows={2} columns={3} elementWidth={200} elementHeight={60} customWidgetDefaultValue={[0, 100]}
						elementTemplate={this.elementTemplateSlider.bind(this)} changeProperty={this.changeProperty1}
						getRlementValue={this.getElementValue4} setElementValue={this.setElementValue4}></Array>
					<p>smartArray with Tank</p>
					<Array id="tankSmartArray" showIndexDisplay
						type="custom" value={[[50, 1], [100, 12]]} dimensions={2} rows={2} columns={3}
						elementWidth={150} elementHeight={100} customWidgetDefaultValue={0}
						elementTemplate={this.elementTemplateTank.bind(this)} changeProperty={this.changeProperty1}
						getElementValue={this.getElementValue3} setElementValue={this.setElementValue3}></Array>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
