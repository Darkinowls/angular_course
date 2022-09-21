import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish'
import { DISHES } from '../database/dishes'


@Injectable({
  providedIn: 'root'
})
export class DishService {

  async getDishes(): Promise<Dish[]> {
    return new Promise(
      resolve => {
        setTimeout(() => resolve(DISHES), 2_000)
      })
  }


  async getDishById(id: string): Promise<Dish> {
    return new Promise(resolve => { setTimeout(() => resolve(DISHES.filter(dish => (dish.id === id))[0]), 2_000) });
  }

  async getFeaturedDish(): Promise<Dish> {
    return new Promise(
      resolve => {
        setTimeout(
          () =>
            resolve(
              DISHES.filter(
                dish => dish.featured)[0]), 2_000)
      });
  }



  constructor() { }
}
