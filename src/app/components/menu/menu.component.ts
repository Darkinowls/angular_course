import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/shared/dish';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  selectedDish: Dish;


  constructor(private dishService: DishService) {
    this.dishes = this.dishService.getDishes();
    this.selectedDish = this.dishes[0];

  }


  ngOnInit(): void {
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish
  }


}
