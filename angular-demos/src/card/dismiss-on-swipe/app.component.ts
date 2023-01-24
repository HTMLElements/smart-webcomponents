import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CardComponent } from 'smart-webcomponents-angular/card';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('card', { read: CardComponent, static: false }) card!: CardComponent;
	@ViewChild('card2', { read: CardComponent, static: false }) card2!: CardComponent;
	@ViewChild('card3', { read: CardComponent, static: false }) card3!: CardComponent;
	@ViewChild('card4', { read: CardComponent, static: false }) card4!: CardComponent;
	@ViewChild('card5', { read: CardComponent, static: false }) card5!: CardComponent;
	@ViewChild('card6', { read: CardComponent, static: false }) card6!: CardComponent;
	@ViewChild('card7', { read: CardComponent, static: false }) card7!: CardComponent;
	@ViewChild('card8', { read: CardComponent, static: false }) card8!: CardComponent;
	@ViewChild('card9', { read: CardComponent, static: false }) card9!: CardComponent;
	@ViewChild('card10', { read: CardComponent, static: false }) card10!: CardComponent;
	@ViewChild('card11', { read: CardComponent, static: false }) card11!: CardComponent;
	@ViewChild('card12', { read: CardComponent, static: false }) card12!: CardComponent;
	@ViewChild('card13', { read: CardComponent, static: false }) card13!: CardComponent;
	@ViewChild('card14', { read: CardComponent, static: false }) card14!: CardComponent;
	@ViewChild('card15', { read: CardComponent, static: false }) card15!: CardComponent;
	@ViewChild('card16', { read: CardComponent, static: false }) card16!: CardComponent;
	@ViewChild('card17', { read: CardComponent, static: false }) card17!: CardComponent;
	@ViewChild('card18', { read: CardComponent, static: false }) card18!: CardComponent;
	@ViewChild('card19', { read: CardComponent, static: false }) card19!: CardComponent;
	@ViewChild('card20', { read: CardComponent, static: false }) card20!: CardComponent;
	@ViewChild('card21', { read: CardComponent, static: false }) card21!: CardComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
		const cards = document.getElementsByTagName('smart-card'), 
		cardContainer = cards[0].parentElement;
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            card.dataSource = { content: 'Swipe left/right' };
            card.addEventListener('swipeleft', function () {
                card.classList.add('swipe-left');
            });
            card.addEventListener('swiperight', function () {
                card.classList.add('swipe-right');
            });
            card.addEventListener("animationend", function () {
                cardContainer.removeChild(card);
            });
        }
	}	
}