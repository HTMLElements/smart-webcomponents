import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tree = React.createRef();
	}

	handleShowLinesChange(event) {
		this.tree.current.showLines = event.detail.value;
	}

	handleShowRootLinesChange(event) {
		this.tree.current.showRootLines = event.detail.value;
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<CheckBox id="showLines" checked onChange={this.handleShowLinesChange.bind(this)}>הצג שורות</CheckBox>
				<CheckBox id="showRootLines" checked onChange={this.handleShowRootLinesChange.bind(this)}>הצג קווי שורש</CheckBox>
				<br />
				<Tree ref={this.tree} id="tree4" filterable filterInputPlaceholder="סנן שאילתה ..."
					filterMode="containsIgnoreCase" rightToLeft showLines showRootLines>
					<TreeItem>בית</TreeItem>
					<TreeItemsGroup>פתרונות
			            <TreeItem>חינוך</TreeItem>
						<TreeItem>שירותים פיננסיים</TreeItem>
						<TreeItem>ממשלה</TreeItem>
						<TreeItem>ייצור</TreeItem>
						<TreeItemsGroup>פתרונות
			                <TreeItem>צילום ווידאו לצרכן</TreeItem>
							<TreeItem>נייד</TreeItem>
							<TreeItem>יישומי אינטרנט עשירים</TreeItem>
							<TreeItem>תקשורת טכנית</TreeItem>
							<TreeItem>הדרכה ולמידה אלקטרונית</TreeItem>
							<TreeItem>ועידת רשת</TreeItem>
						</TreeItemsGroup>
						<TreeItem>כל הענפים והפתרונות</TreeItem>
					</TreeItemsGroup>
					<TreeItemsGroup>מוצרים
			            <TreeItem>מוצרי מחשב</TreeItem>
						<TreeItem>מוצרים ניידים</TreeItem>
						<TreeItem>כל המוצרים</TreeItem>
					</TreeItemsGroup>
					<TreeItemsGroup>תמיכה
			            <TreeItem>תמיכה בבית</TreeItem>
						<TreeItem>שירות לקוחות</TreeItem>
						<TreeItem>בסיס ידע</TreeItem>
						<TreeItem>ספרים</TreeItem>
						<TreeItem>הכשרה והסמכה</TreeItem>
						<TreeItem>תוכניות תמיכה</TreeItem>
						<TreeItem>פורומים</TreeItem>
						<TreeItem>תיעוד</TreeItem>
						<TreeItem>עדכונים</TreeItem>
					</TreeItemsGroup>
					<TreeItemsGroup>קהילות
			            <TreeItem>מעצבים</TreeItem>
						<TreeItem>מפתחים</TreeItem>
						<TreeItem>מחנכים ותלמידים</TreeItem>
						<TreeItem>שותפים</TreeItem>
						<TreeItemsGroup>לפי משאב
			                <TreeItem>מעבדות</TreeItem>
							<TreeItem>טלוויזיה</TreeItem>
							<TreeItem>פורומים</TreeItem>
							<TreeItem>חליפין</TreeItem>
							<TreeItem>בלוגים</TreeItem>
							<TreeItem>התנסות בעיצוב</TreeItem>
						</TreeItemsGroup>
					</TreeItemsGroup>
					<TreeItemsGroup>החברה
			            <TreeItem>עלינו</TreeItem>
						<TreeItem>ללחוץ</TreeItem>
						<TreeItem>קשרי משקיעים</TreeItem>
						<TreeItem>ענייני חברה</TreeItem>
						<TreeItem>קריירה</TreeItem>
						<TreeItem>חלון ראווה</TreeItem>
						<TreeItem>אירועים</TreeItem>
						<TreeItem>תיצור איתנו קשר</TreeItem>
						<TreeItem>להיות שותף</TreeItem>
					</TreeItemsGroup>
				</Tree>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
