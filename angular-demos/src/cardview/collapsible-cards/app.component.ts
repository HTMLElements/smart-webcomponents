import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CardViewComponent, Smart } from 'smart-webcomponents-angular/cardview';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('cardview', { read: CardViewComponent, static: false }) cardview!: CardViewComponent;
	
    dataSource = new Smart.DataAdapter({
        dataSource: [
            {
                Name: 'Michelangelo',
                Country: 'Italy',
                Born: 1475,
                Died: 1564,
                Bio: 'Michelangelo di Lodovico Buonarroti Simoni or more commonly known by his first name Michelangelo was an Italian sculptor, painter, architect and poet of the High Renaissance born in the Republic of Florence, who exerted an unparalleled influence on the development of Western art.',
                Paintings: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Creaci%C3%B3n_de_Ad%C3%A1m.jpg/800px-Creaci%C3%B3n_de_Ad%C3%A1m.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ortographia_Partis_Exterioris_Templi_Divi_Petri_in_Vaticano.jpg/800px-Ortographia_Partis_Exterioris_Templi_Divi_Petri_in_Vaticano.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Last_Judgement_by_Michelangelo.jpg/539px-Last_Judgement_by_Michelangelo.jpg'
            },
            {
                Name: 'Vincent van Gogh',
                Country: 'Netherlands',
                Born: 1853,
                Died: 1890,
                Bio: 'Vincent Willem van Gogh was a Dutch post-impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade he created about 2,100 artworks, including around 860 oil paintings, most of them in the last two years of his life.',
                Paintings: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg/457px-Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Whitehousenight.jpg/722px-Whitehousenight.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Van_Gogh_The_Olive_Trees..jpg/754px-Van_Gogh_The_Olive_Trees..jpg'
            },
            {
                Name: 'Edgar Degas',
                Country: 'France',
                Born: 1834,
                Died: 1917,
                Bio: 'Edgar Degas was a French artist famous for his paintings, sculptures, prints, and drawings. He is especially identified with the subject of dance; more than half of his works depict dancers. Regarded as one of the founders of Impressionism, he rejected the term, preferring to be called a realist.',
                Paintings: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Edgar_Degas_-_The_Ballet_Class_-_Google_Art_Project.jpg/522px-Edgar_Degas_-_The_Ballet_Class_-_Google_Art_Project.jpg,https://upload.wikimedia.org/wikipedia/commons/8/83/Edgar_Degas_-_At_the_Races.jpg'
            },
            {
                Name: 'Shen Zhou',
                Country: 'China',
                Born: 1427,
                Died: 1509,
                Bio: 'Shen Zhou, courtesy name Qi\'nan and Shitian, was a Chinese painter in the Ming dynasty.',
                Paintings: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Poet_on_a_Mountaintop.jpg/800px-Poet_on_a_Mountaintop.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lofty_Mt.Lu_by_Shen_Zhou.jpg/304px-Lofty_Mt.Lu_by_Shen_Zhou.jpg'
            },
            {
                Name: 'Ivan Milev',
                Country: 'Bulgaria',
                Born: 1897,
                Died: 1927,
                Bio: 'Ivan Milev Lalev was a Bulgarian painter and scenographer regarded as the founder of the Bulgarian Secession and a representative of Bulgarian modernism, combining symbolism, Art Nouveau and expressionism in his work. Ivan Milev was born in the town of Kazanlak in the family of shepherd Milyu Lalev.',
                Paintings: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Svetogorska_legenda_1926.jpg,https://upload.wikimedia.org/wikipedia/commons/9/93/Ahinora_1922_%28Anna_Orozova_model%29.jpg'
            }
        ],
        dataFields: [
            'Name: string',
            'Country: string',
            'Born: number',
            'Died: number',
            'Bio: string',
            'Paintings: string'
        ]
    });
    columns = [
        { label: 'Name', dataField: 'Name', icon: 'name' },
        { label: 'Country', dataField: 'Country', icon: 'country' },
        { label: 'Born', dataField: 'Born', icon: 'born' },
        { label: 'Died', dataField: 'Died', icon: 'died' },
        { label: 'Bio', dataField: 'Bio', icon: 'bio' },
        { label: 'Paintings', dataField: 'Paintings', icon: 'paintings', image: true }
    ];
    collapsible: boolean = true;
    coverField: string = 'Paintings';
    titleField: string = 'Name';

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	}	
}