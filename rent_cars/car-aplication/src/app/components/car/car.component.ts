import { Car } from 'src/app/interfaces/car';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private carService: CarService) {}

  car: Car;

  ngOnInit(): any {
    const carId = this.route.snapshot.params['id'];
    this.car = this.carService.loadCarsById(parseInt(carId))[0];
  }

  orderCar(car: Car) {
    return this.carService.handleOrderCar(car);
  }
}
