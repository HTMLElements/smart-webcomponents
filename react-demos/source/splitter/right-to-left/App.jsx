import React from "react";
import ReactDOM from "react-dom";
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Splitter id="splitter" rightToLeft>
			        <SplitterItem id="item0">
			            <p>הנמר (Panthera tigris) הוא מין החתולים הגדול ביותר, שזוהה בעיקר בזכות
			                דפוס הפסים האנכיים הכהים שלו על פרווה כתומה אדמדמה עם החלק התחתון הבהיר
			                יותר.</p>
			        </SplitterItem>
			        <SplitterItem id="item1">
			             <h2>טיגריס בנגלי</h2>
			            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tiger_in_Ranthambhore.jpg/220px-Tiger_in_Ranthambhore.jpg"
			            />
			            <p>מעיל הנמר של בנגל צהוב עד כתום בהיר, עם פסים הנעים בין חום כהה לשחור;
			                הבטן והחלקים הפנימיים של הגפיים לבנים, והזנב כתום עם טבעות שחורות.</p>
			            <p>אורך הזכרים הממוצע בין 270 ל 310 ס"מ (110 עד 120 אינץ ') כולל הזנב, ואילו
			                הנקבות בממוצע 240 עד 265 ס"מ (94 עד 104 אינץ'). בדרך כלל הזנב הוא 85 עד
			                110 ס"מ.</p>
			        </SplitterItem>
			    </Splitter>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
