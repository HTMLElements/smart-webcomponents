import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	    'use strict';
	    let formatVariants = {
	        'day': {
	            'd': 'Ден без водеща нула',
	            'dd': 'Ден с водеща нула',
	            'ddd': 'Ден като абревиатура',
	            'dddd': 'Цяло изписване на деня',
	        },
	        'month': {
	            'M': 'Месец без водеща нула',
	            'MM': 'Месец с водеща нула',
	            'MMM': 'Месец като абревиатура',
	            'MMMM': 'Цяло изписване на месеца'
	        },
	        'year': {
	            'y': 'Година без водеща нула',
	            'yy': 'Година с водеща нула',
	            'yyyy': 'Цяло изписване на годината',
	        },
	        'hour': {
	            'h': 'Час без водеща нула',
	            'hh': 'Час с водеща нула',
	            'H': 'Пълният час без водеща нула',
	            'HH': 'Пълният час с водеща нула'
	        },
	        'minute': {
	            'm': 'Минута без водеща нула',
	            'mm': 'Минута с водеща нула'
	        },
	        'second': {
	            's': 'Секунда без водеща нула',
	            'ss': 'Секунда с водеща нула'
	        },
	        'millisecond': {
	            'f': 'Милисекунда с точност 1/10 от секундата',
	            'ff': 'Милисекунда с точност 1/100 от секундата',
	            'fff': 'Милисекунда с точност 1/1000 от секундата',
	        },
	        'ampm': {
	            'tt': 'Цяло изписване',
	            //'p': 'Shortened lowercase',
	            't': 'По-кратко изписване'
	        }
	    };
	    const inputDateTimeFormats = [
	        'dddd, MMMM - dd, yyyy HH:mm : ss.fff - dddd. MMMM',
	        'yyyy/dd-MMM / HH:mm',
	        'MMM-yyyy',
	        'dd | MM | yyyy',
	        'd-M-y',
	        'dd-MMM-yyyy',
	        'dd, MMMM - dd, yyyy HH:mm : ss.fff tt'
	    ];
	    let locale;
	    let messages;
	    locale = 'bg';
	    messages = {
	        'bg': {
	            'apply': 'приложи',
	            'date': 'дата',
	            'time': 'час',
	            'day': 'ден',
	            'month': 'месец',
	            'year': 'година',
	            'hours': 'час',
	            'hour': 'час',
	            'minutes': 'минути',
	            'minute': 'минута',
	            'seconds': 'секунди',
	            'second': 'секунда',
	            'milliseconds': 'милисекунди',
	            'ampm': 'am/pm',
	            'delete': 'изтрии'
	        },
	    };
	    //DateFormatPanel
	    const dateFormatPanel = new Smart.Utilities.DateFormatPanel(formatVariants, inputDateTimeFormats, '.date-format-panel-container', locale, messages);
	    // On apply click - set the format
	    document.querySelector('.use-format-button').addEventListener('click', () => changeFormatFunction(dateFormatPanel.value));
	};
	let changeFormatFunction = (format) => {
	    'use strict';
	    document.querySelector('.custom-format-holder').innerHTML = 'Choosed format: <br>' + format;
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="date-format-panel-container"></div>
			    <div className="custom-format-holder"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
