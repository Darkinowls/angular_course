import { Component, OnInit } from '@angular/core';
import { LeaderService } from 'src/app/services/leader.service';
import { Leader } from 'src/app/shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[] = [];

  constructor(private leaderService: LeaderService) {
    this.leaderService.getLeaders().then((leaders) => this.leaders = leaders);
  }

  ngOnInit(): void {

  }

}
