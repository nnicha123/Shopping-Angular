import { Component, OnInit } from '@angular/core';
import { Checkout } from '../models/checkout.model';
import { Item } from '../models/item.model';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css'],
})
export class CakesComponent implements OnInit {
  items = [
    {
      image: '../../assets/cakes/blackwedding.PNG',
      title: 'The black wedding cake',
      price: 30,
      quantity: 1,
    },
    {
      image: '../../assets/cakes/cupcake.PNG',
      title: 'The pink jolly cupcake',
      price: 10,
      quantity: 1,
    },
    {
      image: '../../assets/cakes/icecream.PNG',
      title: 'The chocolate drip cake',
      price: 35,
      quantity: 1,
    },
    {
      image: '../../assets/cakes/conecake.PNG',
      title: 'The icecream cone cake',
      price: 25,
      quantity: 1,
    },
    {
      image: '../../assets/cakes/bluewedding.PNG',
      title: 'The blue wedding cake',
      price: 41,
      quantity: 1,
    },
    {
      image: '../../assets/cakes/lightpinkcake.PNG',
      title: 'The pink tall cake',
      price: 21,
      quantity: 1,
    },
    {
      image: '../../assets/cakes/macaroons.PNG',
      title: 'Colorful Macaroons',
      price: 15,
      quantity: 1,
    },
    {
      image: '../../assets/cakes/orangecake.PNG',
      title: 'Orange fruit cake',
      price: 16,
      quantity: 1,
    },
  ];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}
  addCheckout(item: Item) {
    this.taskService.addCheckout(item).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }
  addFavourite(item: Object) {
    this.taskService.addFavourite(item).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }
}
