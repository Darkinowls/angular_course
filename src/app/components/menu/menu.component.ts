import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/shared/dish';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] | null = null;
  selectedDish: Dish | null = null;


  constructor(private dishService: DishService) {
    this.dishService.getDishes().subscribe(dishes => {
      this.dishes = dishes
      this.selectedDish = dishes[0]
    })

  }


  ngOnInit(): void {
  }


  onSelect(dish: Dish) {
    this.selectedDish = dish
  }


}
