import React from "react";
import ReactDOM from "react-dom";
import { DropDownButton } from 'smart-webcomponents-react/dropdownbutton';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <DropDownButton  placeholder="טקסט" rightToLeft>מה זה לורם איפסום? Lorem Ipsum הוא פשוט טקסט דמה של ענף ההדפס והקליעה.
			        Lorem Ipsum היה הטקסט הרגיל של התעשייה מאז שנות ה 1500-, אז מדפסת לא ידועה
			        לקחה מטען מסוג זה וערבלה אותו כדי ליצור ספר דגימה. הוא שרד לא רק חמש מאות
			        שנים, אלא גם את הקפיצה לסידור אלקטרוני האלקטרוני, שנשאר ללא שינוי. זה פופולרי
			        בשנות השישים עם שחרור גיליונות Letraset המכילים קטעי לורם איפסום, ולאחרונה
			        גם עם תוכנת פרסום שולחניים כמו Aldus PageMaker כולל גרסאות של Lorem Ipsum.</DropDownButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
