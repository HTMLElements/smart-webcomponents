import React from "react";
import ReactDOM from "react-dom";
import { Input } from 'smart-webcomponents-react/input';
import { MultiComboInput } from 'smart-webcomponents-react/multicomboinput';
import { Editor } from 'smart-webcomponents-react/editor';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.editor = React.createRef();
		this.input = React.createRef();
		this.input2 = React.createRef();
		this.input3 = React.createRef();
		this.multicomboinput = React.createRef();
		this.multicomboinput2 = React.createRef();
		this.multicomboinput3 = React.createRef();
	}

	tags = ['a', 'div', 'img', 'li', 'p', 'ul', 'span', 'table', 'tbody', 'td', 'tr', 'h4'];

	attributes = ['class', 'href', 'style', 'src'];

	styleAttributes = ['background-color', 'float'];

	inputProps = {
		dropDownButtonPosition: 'right',
		readonly: true,
		dataSource: [{
			label: 'Black List',
			value: 'blackList'
		},
		{
			label: 'White List',
			value: 'whiteList'
		}]
	};

	initialValue = `
		<div class="section">
		<div>
			<h2 style="text-align: center;">Camels</h2>
			<p style="background-color: floralwhite;">A camel is an even-toed ungulate in the genus Camelus that bears distinctive fatty deposits known as
				"humps"
				on its back. Camels have long been domesticated and, as livestock, they provide food (milk and meat)
				and
				textiles (fiber and felt from hair). Camels are working animals especially suited to their desert
				habitat
				and are a vital means of transport for passengers and cargo. There are three surviving species of
				camel.
				The
				one-humped dromedary makes up 94% of the world's camel population, and the two-humped Bactrian camel
				makes
				up 6%. The Wild Bactrian camel is a separate species and is now critically endangered.

				The word camel is also used informally in a wider sense, where the more correct term is "camelid",
				to
				include all seven species of the family Camelidae: the true camels (the above three species), along
				with
				the
				"New World" camelids: the llama, the alpaca, the guanaco, and the vicuña. The word itself is derived
				via
				Latin: camelus and Greek: κάμηλος (kamēlos) from Hebrew, Arabic or Phoenician: gāmāl.</p>

				<h4>Three types of camels:</h4>
				<ul>
					<li>Bactrian camel</li>
					<li>Dromedary / Arabian camel</li>
					<li>Wild Bactrian camel</li>
				</ul>

				<table>
				<thead>
					<tr>
						<th>Image</th>
						<th>Common name</th>
						<th>Scientific name</th>
						<th>Distribution
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<img src="./../../../src/images/bactrial-camel.min.jpg" width="120" height="95" />
						</td>
						<td>Bactrian camel</td>
						<td><i>Camelus bactrianus</i></td>
						<td>domesticated; Central Asia, including the
							historical region of Bactria.
						</td>
					</tr>
					<tr>
						<td>
							<img src="./../../../src/images/arabian-camel.min.jpg" width="120" height="93" />
						</td>
						<td>
							Dromedary / Arabian camel
						</td>
						<td><i>Camelus dromedarius</i></td>
						<td>domesticated; the Middle East, Sahara Desert and Afghanistan; introduced to Australia </td>
					</tr>
					<tr>
						<td><img src="./../../../src/images/wild-bactrian-camel.min.jpg" width="120" height="90" /></td>
						<td>Wild Bactrian camel</td>
						<td><i>Camelus ferus</i></td>
						<td>Remote areas of northwest China and Mongolia </td>
					</tr>
				</tbody>
			</table>

				<p>
					<a href="https://en.wikipedia.org/wiki/Camel">You can read more about it here</a>
				</p>
		</div>
		<img src="./../../../src/images/travel/1.jpg"></img>
		</div>`;

	contentFiltering = {
		tags: this.tags,
		tagFilterMode: 'blackList',
		attributes: this.attributes,
		attributeFilterMode: 'whiteList',
		styleAttributes: this.styleAttributes,
		styleAttributeFilterMode: 'blackList'
	}

	tagFilterModeSettings = Object.assign({
		value: 'Black List'
	}, this.inputProps);

	attributeFilterModeSettings = Object.assign({
		value: 'White List'
	}, this.inputProps);

	styleAttributeFilterModeSettings = Object.assign({
		value: 'Black List'
	}, this.inputProps);

	tagsInputSettings = {
		dropDownButtonPosition: 'right',
		dataSource: this.tags,
		value: this.tags.toString()
	};

	attributesInputSettings = {
		dropDownButtonPosition: 'right',
		dataSource: this.attributes,
		value: this.attributes.toString()
	};

	styleAttributesSettings = {
		dropDownButtonPosition: 'right',
		dataSource: this.styleAttributes,
		value: this.styleAttributes.toString()
	};

	init() {
		const that = this,
			editor = that.editor.current,
			tagFilterMode = that.input.current,
			attributeFilterMode = that.input2.current,
			styleAttributeFilterMode = that.input3.current,
			tags = that.multicomboinput.current,
			attributes = that.multicomboinput2.current,
			styleAttributes = that.multicomboinput3.current;

		document.querySelector('.options').addEventListener('change', function () {
			editor.contentFiltering = {
				tags: tags.value.split(','),
				tagFilterMode: that.inputProps.dataSource.find(i => i.label === tagFilterMode.value).value,
				attributes: attributes.value.split(','),
				attributeFilterMode: that.inputProps.dataSource.find(i => i.label === attributeFilterMode.value).value,
				styleAttributes: styleAttributes.value.split(','),
				styleAttributeFilterMode: that.inputProps.dataSource.find(i => i.label === styleAttributeFilterMode.value).value
			};
			editor.value = that.initialValue;
		});
	};

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Editor ref={this.editor} id="editor" value={this.initialValue} contentFiltering={this.contentFiltering}></Editor>
				<div className="options">
					<div className="description">
						<h4>Content Filtering</h4>
						<p><b>Smart.Editor</b> allows to filter out elements, element attributes or
							element style attributes via it's <b>contentFiltering</b> property.</p>
						<p>Making changes to the editor below will automatically refresh the content
							of the Editor based on the new settings.</p>
					</div>
					<div className="option">
						<h4>Tag Filter Settings:</h4>
						<Input ref={this.input} id="tagFilterMode" {...this.tagFilterModeSettings}></Input>
						<MultiComboInput ref={this.multicomboinput} id="tags" {...this.tagsInputSettings}></MultiComboInput>
					</div>
					<div className="option">
						<h4>Attribute Filter Settings:</h4>
						<Input ref={this.input2} id="attributeFilterMode" {...this.attributeFilterModeSettings}></Input>
						<MultiComboInput ref={this.multicomboinput2} id="attributes" {...this.attributesInputSettings}></MultiComboInput>
					</div>
					<div className="option">
						<h4>Style Attribute Filter Settings:</h4>
						<Input ref={this.input3} id="styleAttributeFilterMode" {...this.styleAttributeFilterModeSettings}></Input>
						<MultiComboInput ref={this.multicomboinput3} id="styleAttributes" {...this.styleAttributesSettings}></MultiComboInput>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
