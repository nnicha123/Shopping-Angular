import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Checkout } from '../models/checkout.model';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkOut: Checkout[];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getCheckout().subscribe((res: any) => {
      this.checkOut = res;
      console.log(this.checkOut);
    });
  }
  deleteCheckout(checkout: Checkout) {
    this.taskService.deleteCheckout(checkout._id).subscribe((res: any) => {
      window.location.reload();
    });
  }
}
