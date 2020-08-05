import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  items = [
    {
      image: '../../assets/games/game1.PNG',
      title: 'Adventurous Railway',
      price: 30,
      quantity: 1,
    },
    {
      image: '../../assets/games/game2.PNG',
      title: 'Sammy Suafeas',
      price: 10,
      quantity: 1,
    },
    {
      image: '../../assets/games/game3.PNG',
      title: 'Logical thinking game',
      price: 35,
      quantity: 1,
    },
    {
      image: '../../assets/games/game4.PNG',
      title: 'Train disaster',
      price: 25,
      quantity: 1,
    },
    {
      image: '../../assets/games/game5.PNG',
      title: 'Drop the balls',
      price: 41,
      quantity: 1,
    },
    {
      image: '../../assets/games/game6.PNG',
      title: 'Exciting pinballs',
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
