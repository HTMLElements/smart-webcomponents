import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { ArrayComponent } from 'smart-webcomponents-angular/array';
import { ButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('smartArray', { read: ArrayComponent, static: false }) smartArray!: ArrayComponent;
	@ViewChild('setValueToOneElement', { read: ButtonComponent, static: false }) setValueToOneElement!: ButtonComponent;
	@ViewChild('log', { read: ElementRef, static: false }) log!: ElementRef;

	
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
	
	// 'getElementValue' is called when manually updating the inner widgets in order to reflect the change in the array's value itself (as well as in various other checks)
     getElementValue(element, dimensions) {
        const inputs = element.getElementsByTagName('input'), 
		firstNameinput = inputs[0], 
		lastNameinput = inputs[1];
        
		return { firstName: firstNameinput.value, lastName: lastNameinput.value };
    }
    // 'setElementValue' is called when setting the initial values of inner widgets and when scrolling the array
     setElementValue(value, element, dimensions) {
        const inputs = element.getElementsByTagName('input'), 
		firstNameinput = inputs[0], 
		lastNameinput = inputs[1];
		
        if (typeof value === 'string') {
            value = JSON.parse(value);
        }
		
        firstNameinput.value = value.firstName;
        lastNameinput.value = value.lastName;
    }	
	
    elementTemplate(element, dimensions) {
        const that = document.querySelector('smart-array');
		
        element.style.width = that.elementWidth + 'px';
        element.style.height = that.elementHeight + 'px';

        const templateContent = document.importNode((document.getElementById('template') as HTMLTemplateElement).content, true);
     
		element.appendChild(templateContent);
        
		element.firstChild.addEventListener('change', function (event) {
            if (element.supressChange) {
                // 'supressChange' is set to true when scrolling the array and the 'change' events of the controls must not invoke the smartArray 'change' event
                event.stopPropagation();
            }
        });
    }	
		
	init(): void {
		// init code.	    
		const that = this;
			
		that.setValueToOneElement.addEventListener('click', function () {
            that.smartArray.val({ firstName: 'Vestara', lastName: 'Khai' }, [2, 0]);
        });
        
		that.smartArray.addEventListener('change', function (event: any) {
            const value = event.target.val();
         
			that.log.nativeElement.innerHTML = JSON.stringify(value) + '<hr />' + that.log.nativeElement.innerHTML;
        });
	}	
}