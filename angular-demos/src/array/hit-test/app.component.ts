import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ArrayComponent } from 'smart-webcomponents-angular/array';
import { ButtonComponent } from 'smart-webcomponents-angular/button';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('array', { read: ArrayComponent, static: false }) array!: ArrayComponent;
	@ViewChild('toggleElementGap', { read: ButtonComponent, static: false }) toggleElementGap!: ButtonComponent;

 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
		const that = this;
    
        that.toggleElementGap.addEventListener('click', function () {
            that.array.toggleElementGap();
        });
		
        document.body.addEventListener('click', function (event: MouseEvent) {
            that.array.hitTest(event.pageX, event.pageY).then(function(hitTest) {
				let out;
				if (hitTest) {
					switch (hitTest.type) {
						case 'element':
							out = 'Clicked on: ' + hitTest.type + ', x: ' + hitTest.column + ', y: ' + hitTest.row;
							break;
						case 'indexer':
							out = 'Clicked on: ' + hitTest.type + ', dimension: ' + hitTest.dimension;
							break;
						case 'array':
							out = 'Clicked on: ' + hitTest.type;
							break;
					}
					alert(out);
				}
			});
        });
	}	
}