import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


import {Validators, FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-dashboard',
  // template:`<form class="formly" role="form" novalidate [formGroup]="form" (ngSubmit)="submit(user)">
  //       <formly-form [model]="user" [fields]="userFields">
  //           <button type="submit" class="btn btn-default">Button</button>
  //       </formly-form>
  //   </form>`,
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

//  form: FormGroup = new FormGroup({});
//   userFields: FormlyFieldConfig[] = [
    
//     {
//     className: 'row',
//     fieldGroup: [
//       {
//         className: 'col-xs-6',
//         key: 'email',
//         type: 'input',
//         templateOptions: {
//             type: 'email',
//             label: 'Email address',
//             placeholder: 'Enter email'
//         },
//         validators: {
//           validation: Validators.compose([Validators.required])
//         }
//       },
       
//       {
//         className: 'col-xs-6',
//         key: 'password',
//         type: 'input',
//         templateOptions: {
//             type: 'password',
//             label: 'Password',
//             placeholder: 'Password',
//             pattern: ''
//         },
//         validators: {
//           validation: Validators.compose([Validators.required])
//         }
//     }]
//   }];

//   user = {
//     email: 'email@gmail.com',
//     checked: false
//   };

//   submit(user) {
//     console.log(user);
//   }
}
