import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/services/dish.service';
import { LeaderService } from 'src/app/services/leader.service';
import { PromotionService } from 'src/app/services/promotion.service';
import { Dish } from 'src/app/shared/dish';
import { Leader } from 'src/app/shared/leader';
import { Promotion } from 'src/app/shared/promotion';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish | null = null
  promotion: Promotion | null = null
  leader: Leader | null = null

  constructor(private dishService: DishService, private promotionService: PromotionService, private leaderService: LeaderService) {
  }

  ngOnInit(): void {
    this.dish = this.dishService.getFeaturedDish()
    this.promotion = this.promotionService.getFeaturedPromotion()
    this.leader = this.leaderService.getFeaturedLeader()
  }

}
