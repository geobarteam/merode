import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/hero/heroes.html',
    styleUrls: ['./app/hero/hero.css'],
    directives: [HeroDetailComponent]
})

export class AppComponent { 
    
    public heroes = HEROES;
    selectedHero: Hero;
    
    title = 'Tour of Heroes';
        
    onSelect(hero:Hero){
      this.selectedHero = hero;
    }
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];



