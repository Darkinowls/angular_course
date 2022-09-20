import { Injectable } from '@angular/core';
import { LEADERS } from '../database/leaders';
import { Leader } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  async getLeaders(): Promise<Leader[]> {
    return LEADERS;
  }

  async getLeaderById(id: string): Promise<Leader> {
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }

  async getFeaturedLeader(): Promise<Leader> {
    return LEADERS.filter((leader) => leader.featured)[0];
  }

  constructor() { }
}
