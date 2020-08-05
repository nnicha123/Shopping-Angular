import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css'],
})
export class BagsComponent implements OnInit {
  items = [
    {
      image: '../../assets/bags/black-red-tulip.jpg',
      title: 'Black and Red Tulip',
      price: 30,
      quantity: 1,
    },
    {
      image: '../../assets/bags/red-pink-tulip.jpg',
      title: 'Sweet Pink Tulip',
      price: 10,
      quantity: 1,
    },
    {
      image: '../../assets/bags/natural-yellow-tulip.jpg',
      title: 'Natural Yellow Tulip',
      price: 35,
      quantity: 1,
    },
    {
      image: '../../assets/bags/doctor-maroon.jpg',
      title: "Doctor's Maroon",
      price: 25,
      quantity: 1,
    },
    {
      image: '../../assets/bags/doctor-navy.jpg',
      title: "Doctor's Navy",
      price: 41,
      quantity: 1,
    },
    {
      image: '../../assets/bags/doctor-black.jpg',
      title: "Doctor's Black",
      price: 21,
      quantity: 1,
    },
  ];
  constructor(private taskService: TaskService) {}
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
  ngOnInit(): void {}
}
