import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../database/promotions';
import { Promotion } from '../shared/promotion';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  async getPromotions(): Promise<Promotion[]> {
    return PROMOTIONS;
  }

  async getPromotionById(id: string): Promise<Promotion> {
    return PROMOTIONS.filter(promotion => promotion.id === id)[0];
  }

  async getFeaturedPromotion(): Promise<Promotion> {
    return PROMOTIONS.filter(promotion => promotion.featured)[0];
  }

  constructor() { }
}
