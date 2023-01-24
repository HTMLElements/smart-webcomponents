import React from "react";
import ReactDOM from "react-dom";
import { ComboBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/combobox';

class App extends React.Component {
	
	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">ComboBox fully supports right-to-left (RTL) language locales. You can
			        enable/disable the right-to-left support using rightToLeft property.</div>
			    <ComboBox  selectedValues={["5"]} rightToLeft>
			        <ListItem value="1">אפוגאטו</ListItem>
			        <ListItem value="2">אמריקאי</ListItem>
			        <ListItem value="3">Bicerin</ListItem>
			        <ListItem value="4">קצר</ListItem>
			        <ListItem value="5">קפוצ'ינו</ListItem>
			        <ListItem value="6">קפה קרמה</ListItem>
			        <ListItem value="7">בית קפה נכון</ListItem>
			        <ListItem value="8">בית קפה מוכתם</ListItem>
			        <ListItem value="9">קפה מוקה</ListItem>
			        <ListItem value="10">מנותק</ListItem>
			        <ListItem value="11">אספרסו קובני</ListItem>
			        <ListItem value="12">אספרסו</ListItem>
			        <ListItem value="13">אייסקאפי</ListItem>
			        <ListItem value="14">פרפוצ'ינו</ListItem>
			        <ListItem value="15">שחק</ListItem>
			        <ListItem value="16">יווני מכה קפה</ListItem>
			        <ListItem value="17">קפה קר</ListItem>
			        <ListItem value="18">קפה נמס</ListItem>
			        <ListItem value="19">חלב</ListItem>
			        <ListItem value="20">קפה ליקר</ListItem>
			        </ComboBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
