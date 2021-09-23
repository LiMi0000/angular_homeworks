import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}

  private cars: Car[] = [
    {
      year: 2016,
      id: 1,
      horsepower: 201,
      make: 'acura',
      model: 'ilx',
      price: 31890,
      img_url:
        'http://ts2.mm.bing.net/th?id=OIP.M7656c6f6aaa4d51c3ddee4b1192adeeeH0&pid=15.1',
    },

    {
      year: 2016,
      id: 2,
      horsepower: 237,
      make: 'alfa-romeo',
      model: '4c',
      price: 55900,
      img_url:
        'http://ts2.mm.bing.net/th?id=OIP.M8a3a74ca54214aa8f59f312b20d67407H0&pid=15.1',
    },

    {
      year: 2016,
      id: 3,
      horsepower: 540,
      make: 'aston-martin',
      model: 'db9-gt',
      price: 198250,
      img_url:
        'http://ts2.mm.bing.net/th?id=OIP.M6ea50edfaf424f185331d4840b695e73o0&pid=15.1',
    },
    {
      year: 2016,
      id: 4,
      horsepower: 552,
      make: 'aston-martin',
      model: 'rapide-s',
      price: 206000,
      img_url:
        'http://ts2.mm.bing.net/th?id=OIP.M8405c51f97d104b4eb7cdfec4e80bb5bo0&pid=15.1',
    },

    {
      year: 2016,
      id: 5,
      horsepower: 568,
      make: 'aston-martin',
      model: 'vanquish',
      price: 287650,
      img_url:
        'http://ts1.mm.bing.net/th?id=OIP.M4b591ff33d9cc70606ddc92e272f9365H0&pid=15.1',
    },
    {
      year: 2016,
      id: 6,
      horsepower: 150,
      make: 'audi',
      model: 'a3',
      price: 42050,
      img_url:
        'http://ts2.mm.bing.net/th?id=OIP.M4fb83fa38daee899e5f9ad959228d1a2H0&pid=15.1',
    },

    {
      year: 2017,
      id: 7,
      horsepower: 252,
      make: 'audi',
      model: 'a4',
      price: 41100,
      img_url:
        'http://ts4.mm.bing.net/th?id=OIP.M5f243f1b175f98760155d0a4536c6f8cH0&pid=15.1',
    },
    {
      year: 2016,
      id: 8,
      horsepower: 252,
      make: 'audi',
      model: 'a6',
      price: 52100,
      img_url:
        'http://ts2.mm.bing.net/th?id=OIP.M87f9a7ad73341027ed0eb94569f2425eH0&pid=15.1',
    },
    {
      year: 2016,
      id: 9,
      horsepower: 333,
      make: 'audi',
      model: 'a7',
      price: 70950,
      img_url:
        'http://ts2.mm.bing.net/th?id=OIP.Mf0b19510177fba1c2bfdc5997876bb2eH0&pid=15.1',
    },
    {
      year: 2016,
      id: 10,
      horsepower: 450,
      make: 'audi',
      model: 'a8',
      price: 90500,
      img_url:
        'http://ts4.mm.bing.net/th?id=OIP.M8b4a9d0b8bb0df22730a6ad913d8b684H0&pid=15.1',
    },
    {
      year: 2016,
      id: 11,
      horsepower: 200,
      make: 'audi',
      model: 'q3',
      price: 33700,
      img_url:
        'http://ts3.mm.bing.net/th?id=OIP.M2d0b16b8ecf93f68d2d40c41719e1036H0&pid=15.1',
    },
    {
      year: 2016,
      id: 12,
      horsepower: 220,
      make: 'audi',
      model: 'q5',
      price: 40900,
      img_url:
        'http://ts3.mm.bing.net/th?id=OIP.Mc096c3be6c7a745ad103236721e34867H0&pid=15.1',
    },
  ];

  loadCars() {
    return this.cars;
  }

  loadCarsById(id: string | number) {
    return this.cars.filter((car) => car.id === id);
  }
}
