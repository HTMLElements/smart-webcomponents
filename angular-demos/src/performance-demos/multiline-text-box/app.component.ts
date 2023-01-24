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
	    
    let newMultilineTextBoxesList = [];
    // appends 100 MultilineTextBoxes  on the page
    function appendMultilineTextBoxes() {
        const multilineTextBoxesContainer = document.createElement('div'), containerFragment = document.createDocumentFragment();
        for (let i = 0; i < 100; i++) {
            const newMultilineTextBox = document.createElement('smart-multiline-text-box');
            newMultilineTextBox.classList.add('testMultilineTextBox');
            newMultilineTextBox.placeholder = 'Your text';
            newMultilineTextBoxesList.push(newMultilineTextBox);
            containerFragment.appendChild(newMultilineTextBox);
        }
        multilineTextBoxesContainer.appendChild(containerFragment);
        document.body.appendChild(multilineTextBoxesContainer);
    }
    // executes value updates for all MultilineTextBoxes in a 10ms loop
    function runTest() {
        const text = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie venenatis pulvinar. Duis ipsum lectus, mattis et elit ac, ullamcorper molestie ipsum. Nullam suscipit nibh vel mollis sollicitudin. Vivamus commodo vitae ex nec rutrum. Curabitur vulputate sagittis magna vel hendrerit. Quisque sit amet tristique massa. Morbi molestie ex eu rutrum malesuada.', ' Proin sollicitudin pulvinar tincidunt. Praesent quam metus, vulputate eget erat eget, luctus placerat magna. Integer a sollicitudin felis. Vivamus id lectus a diam ullamcorper vestibulum porta eu sapien. Integer id odio eu felis ullamcorper lacinia. Vivamus vel suscipit eros. Nullam molestie felis lacus, vitae dapibus metus suscipit a. Fusce vulputate malesuada ligula, vitae placerat orci vulputate a. Praesent vel metus sed lectus rhoncus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam auctor turpis augue, id tempus libero consectetur quis. Etiam placerat nisl quis ligula lobortis, id rhoncus orci congue. Suspendisse tristique erat sit amet mauris pulvinar fringilla. Aliquam nec tristique elit, nec volutpat ante.', ''];
        setInterval(function () {
            for (let i = 0; i < 100; i++) {
                newMultilineTextBoxesList[i].value = text[Math.round(Math.random() * 2)];
            }
        }, 10);
    }
    
        appendMultilineTextBoxes();
        runTest();
    

	}	
}