import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish'
import { DISHES } from '../database/dishes'
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000))
  }


  getDishById(id: string): Observable<Dish> {
    return of(DISHES.filter(dish => (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(
      DISHES.filter(
        dish => dish.featured)[0]).pipe(delay(2000))
  }

  getDishIds(): Observable<string[]> {
    return of(DISHES.map(dish => dish.id))

  }



  constructor() { }
}
