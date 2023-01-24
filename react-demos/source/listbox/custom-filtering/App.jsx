import React from "react";
import ReactDOM from "react-dom";
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.listbox = React.createRef();
	}

	init() {
		this.listbox.current.filterCallback = function (item, searchQuery) {
			return item.value.toLowerCase() === searchQuery.toLowerCase();
		};

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<label>Custom Filering:</label>
				<br /><pre>Filtering by Value. Ex: BG, US, UK, BR, TR</pre>
				<ListBox ref={this.listbox} grouped filterable filterMode="custom">
					<ListItem value="AF">Afghanistan</ListItem>
					<ListItem selected value="AL">Albania</ListItem>
					<ListItem value="DZ">Algeria</ListItem>
					<ListItem value="AS">American Samoa</ListItem>
					<ListItem value="AD">Andorra</ListItem>
					<ListItem value="AO">Angola</ListItem>
					<ListItem value="AI">Anguilla</ListItem>
					<ListItem value="AQ">Antarctica</ListItem>
					<ListItem value="AG">Antigua and Barbuda</ListItem>
					<ListItem value="AR">Argentina</ListItem>
					<ListItem value="AM">Armenia</ListItem>
					<ListItem value="AW">Aruba</ListItem>
					<ListItem value="AU">Australia</ListItem>
					<ListItem value="AT">Austria</ListItem>
					<ListItem value="AZ">Azerbaijan</ListItem>
					<ListItem value="BS">Bahamas</ListItem>
					<ListItem value="BH">Bahrain</ListItem>
					<ListItem value="BD">Bangladesh</ListItem>
					<ListItem value="BB">Barbados</ListItem>
					<ListItem value="BY">Belarus</ListItem>
					<ListItem value="BE">Belgium</ListItem>
					<ListItem value="BZ">Belize</ListItem>
					<ListItem value="BJ">Benin</ListItem>
					<ListItem value="BM">Bermuda</ListItem>
					<ListItem value="BT">Bhutan</ListItem>
					<ListItem value="BO">Bolivia</ListItem>
					<ListItem value="BA">Bosnia and Herzegovina</ListItem>
					<ListItem value="BW">Botswana</ListItem>
					<ListItem value="BV">Bouvet Island</ListItem>
					<ListItem value="BR">Brazil</ListItem>
					<ListItem value="IO">British Indian Ocean Territory</ListItem>
					<ListItem value="BN">Brunei Darussalam</ListItem>
					<ListItem value="BG">Bulgaria</ListItem>
					<ListItem value="CU">Cuba</ListItem>
					<ListItem value="TR">Turkey</ListItem>
					<ListItem value="UG">Uganda</ListItem>
					<ListItem value="UA">Ukraine</ListItem>
					<ListItem value="AE Arab Emirates">United Arab Emirates</ListItem>
					<ListItem value="UK">United Kingdom</ListItem>
					<ListItem value="US">United States</ListItem>
				</ListBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
