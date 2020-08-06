import { Component, OnInit } from '@angular/core';
import { Favourite } from '../models/favourite.model';
import { TaskService } from '../task.service';
import { ActivatedRoute, Params } from '@angular/router';
import { of } from 'rxjs';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  favourite: Favourite[];
  userId: string;
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.userId) {
        this.userId = params.userId;
        this.taskService.getFavourite(params.userId).subscribe((res: any) => {
          console.log(res);
          this.favourite = res;
        });
      }
    });
  }
  deleteFavourite(favourite: Favourite) {
    this.taskService
      .deleteFavourite(this.userId, favourite._id)
      .subscribe((res: any) => {
        console.log(this.userId, favourite._id);
        console.log(res);
        window.location.reload();
      });
  }
}
