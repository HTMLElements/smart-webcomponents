import { Component, ViewChild, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Button, ToggleButton, ButtonComponent, ToggleButtonComponent } from 'smart-webcomponents-angular/button';
import { ProgressBar, CircularProgressBar, ProgressBarComponent, CircularProgressBarComponent } from 'smart-webcomponents-angular/progressbar';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
	@ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
	@ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
	@ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
	@ViewChild('button7', { read: ButtonComponent, static: false }) button7!: ButtonComponent;
	@ViewChild('button8', { read: ButtonComponent, static: false }) button8!: ButtonComponent;
	@ViewChild('button9', { read: ButtonComponent, static: false }) button9!: ButtonComponent;
	@ViewChild('button10', { read: ButtonComponent, static: false }) button10!: ButtonComponent;
	@ViewChild('button11', { read: ButtonComponent, static: false }) button11!: ButtonComponent;
	@ViewChild('button12', { read: ButtonComponent, static: false }) button12!: ButtonComponent;
	@ViewChild('button13', { read: ButtonComponent, static: false }) button13!: ButtonComponent;
	@ViewChild('button14', { read: ButtonComponent, static: false }) button14!: ButtonComponent;
	@ViewChild('button15', { read: ButtonComponent, static: false }) button15!: ButtonComponent;
	@ViewChild('button16', { read: ButtonComponent, static: false }) button16!: ButtonComponent;
	@ViewChild('button17', { read: ButtonComponent, static: false }) button17!: ButtonComponent;
	@ViewChild('button18', { read: ButtonComponent, static: false }) button18!: ButtonComponent;
	@ViewChild('button19', { read: ButtonComponent, static: false }) button19!: ButtonComponent;
	@ViewChild('button20', { read: ButtonComponent, static: false }) button20!: ButtonComponent;
	@ViewChild('button21', { read: ButtonComponent, static: false }) button21!: ButtonComponent;
	@ViewChild('button22', { read: ButtonComponent, static: false }) button22!: ButtonComponent;
	@ViewChild('button23', { read: ButtonComponent, static: false }) button23!: ButtonComponent;
	@ViewChild('button24', { read: ButtonComponent, static: false }) button24!: ButtonComponent;
	@ViewChild('button25', { read: ButtonComponent, static: false }) button25!: ButtonComponent;
	@ViewChild('button26', { read: ButtonComponent, static: false }) button26!: ButtonComponent;
	@ViewChild('button27', { read: ButtonComponent, static: false }) button27!: ButtonComponent;
	@ViewChild('button28', { read: ButtonComponent, static: false }) button28!: ButtonComponent;
	@ViewChild('button29', { read: ButtonComponent, static: false }) button29!: ButtonComponent;
	@ViewChild('button30', { read: ButtonComponent, static: false }) button30!: ButtonComponent;
	@ViewChild('button31', { read: ButtonComponent, static: false }) button31!: ButtonComponent;
	@ViewChild('button32', { read: ButtonComponent, static: false }) button32!: ButtonComponent;
	@ViewChild('button33', { read: ButtonComponent, static: false }) button33!: ButtonComponent;
	@ViewChild('button34', { read: ButtonComponent, static: false }) button34!: ButtonComponent;
	@ViewChild('button35', { read: ButtonComponent, static: false }) button35!: ButtonComponent;
	@ViewChild('button36', { read: ButtonComponent, static: false }) button36!: ButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.    
        const hoverArea = document.getElementById('hover-area'),
		floatingHoverButton = document.getElementById('floating-hover-action') as Button,
		floatingClickButton = document.getElementById('floating-click-action') as Button,
		toggleButtons = document.getElementsByClassName('exclusive-selection') as HTMLCollectionOf<ToggleButton>, 
		progressBar = document.getElementById('progressBar') as ProgressBar,
		circularProgressBar = document.getElementById('progressBarCircular') as CircularProgressBar;
		
        for (var i = 0; i < toggleButtons.length; i++) {
            toggleButtons[i].addEventListener('change', function (event: any) {
                if (event.detail.value) {
                    for (var k = 0; k < toggleButtons.length; k++) {
                        if (toggleButtons[k] !== this) {
                            toggleButtons[k].checked = false;
                        }
                    }
                }
            });
        }
        hoverArea.addEventListener('mouseover', function () {
            floatingHoverButton.classList.remove('smart-visibility-hidden');
        });
        hoverArea.addEventListener('mouseout', function (event: any) {
            if (event.relatedTarget && event.relatedTarget["closest"]('smart-button')) {
                return;
            }
            floatingHoverButton.classList.add('smart-visibility-hidden');
        });
        floatingClickButton.addEventListener('click', function () {
            let subMenuButtons = document.getElementsByClassName('floating-click-sub-action'), changeIcon = false;
            for (let i = 0; i < subMenuButtons.length; i++) {
                if (subMenuButtons[i].classList.contains('smart-visibility-hidden')) {
                    subMenuButtons[i].classList.remove('smart-visibility-hidden');
                    changeIcon = true;
                }
                else {
                    subMenuButtons[i].classList.add('smart-visibility-hidden');
                }
            }
            this.getElementsByClassName('material-icons')[0].innerHTML = changeIcon ? 'close' : 'share';
        });
    

	}	
}