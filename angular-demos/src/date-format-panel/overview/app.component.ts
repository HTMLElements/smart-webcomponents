import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        'use strict';
        let formatVariants = {
            'day': {
                'd': 'Day without leading zero',
                'dd': 'Day with leading zero',
                'ddd': 'Day as abbreviation',
                'dddd': 'Day as full name',
            },
            'month': {
                'M': 'Month without leading zero',
                'MM': 'Month with leading zero',
                'MMM': 'Month as abbreviation',
                'MMMM': 'Month as full name'
            },
            'year': {
                'y': 'Year without leading zero',
                'yy': 'Year with leading zero',
                'yyyy': 'Full numeric year',
            },
            'hour': {
                'h': 'Hours without leading zero',
                'hh': 'Hours with leading zero',
                'H': 'Full hour without leading zero',
                'HH': 'Full Hour with leading zero'
            },
            'minute': {
                'm': 'Minutes without leading zero',
                'mm': 'Minutes with leading zero'
            },
            'second': {
                's': 'Seconds with no leading zero',
                'ss': 'Seconds with leading zero'
            },
            'millisecond': {
                'f': 'Precision to 1/10 of a second',
                'ff': 'Precision to 1/100 of a second',
                'fff': 'Precision to 1/1000 of a second',
            },
            'ampm': {
                'tt': 'Full',
                //'p': 'Shortened lowercase',
                't': 'Shortened uppercase'
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
        //DateFormatPanel
        const dateFormatPanel = new Smart.Utilities.DateFormatPanel(formatVariants, inputDateTimeFormats, '.date-format-panel-container');
        // On apply click - set the format
        document.querySelector('.use-format-button').addEventListener('click', () => changeFormatFunction(dateFormatPanel.value));
    };
    let changeFormatFunction = (format) => {
        'use strict';
        document.querySelector('.custom-format-holder').innerHTML = 'Choosed format: <br>' + format;
    

	}	
}