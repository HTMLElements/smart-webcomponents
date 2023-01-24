import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { Hero } from './hero';
import { HeroesService } from './heroes.service';

import { GridComponent, Smart, DataAdapter } from 'smart-webcomponents-angular/grid';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  providers: [HeroesService],
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements AfterViewInit {
  heroes: Hero[];

  constructor(private heroesService: HeroesService) { }

  @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

  layout: object = {
    rowHeight: 35
  }

  dataAdapter: DataAdapter = new Smart.DataAdapter({
    dataSource: [],
    dataFields: [
      'id: number',
      'name: string',
      'action: string'
    ]
  })

  dataSource = this.dataAdapter;

  editing = {
    enabled: true,
    action: 'click',
    addDialog: {
      enabled: true
    }
  }

  columns = [
    {
      label: 'ID', dataField: 'id', allowEdit: false, cellsAlign: 'center', align: 'center'
    },
    {
      label: 'Hero Name', dataField: 'name', width: '70%', cellsAlign: 'center', align: 'center'
    },
    {
      label: 'Delete', dataField: 'action', allowEdit: false, template:
        function (formatObject: any) {
          if (!formatObject.template) {
            formatObject.template = '<smart-button class="delete-row-button">X</smart-button>';
          }
        }
    }
  ]

  getHeroes(): void {
    const that = this;

    that.heroesService.getHeroes()
      .subscribe(heroes => {
        that.heroes = heroes;
        that.dataAdapter.dataSource = heroes;
      });
  }

  add(event: CustomEvent, name: string): void {
    const that = this;

    name = name.trim();

    if (!name) {
      return;
    }

    // The server will generate the id for this new hero
    const newHero: Hero = { name } as Hero;

    that.heroesService
      .addHero(newHero)
      .subscribe(hero => {
        that.heroes.push(hero);
        that.dataAdapter.dataSource = that.heroes;
      });
  }

  delete(hero: Hero): void {
    const that = this;

    that.heroes = that.heroes.filter(h => h !== hero);
    that.dataAdapter.dataSource = that.heroes;

    that.heroesService
      .deleteHero(hero.id)
      .subscribe();
  }

  search(event: CustomEvent, searchTerm: string) {
    const that = this;

    if (searchTerm) {
      that.heroesService
        .searchHeroes(searchTerm)
        .subscribe(heroes => {
          that.heroes = heroes;

          that.dataAdapter.dataSource = heroes;
        });
    }
    else {
      that.getHeroes();
    }
  }

  update(editHero: Hero) {
    const that = this;

    if (editHero) {
      that.heroesService
        .updateHero(editHero)
        .subscribe(hero => {
          // replace the hero in the heroes list with update from server
          const ix = hero ? that.heroes.findIndex(h => h.id === hero.id) : -1;

          if (ix > -1) {
            that.heroes[ix] = hero;
            that.dataAdapter.dataSource = that.heroes;
          }
        });
    }
  }

  ngOnInit() {
    this.getHeroes();
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
    this.init();
  }

  timer: any = null;
  
  init(): void {
    // init code.

    const that = this,
      grid = that.grid;

    //Delete a Hero
    grid.addEventListener('rowClick', function (event: CustomEvent): void {
      const button = event.detail.originalEvent.target.closest('smart-button') as HTMLElement;
	  const element = event.detail.originalEvent.target as HTMLElement;
		
      if (!button) {
        return;
      }

      const heroIndex = event.detail.row.index;

      if (button.classList.contains('delete-row-button')) {
		
		if (that.timer) {
			clearTimeout(that.timer);
		}
		
		that.timer = setTimeout(() => {
			that.delete(that.heroes[heroIndex]);
		}, 100);
      }
    });

    //Update the hero
    grid.addEventListener('endEdit', function (event: CustomEvent): void {
      const heroIndex = event.detail.row.index,
        hero = that.heroes[heroIndex];

      if (!hero) {
        return;
      }

      hero.name = event.detail.cell.value;

      that.update(hero);
    });
  }
}
