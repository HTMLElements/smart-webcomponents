import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Window } from 'smart-webcomponents-react/window';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.window = React.createRef();
	}

	handleClick() {
		this.window.current.opened ? this.window.current.close() : this.window.current.open();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Button id="openButton" onClick={this.handleClick.bind(this)}>פתוח/קרוב</Button>
			    <Window ref={this.window} opened label="חלון RTL" rightToLeft>
			        <div id="article">
			            <section>
			                 <h3>מהו לורם איפסום?</h3>
			                <p>Lorem Ipsum הוא פשוט טקסט דמה של ענף ההדפס והקליעה. לורם איפסום היה הטקסט
			                    המקובל בתעשייה מאז שנות ה- 1500, אז מדפסת לא ידועה לקחה מטען מסוג זה וערבלה
			                    אותו כדי להכין ספר דגימה. הוא שרד לא רק חמש מאות שנים, אלא גם את הקפיצה
			                    לסידור אלקטרוני האלקטרוני, שנשאר ללא שינוי. זה פופולרי בשנות השישים עם
			                    שחרור גיליונות Letraset הכוללים קטעי לורם איפסום, ולאחרונה עם תוכנת פרסום
			                    שולחניים כמו Aldus PageMaker כולל גרסאות לורם איפסום.</p>
			            </section>
			            <section>
			                 <h3>מהיכן זה מגיע?</h3>
			                <p>בניגוד לאמונה הרווחת, לורם איפסום אינו טקסט אקראי בלבד. יש לו שורשים בקטע
			                    של ספרות לטינית קלאסית משנת 45 לפני הספירה, מה שהופך אותה לגיל 2000 שנה
			                    יותר. ריצ'רד מקלינטוק, פרופסור לטיני במכללת המדן-סידני בווירג'יניה, חיפש
			                    את אחת המלים הלטיניות המעורפלות יותר, קונסקטטור, ממעבר לורם איפסום, ועבר
			                    את ציטוטי המילה בספרות הקלאסית, גילה את המקור הבלתי ספק. Lorem Ipsum מקורו
			                    בסעיפים 1.10.32 ו- 1.10.33 של "de Finibus Bonorum et Malorum" (הקיצוניות
			                    של הטוב והרע) מאת סיקרו, שנכתב בשנת 45 לפני הספירה. ספר זה הוא מסה על תורת
			                    האתיקה, פופולארית מאוד בתקופת הרנסנס. השורה הראשונה של Lorem Ipsum, "Lorem
			                    ipsum dolor sit amet ..", באה משורה בסעיף 1.10.32. הנתח הרגיל של לורם איפסום
			                    ששימש מאז שנות ה 1500- משוכפל להלן למעוניינים. סעיפים 1.10.32 ו- 1.10.33
			                    מתוך "de Finibus Bonorum et Malorum" מאת Cicero משוחזרים גם הם בצורתם המקורית
			                    המדויקת, מלווים בגרסאות באנגלית מתרגום 1914 מאת H. Rackham</p>
			            </section>
			        </div>
			    </Window>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
