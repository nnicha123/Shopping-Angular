import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Input() activeTag: boolean[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  // getUserId() {
  //   this.route.params.subscribe((params: Params) => {
  //     console.log(params.userId);
  //   });
  // }
}
