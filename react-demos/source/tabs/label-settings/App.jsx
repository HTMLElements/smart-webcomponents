import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tabs = React.createRef();
	}

	handleTopChange() {
		this.tabs.current.tabPosition = 'top';
	}

	handleBottomChange() {
		this.tabs.current.tabPosition = 'bottom';
	}

	handleLeftChange() {
		this.tabs.current.tabPosition = 'left';
	}

	handleRightChange() {
		this.tabs.current.tabPosition = 'right';
	}

	handleHorizontalChange() {
		this.tabs.current.tabTextOrientation = 'horizontal';
	}

	handleVerticalChange() {
		this.tabs.current.tabTextOrientation = 'vertical';
	}

	handleClickChange() {
		this.tabs.current.selectionMode = 'click';
	}

	handleDblclickChange() {
		this.tabs.current.selectionMode = 'dblclick';
	}

	handleMouseenterChange() {
		this.tabs.current.selectionMode = 'mouseenter';
	}

	handleNoneChange() {
		this.tabs.current.selectionMode = 'none';
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tabs ref={this.tabs} id="tabs" className="demoTabs" selectedIndex={3} tabPosition="left"
					selectionMode="click" tabTextOrientation="vertical">
					<TabItem label="New York">
						The City of New York, usually known as either New York City (NYC), or simply New York (NY), is the most populous
						city in the United States.
					</TabItem>
					<TabItem label="Hong Kong">
						Hong Kong, officially the Hong Kong Special Administrative Region of the People's Republic of China (HKSAR), is
						a city and special administrative region of China in the eastern Pearl River Delta by the South China Sea.
					</TabItem>
					<TabItem label="Troyan">
						Troyan is a town remembering the name of Roman Emperor Trajan, in Lovech Province in central Bulgaria.
					</TabItem>
					<TabItem label="Bali">
						Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands.
					</TabItem>
				</Tabs>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<p>Tab position</p>
						<RadioButton ref={this.radiobutton} id="top" groupName="tabPosition" onChange={this.handleTopChange.bind(this)}>top</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton2} id="bottom" groupName="tabPosition" onChange={this.handleBottomChange.bind(this)}>bottom</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton3} id="left" groupName="tabPosition" checked onChange={this.handleLeftChange.bind(this)}>left</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton4} id="right" groupName="tabPosition" onChange={this.handleRightChange.bind(this)}>right</RadioButton>
					</div>
					<div className="option">
						<p>Tab text orientation</p>
						<RadioButton ref={this.radiobutton5} id="horizontal"
							groupName="tabTextOrientation" onChange={this.handleHorizontalChange.bind(this)}>horizontal</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton6} id="vertical" groupName="tabTextOrientation"
							checked onChange={this.handleVerticalChange.bind(this)}>vertical</RadioButton>
					</div>
					<div className="option">
						<p>Selection mode</p>
						<RadioButton ref={this.radiobutton7} id="click" groupName="selectionMode"
							checked onChange={this.handleClickChange.bind(this)}>click</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton8} id="dblclick" groupName="selectionMode" onChange={this.handleDblclickChange.bind(this)}>dblclick</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton9} id="mouseenter" groupName="selectionMode" onChange={this.handleMouseenterChange.bind(this)}>mouseenter</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton10} id="none" groupName="selectionMode" onChange={this.handleNoneChange.bind(this)}>none</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
