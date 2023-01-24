import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        id: "app1",
	        template: {
	            "#textBox1": {
	                properties: {
	                    value: "",
	                    placeholder: "First Name"
	                },
	                bind: {
	                    value: "firstName"
	                }
	            },
	            "#textBox2": {
	                properties: {
	                    value: "",
	                    placeholder: "Last Name"
	                },
	                bind: {
	                    value: "lastName"
	                }
	            },
	            "#listBox": {
	                properties: {
	                    dataSource: [],
	                    selectedIndexes: [0]
	                },
	                listeners: {
	                    change: "selectItem"
	                },
	                bind: {
	                    dataSource: "items",
	                    selectedIndexes: "selectedIndexes"
	                }
	            },
	            "#dropDownList": {
	                properties: {
	                    dataSource: [],
	                    selectedIndexes: [0]
	                },
	                listeners: {
	                    change: "selectItem"
	                },
	                bind: {
	                    dataSource: "items",
	                    selectedIndexes: "selectedIndexes"
	                }
	            },
	            "#button": {
	                properties: {
	                    value: "submit",
	                    innerHTML: "Submit"
	                },
	                listeners: {
	                    click: "addItem"
	                },
	                bind: {
	                    innerHTML: "buttonText"
	                }
	            }
	        },
	        data: {
	            firstName: "John",
	            lastName: "Peterson",
	            items: ["George Brown", "Anthony Black", "Mike Jordan"],
	            selectedIndexes: [1],
	            addItem: function() {
	                this.items.push(this.firstName + " " + this.lastName);
	                this.firstName = this.lastName = "";
	            },
	            selectItem: function(event) {
	                if (event.detail.selected) {
	                    const selectedItem = this.items[this.selectedIndexes[0]];
	                    const names = selectedItem.split(" ");
	                    this.firstName = names[0];
	                    this.lastName = names[1];
	                }
	            },
	            buttonText: "Add Item",
	        }
	    });
	    app.notify(function(changes) {
	        console.log('data is updated');
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">All Custom Elements are two-way data bound to a common Model. The log,
			        below the custom elements logs the changes with declarative data bindings.</div>
			    <div
			    id="form">
			        <TextBox ref="textbox" id="textBox1"></TextBox>
			        <br/>
			        <TextBox ref="textbox2" id="textBox2"></TextBox>
			        <br/>
			        <ListBox ref="listbox" id="listBox"></ListBox>
			        <br/>
			        <DropDownList ref="dropdownlist" id="dropDownList"></DropDownList>
			        <br/>
			        <br/>
			        <Button ref="button" id="button"></Button>
			        <br/>
			        <br/>First Name: <span>{{firstName}}</span>
			        <br/>Last Name: <span>{{lastName}}</span>
			        <br/>Selected Indexes: <span>{{selectedIndexes}}</span>
			        <br/>Items: <span>{{items}}</span>
			</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
