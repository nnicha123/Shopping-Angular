import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { Item } from './models/item.model';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(
    private router: Router,
    private webReqService: WebRequestService
  ) {}
  registerUser(user: User) {
    return this.webReqService.post('users/register', user);
  }
  loginUser(username:string,password:string){
    return this.webReqService.post('users/login',{username,password})
  }
}
