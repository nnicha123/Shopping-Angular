import { Component, OnInit } from '@angular/core';
import { Favourite } from '../models/favourite.model';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  favourite: Favourite[];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getFavourite().subscribe((res: any) => {
      console.log(res);
      this.favourite = res;
    });
  }
  deleteFavourite(favourite: Favourite) {
    this.taskService.deleteFavourite(favourite._id).subscribe((res: any) => {
      window.location.reload();
    });
  }
}
