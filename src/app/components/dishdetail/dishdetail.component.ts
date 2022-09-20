import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';
import { Dish } from 'src/app/shared/dish';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {

  dish: Dish | null = null;

  constructor(private dishService: DishService, private location: Location, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let id: string = this.route.snapshot.params['id']
    this.dishService.getDishById(id).then((dish) => this.dish = dish)
  }

  goBack(): void {
    this.location.back()
  }


}
