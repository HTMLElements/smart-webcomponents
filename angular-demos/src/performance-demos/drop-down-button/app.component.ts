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
	    
    let dropDownButtons = [];
    // appends 100 elements  on the page
    function appendDropDownButtons() {
        const dropDownButtonContainer = document.createElement('div'), containerFragment = document.createDocumentFragment(), content = `
    What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `;
        for (let i = 0; i < 100; i++) {
            const dropDownButton = document.createElement('smart-drop-down-button');
            dropDownButton.classList.add('testDropDownButton');
            dropDownButton.innerHTML = content;
            dropDownButtons.push(dropDownButton);
            containerFragment.appendChild(dropDownButton);
        }
        dropDownButtonContainer.appendChild(containerFragment);
        document.body.appendChild(dropDownButtonContainer);
    }
    function runTest() {
        setInterval(function () {
            for (let i = 0; i < 100; i++) {
                //dropDownButtons[i].open();
                //dropDownButtons[i].close();
                dropDownButtons[i].placeholder = (1 + Math.round(Math.random() * 10)).toString();
            }
        }, 1);
    }
    
        appendDropDownButtons();
        runTest();
    

	}	
}