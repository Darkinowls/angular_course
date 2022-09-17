import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../shared/database/promotions';
import { Promotion } from '../shared/promotion';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotionById(id: string): Promotion {
    return PROMOTIONS.filter((promotion) => (promotion.id === id))[0];
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promotion) => promotion.featured)[0];
  }

  constructor() { }
}
