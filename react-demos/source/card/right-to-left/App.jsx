import React from "react";
import ReactDOM from "react-dom";
import { Card } from 'smart-webcomponents-react/card';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Card className="basic-card" rightToLeft>
					<div className="card-content"> <span className="card-title">כותרת הכרטיס</span>
						<p>אני קלף מאוד פשוט. אני טוב להכיל פיסות מידע קטנות. אני נוח מכיוון שאני
			                זקוק לסימון קטן כדי להשתמש ביעילות</p>
					</div>
					<div className="card-action"> <a href="#">זה קישור</a>
						<a href="#">זה קישור</a>
					</div>
				</Card>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
