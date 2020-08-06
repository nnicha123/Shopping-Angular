import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Checkout } from '../models/checkout.model';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkOut: Checkout[];
  currentQuantity: number;
  userId: string;
  total: number = 0;
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.userId) {
        this.taskService.getCheckout(params.userId).subscribe((res: any) => {
          this.checkOut = res;
          this.userId = params.userId;
          for (let i = 0; i < this.checkOut.length; i++) {
            this.total += this.checkOut[i].price * this.checkOut[i].quantity;
          }
        });
      }
    });
  }
  deleteCheckout(checkout: Checkout) {
    console.log(this.userId, checkout._id);
    this.taskService
      .deleteCheckout(this.userId, checkout._id)
      .subscribe((res: any) => {
        // this.total -= checkout.quantity * checkout.price;
        console.log(res);
        window.location.reload();
      });
  }
  addQuantity(checkout: Checkout) {
    this.currentQuantity = checkout.quantity + 1;
    console.log(this.currentQuantity);
    this.taskService
      .updateCheckOut(this.userId, checkout._id, this.currentQuantity)
      .subscribe((res: any) => {
        console.log(res);
        window.location.reload();
      });
  }
  deleteQuantity(checkout: Checkout) {
    this.currentQuantity = checkout.quantity - 1;
    console.log(this.currentQuantity);
    this.taskService
      .updateCheckOut(this.userId, checkout._id, this.currentQuantity)
      .subscribe((res: any) => {
        console.log(res);
        window.location.reload();
      });
  }
}
