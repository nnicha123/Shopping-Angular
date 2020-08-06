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
  loginUser(username: string, password: string) {
    return this.webReqService.post('users/login', { username, password });
  }
  addCheckout(userId: string, item: Item) {
    return this.webReqService.post(`${userId}/checkouts`, item);
  }
  addFavourite(userId: string, item: Object) {
    return this.webReqService.post(`${userId}/favourites`, item);
  }
  getCheckout(userId: string) {
    return this.webReqService.get(`${userId}/checkouts`);
  }
  getFavourite(userId: string) {
    return this.webReqService.get(`${userId}/favourites`);
  }
  deleteCheckout(userId: string, id: string) {
    console.log(userId, id);
    return this.webReqService.delete(`${userId}/checkouts/${id}`);
  }
  deleteFavourite(userId: string, id: string) {
    return this.webReqService.delete(`${userId}/favourites/${id}`);
  }
  updateCheckOut(userId: string, id: string, newQuantity: number) {
    return this.webReqService.put(`${userId}/checkouts/${id}`, {
      quantity: newQuantity,
    });
  }
}
