import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CardComponent } from 'smart-webcomponents-angular/card';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('card', { read: CardComponent, static: false }) card!: CardComponent;
	@ViewChild('card2', { read: CardComponent, static: false }) card2!: CardComponent;
	@ViewChild('card3', { read: CardComponent, static: false }) card3!: CardComponent;
	@ViewChild('card4', { read: CardComponent, static: false }) card4!: CardComponent;
	@ViewChild('card5', { read: CardComponent, static: false }) card5!: CardComponent;
	@ViewChild('card6', { read: CardComponent, static: false }) card6!: CardComponent;
	
 
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
        dataSource = [
            {
                image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Tiger_in_Ranthambhore.jpg',
                title: 'Bengal tiger',
                comment: 'Bengal tigers weigh up to 325 kg (717 lb), and reach a head and body length of 320 cm (130 in).',
                content: 'The Bengal tiger (<em>Panthera tigris tigris</em>) is the most numerous tiger. By 2011, the total population was estimated at fewer than 2,500 individuals with a decreasing trend.'
            },
            {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg/1280px-Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg',
                title: 'Indochinese tiger',
                comment: 'Males range in size from 2.55 to 2.85 m (8.4 to 9.4 ft) and in weight from 150 to 195 kg (331 to 430 lb).',
                content: 'The Indochinese tiger (<em>Panthera tigris corbetti</em>) is a tiger subspecies occurring in Myanmar, Thailand, Lao PDR, Viet Nam, Cambodia and southwestern China.'
            },
            {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/MalayanTiger01.jpg/1280px-MalayanTiger01.jpg',
                title: 'Malayan tiger',
                comment: 'The average length of a male is 8 ft 6 in (259 cm), and of a female 7 ft 10 in (239 cm).',
                content: 'The Malayan tiger (<em>Panthera tigris jacksoni</em>) is a tiger subspecies that inhabits the southern and central parts of the Malay Peninsula and has been classified as Critically Endangered by IUCN in 2015 as the population was roughly estimated at 250 to 340 adult individuals in 2013; this population likely comprises less than 250 mature breeding individuals, with a declining trend.'
            },
            {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/1280px-P.t.altaica_Tomak_Male.jpg',
                title: 'Siberian tiger',
                comment: 'The body length is not less than 150 cm (60 in), condylobasal length of skull 250 mm (10 in).',
                content: 'The Siberian tiger (<em>Panthera tigris altaica</em>), also called Amur tiger, is a tiger subspecies inhabiting mainly the Sikhote Alin mountain region with a small population in southwest Primorye Province in the Russian Far East. The Siberian tiger once ranged throughout all of Korea, north-eastern China, Russian Far East, and eastern Mongolia.'
            },
            {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/2012_Suedchinesischer_Tiger.JPG/1280px-2012_Suedchinesischer_Tiger.JPG',
                title: 'South China tiger',
                comment: 'Males measure from 230 to 265 cm (91 to 104 in) between the pegs, and weigh 130 to 175 kg (287 to 386 lb).',
                content: 'The South China tiger (<em>Panthera tigris tigris</em>) is a tiger population in the provinces of Fujian, Guangdong, Hunan, Jiangxi in southern China.'
            },
            {
                image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Panthera_tigris_sumatran_subspecies.jpg',
                title: 'Malayan tiger',
                comment: 'Males weigh 100 to 140 kg (220 to 310 lb) and measure 2.2 to 2.55 m (87 to 100 in).',
                content: 'The Sumatran tiger (<em>Panthera tigris sondaica</em>) is a tiger population that lives in the Indonesian island of Sumatra.'
            }
        ];
        
        for (let i = 0; i < cards.length; i++) {
            cards[i].dataSource = dataSource[i];
            cards[i].contentHandler = contentHandler;
        }

        function contentHandler(card) {
            const toggleBtn = card.getElementsByTagName('smart-toggle-button')[0], moreBtn = card.querySelector('.more'), content = card.querySelector('.card-content');
            moreBtn.addEventListener('click', function () {
                content.classList.remove('hidden');
                toggleBtn.checked = true;
            });
            toggleBtn.addEventListener('click', function () {
                content.classList.toggle('hidden');
            });
        }
	}	
}