import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit {
  activeTag: boolean[];
  constructor() {}

  ngOnInit(): void {
    this.activeTag = [true, false, false, false];
  }
}
