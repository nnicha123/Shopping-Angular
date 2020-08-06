import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Item } from '../models/item.model';
import { ActivatedRoute, Params } from '@angular/router';

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
  userId: string;
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.userId) {
        this.userId = params.userId;
      }
    });
  }
  addCheckout(item: Item) {
    this.taskService.addCheckout(this.userId, item).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }
  addFavourite(item: Object) {
    this.taskService.addFavourite(this.userId, item).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }
}
