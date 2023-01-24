import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	init() {
	
	    import {
	        Date
	    } from "../../../source/typescript/smart.elements";
	
	    function updateLogs() {
	        document.getElementById('fp').innerHTML = newDateTime.toString('FP');
	        document.getElementById('ft').innerHTML = newDateTime.toString('FT');
	        document.getElementById('pp').innerHTML = newDateTime.toString('PP');
	        document.getElementById('pt').innerHTML = newDateTime.toString('PT');
	        document.getElementById('custom').innerHTML = newDateTime.toString('fff:uu:nn');
	    }
	    const newDateTime = new smartUtilities.DateTime(1920, 3, 12, 8, 34, 21, 89, 19, 800, 2, 333, 18, 45, 11);
	    updateLogs();
	    document.getElementById('microseconds').addEventListener('click', function() {
	        newDateTime.addMicroseconds(1, false);
	        updateLogs();
	    });
	    document.getElementById('yoctoseconds').addEventListener('click', function() {
	        newDateTime.addYoctoseconds(-2, false);
	        updateLogs();
	    });
	    document.getElementById('now').addEventListener('click', function() {
	        newDateTime = new smartUtilities.DateTime(new Date());
	        updateLogs();
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>High-precision DateTime object example</h3>
			    <p>Initialization:</p> <code>new smartUtilities.DateTime(<span title="year">1920</span>, <span title="month">3</span>, <span title="date">12</span>, <span title="hours">8</span>, <span title="minutes">34</span>, <span title="seconds">21</span>, <span title="milliseconds">89</span>, <span title="microseconds">19</span>, <span title="nanoseconds">800</span>, <span title="picoseconds">2</span>, <span title="femtoseconds">333</span>, <span title="attoseconds">18</span>, <span title="zeptoseconds">45</span>, <span title="yoctoseconds">11</span>);</code>
			    <div
			    id="alternative">
			        <p>Alternative initialization:</p> <code>new smartUtilities.DateTime('1920-03-12 08:34:21:089:019:800:002:333:018:045:011');</code>
			</div>
			<br />
			<p>format <code>'FP'</code> - full precision (from year to yoctoseconds (10<sup>−24</sup> seconds)):</p>
			<span
			id="fp"></span>
			    <p>format <code>'FT'</code> - full precision time (from hours to yoctoseconds
			        (10<sup>−24</sup> seconds)):</p> <span id="ft"></span>
			    <p>format <code>'PP'</code> - processor precision (from year to picoseconds
			        (10<sup>−12</sup> seconds)):</p> <span id="pp"></span>
			    <p>format <code>'PT'</code> - processor precision time (from hours to picoseconds
			        (10<sup>−12</sup> seconds)):</p> <span id="pt"></span>
			    <p>custom format <code>'fff:uu:nn'</code> - milliseconds:microseconds:nanoseconds:</p>
			    <span
			    id="custom"></span>
			        <br />
			        <br />
			        <Button ref="button" id="microseconds">Increase microseconds by 1</Button>
			        <Button ref="button2" id="yoctoseconds">Decrease yoctoseconds by 2</Button>
			        <Button ref="button3" id="now">Set to now</Button>
			        </div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
