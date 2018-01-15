import { Component, OnInit } from '@angular/core';
import { DataDetailService } from './data-detail.service';

@Component({
  moduleId: module.id,
  selector: 'app-game',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})

export class GameDetailComponent implements OnInit {
  public getLocalStorage: any;
  public gameObj: any;

  constructor(private data: DataDetailService) { }

  ngOnInit() {
    this.getGame();
  }

  public checkLocalStorage () {
    this.getLocalStorage = window.localStorage.getItem('game');
    if (this.getLocalStorage) {
      this.gameObj = JSON.parse(this.getLocalStorage);
    } else {
      this.data.currentGame.subscribe(data => this.gameObj = data);
    }
  }

  public getGame () {
    this.checkLocalStorage();
  }

}
