import React from "react";
import ReactDOM from "react-dom";
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownlist = React.createRef();
	}

	handleResizeModeButtonClick(event) {
		const that = this;
		const dropDownList = that.dropdownlist.current;
		let mode = event.target.textContent.trim();

		dropDownList.resizeMode = mode.charAt(0).toLowerCase() + mode.slice(1);
	}

	handleDropDownPositionButtonClick(event) {
		const that = this;
		const dropDownList = that.dropdownlist.current;
		let mode = event.target.textContent.trim();

		dropDownList.dropDownPosition = mode.charAt(0).toLowerCase() + mode.slice(1);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="options">
					<div className="caption">Resize Mode</div>
					<div className="option">
						<RadioButton onClick={this.handleResizeModeButtonClick.bind(this)}>None</RadioButton>
						<RadioButton onClick={this.handleResizeModeButtonClick.bind(this)}>Horizontal</RadioButton>
						<RadioButton onClick={this.handleResizeModeButtonClick.bind(this)}>Both</RadioButton>
						<RadioButton checked onClick={this.handleResizeModeButtonClick.bind(this)}>Vertical</RadioButton>
					</div>
					<div className="caption">DropDown position</div>
					<div className="option">
						<RadioButton checked onClick={this.handleDropDownPositionButtonClick.bind(this)}>Bottom</RadioButton>
						<RadioButton onClick={this.handleDropDownPositionButtonClick.bind(this)}>Top</RadioButton>
					</div>
				</div>
				<DropDownList ref={this.dropdownlist} selectedIndexes={[0]} resizeMode="vertical">
					<ListItem value="Afghanistan">Afghanistan</ListItem>
					<ListItem selected value="Albania">Albania</ListItem>
					<ListItem value="Algeria">Algeria</ListItem>
					<ListItem value="American Samoa">American Samoa</ListItem>
					<ListItem value="Andorra">Andorra</ListItem>
					<ListItem value="Angola">Angola</ListItem>
					<ListItem value="Anguilla">Anguilla</ListItem>
					<ListItem value="Antarctica">Antarctica</ListItem>
					<ListItem value="Antigua and Barbuda">Antigua and Barbuda</ListItem>
					<ListItem value="Argentina">Argentina</ListItem>
					<ListItem value="Armenia">Armenia</ListItem>
					<ListItem value="Aruba">Aruba</ListItem>
					<ListItem value="Australia">Australia</ListItem>
					<ListItem value="Austria">Austria</ListItem>
					<ListItem value="Azerbaijan">Azerbaijan</ListItem>
					<ListItem value="Bahamas">Bahamas</ListItem>
					<ListItem value="Bahrain">Bahrain</ListItem>
					<ListItem value="Bangladesh">Bangladesh</ListItem>
					<ListItem value="Barbados">Barbados</ListItem>
					<ListItem value="Belarus">Belarus</ListItem>
					<ListItem value="Belgium">Belgium</ListItem>
					<ListItem value="Belize">Belize</ListItem>
					<ListItem value="Benin">Benin</ListItem>
					<ListItem value="Bermuda">Bermuda</ListItem>
					<ListItem value="Bhutan">Bhutan</ListItem>
				</DropDownList>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
