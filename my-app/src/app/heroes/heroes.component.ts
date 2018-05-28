import { Component, OnInit, OnChanges, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked, OnDestroy, DoCheck } from '@angular/core';
import {Hero} from '../hero';
//2//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  //1// hero:Hero={
  //   id:1,
  //   name:'Windstorm'
  // };

  //3//selectedHero:Hero;  // As hero detail is now opened in separate page/view.

  //2//heroes = HEROES;

  heroes: Hero[];
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  //3// onSelect(hero:Hero):void{
  //   this.selectedHero = hero;
  // }

  //For Synchronous method, non obsevable return type
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  //For calling method defined as Asynchronous or observable return type in service also uses OF function
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
