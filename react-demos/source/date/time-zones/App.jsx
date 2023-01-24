import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	    const UTCDateTime = new smartUtilities.DateTime('2018/05/07 17:12:54:111222333444555666777888', 'UTC');
	    document.getElementById('result1').innerHTML = UTCDateTime.toString('yyyy-MM-dd HH:mm:ss:fff:uu:nn:pp:ee:aa:xx:oo zzz');
	    const ESTDateTime = UTCDateTime.toTimeZone('Eastern Standard Time');
	    document.getElementById('result2').innerHTML = ESTDateTime.toString('yyyy-MM-dd HH:mm:ss:fff:uu:nn:pp:ee:aa:xx:oo zzz');
	    const FLEDateTime = UTCDateTime.toTimeZone('FLE Standard Time');
	    document.getElementById('result3').innerHTML = FLEDateTime.toString('yyyy-MM-dd HH:mm:ss:fff:uu:nn:pp:ee:aa:xx:oo zzz');
	    const CSTDateTime = new smartUtilities.DateTime('2018/05/07 17:12:54:111222333444555666777888', 'Central Standard Time');
	    document.getElementById('result4').innerHTML = CSTDateTime.toString('yyyy-MM-dd HH:mm:ss:fff:uu:nn:pp:ee:aa:xx:oo zzz');
	    const UTCDateTime2 = CSTDateTime.toTimeZone('UTC');
	    document.getElementById('result5').innerHTML = UTCDateTime2.toString('yyyy-MM-dd HH:mm:ss:fff:uu:nn:pp:ee:aa:xx:oo zzz');
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>High-precision DateTime object example with time zones</h3>
			    <p>Initialization:</p> <code>const UTCDateTime = new smartUtilities.DateTime('2018/05/07 17:12:54:111222333444555666777888', 'UTC');</code>
			    <div
			    id="alternative">
			        <p>Alternative initialization:</p> <code>const UTCDateTime = smartUtilities.DateTime(2018, 05, 07, 17, 12, 54, 111, 222, 333, 444, 555, 666, 777, 888, 'UTC');</code>
			</div>
			<br />
			<p><code>UTCDateTime.toString('yyyy-MM-dd HH:mm:ss:fff:uu:nn:pp:ee:aa:xx:oo zzz');</code> -
			    displays all time components and time zone offset:</p> <span id="result1"></span>
			<p><code>const ESTDateTime = UTCDateTime.toTimeZone('Eastern Standard Time');</code> -
			    creates a new DateTime object in the 'Eastern Standard Time' zone:</p>
			<span
			id="result2"></span>
			    <p><code>const FLEDateTime = UTCDateTime.toTimeZone('FLE Standard Time');</code> -
			        creates a new DateTime object in the 'FLE Standard Time' zone:</p>
			    <span
			    id="result3"></span>
			        <br />
			        <br />
			        <p>Initialization in another time zone:</p> <code>const CSTDateTime = new smartUtilities.DateTime('2018/05/07 17:12:54:111222333444555666777888', 'Central Standard Time');</code>
			        <p><code>CSTDateTime.toString('yyyy-MM-dd HH:mm:ss:fff:uu:nn:pp:ee:aa:xx:oo zzz');</code> -
			            displays all time components and time zone offset:</p> <span id="result4"></span>
			        <p><code>const UTCDateTime2 = CSTDateTime.toTimeZone('UTC');</code> - creates
			            a new DateTime object in the 'UTC' zone:</p> <span id="result5"></span>
			        </div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
