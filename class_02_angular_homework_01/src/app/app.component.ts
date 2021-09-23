import { Person, Subject } from './helpers/index.helper';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular-class-second';

  oneYear: number = 365;

  firstName: string = 'LiMi';
  lastName: string = 'Misini';
  age: number = 20;

  fullName(): string {
    return `First Name: ${this.firstName} --- Last Name: ${this.lastName} --- Age: ${this.age}`;
  }

  personFullName(person: Person): string {
    const { firstName, lastName, age, carModel = 'porsche' } = person;
    return `first name: ${firstName}, last name: ${lastName}, age: ${age}, car model: ${carModel}`;
  }

  userInformation = {
    name: 'limi',
    lastName: 'misini',
    age: 20,
  };

  user1: Person = {
    firstName: 'john',
    lastName: 'doe',
    age: 24,
  };

  readonly imgUrl: string = `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png`;
  readonly logoTitle: string = 'TYPESCRIPT';

  todaysClass: Subject = 'react';

  changeClass() {
    this.todaysClass = 'angular';
  }

  numberOfClasses: number = 0;

  changeNumberOfClasses() {
    this.numberOfClasses = 15;
  }

  // handleText(event: any) { dont use any here
  //   console.log(event.target.value);
  // }

  inputValue: string = '';

  handleText(event: Event) {
    const targetValue = (<HTMLInputElement>event.target).value;
    console.log(`targetValue:`, targetValue);

    const target = event.target as HTMLInputElement;
    console.log(target.value);

    this.inputValue = target.value;
  }

  movieListTitle: string = 'MOVIE-LIST-COMPONENT-TITLE';

  movieTitle: string = 'MOVIE-COMPONENT-TITLE';
}
