import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish'
import { DISHES } from '../database/dishes'


@Injectable({
  providedIn: 'root'
})
export class DishService {

  async getDishes(): Promise<Dish[]> {
    return DISHES;
  }


  async getDishById(id: string): Promise<Dish> {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  async getFeaturedDish(): Promise<Dish> {
    return DISHES.filter((dish) => dish.featured)[0];
  }



  constructor() { }
}
