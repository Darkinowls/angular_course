import { Component, OnInit } from '@angular/core';
import { Dish } from "../shared/dish";
import { DishService } from '../services/dish.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    // this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish
  }


}
