import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';
import { Dish } from 'src/app/shared/dish';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {

  dish: Dish | null = null;
  dishIsd: string[] = []
  prev: string = ''
  next: string = ''

  constructor(private dishService: DishService, private location: Location, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.dishService.getDishIds()
      .subscribe(ids => this.dishIsd = ids)
    this.route.params
      .pipe(switchMap((params: Params) => this.dishService.getDishById(params['id'])))
      .subscribe(dish => {
        this.dish = dish
        this.setPrevNext(dish.id)
      })
  }

  setPrevNext(dishId: string) {
    const index = this.dishIsd.indexOf(dishId)
    const length = this.dishIsd.length
    this.prev = this.dishIsd[(length + index - 1) % length]
    this.next = this.dishIsd[(length + index + 1) % length]
  }

  goBack(): void {
    this.location.back()
  }


}
