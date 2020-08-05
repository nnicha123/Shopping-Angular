import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User;
  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {}
  registerUser(username: string, password: string, name: string) {
    this.user = {
      username,
      password,
      name,
    };
    this.taskService.registerUser(this.user).subscribe((res: User) => {
      console.log(res);
      this.router.navigate(['/login']);
    });
  }
}
