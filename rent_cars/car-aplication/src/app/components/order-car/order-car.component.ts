import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-order-car',
  templateUrl: './order-car.component.html',
  styleUrls: ['./order-car.component.css'],
})
export class OrderCarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private carService: CarService) {}

  carsOrdered: Car[] = [];

  ngOnInit(): void {
    console.log('id:', this.route.snapshot.params['id']);

    // const carId = this.route.snapshot.params['id'];

    // this.car = this.carService.loadCarsById(parseInt(carId))[0];

    this.carsOrdered = this.carService.carsOrdered;
  }
}
