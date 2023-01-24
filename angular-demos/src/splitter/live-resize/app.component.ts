import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SplitterComponent } from 'smart-webcomponents-angular/splitter';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;

    dataSource: Array<object> = [
        {
            id: 'item0',
            size: 150,
            collapsible: true,
            content: '<h2>TIGER SPECIES</h2>' +
                '<p>The tiger (Panthera tigris) is the largest cat species, most recognizable for its pattern of dark vertical stripes on reddish-orange fur with a lighter underside.The' + 'species is classified in the genus Panthera with the lion, leopard, jaguar, and snow leopard.It is an apex predator, primarily preying on ungulates such as deer and' + 'bovids.It is territorial and generally a solitary but social predator, often requiring large contiguous areas of habitat that support its prey ' + 'requirements.This, coupled with the fact that it is indigenous to some of the more densely populated places on Earth, has caused significant conflicts with humans.</p>' +
                '<p>Tiger populations once ranged widely across Asia, from the Black Sea in the west, to the Indian Ocean in the south, and from Kolyma to Sumatra in the east.Over the ' + 'past 100 years, the species has lost 93% of its historic range, and has been extirpated from Western and Central Asia, from the islands of Java and Bali, and from ' + 'large areas of Southeast, South, and East Asia.Today, it ranges from the Siberian taiga to open grasslands and tropical mangrove swamps, and has been classified as ' + 'endangered in the IUCN Red List.Major reasons for population decline include habitat destruction, habitat fragmentation and poaching.The extent of area inhabited by ' + 'tigers is estimated at less than 1, 184, 911 km2 (457, 497 sq mi), a 41% decline from the area estimated in the mid-1990s.The global wild population is estimated to ' + 'number between 3, 062 and 3, 948 individuals, down from around 100, 000 at the start of the 20th century, with most remaining populations occurring in small pockets ' + 'isolated from each other, in which about 2, 000 tigers live on the Indian subcontinent. In 2016, an estimate of a global wild tiger population of approximately 3, ' + '890 individuals was presented during the Third Asia Ministerial Conference on Tiger Conservation. The WWF declared that the world\'s count of wild tigers has risen' + 'for the first time in a century.</p>'
        },
        {
            id: 'item1',
            content: '<h2>BENGAL TIGER</h2>' +
                '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tiger_in_Ranthambhore.jpg/220px-Tiger_in_Ranthambhore.jpg"/>' +
                '<p>The Bengal tiger\'s coat is yellow to light orange, with stripes ranging from dark brown to black; the belly and the interior parts of the limbs are white, and the tail' + ' is orange with black rings. The white tiger is a recessive mutant of the tiger, which is reported in the wild from time to time in Assam, Bengal, Bihar, and' + 'especially from the former State of Rewa. However, it is not to be mistaken as an occurrence of albinism. In fact, there is only one fully authenticated case of a true' + 'albino tiger, and none of black tigers, with the possible exception of one dead specimen examined in Chittagong in 1846.</p>' +
                '<p>Males have an average total length of 270 to 310 cm (110 to 120 in) including the tail, while females measure 240 to 265 cm (94 to 104 in) on average. The tail is ' + 'typically 85 to 110 cm (33 to 43 in) long, and on average, tigers are 90 to 110 cm (35 to 43 in) in height at the shoulders. The weight of males ranges from 180 to 258 ' + 'kg (397 to 569 lb), while that of the females ranges from 100 to 160 kg (220 to 350 lb). The smallest recorded weights for Bengal tigers are from the Bangladesh ' + ' Sundarbans, where adult females are 75 to 80 kg (165 to 176 lb).</p>' +
                '<p>The tiger has exceptionally stout teeth.Its canines are 7.5 to 10 cm (3.0 to 3.9 in) long and thus the longest among all cats. The greatest length of its skull is 332 ' + 'to 376 mm (13.1 to 14.8 in) </p>'
        }
    ];

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