import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  favourite = [
    {
      id: 1,
      image: '../../assets/cakes/blackwedding.PNG',
      title: 'The black wedding cake',
      price: 30,
      quantity: 1,
    },
    {
      id: 2,
      image: '../../assets/cakes/cupcake.PNG',
      title: 'The pink jolly cupcake',
      price: 10,
      quantity: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
