import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-game',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})

export class GameDetailComponent implements OnInit {
  public game: any;
  public getLocalStorage: any;
  public gameObj: any;

  constructor() { }

  ngOnInit() {
    this.getGame();
  }

  public getGame () {
    this.getLocalStorage = window.localStorage.getItem('game');
    console.log(this.getLocalStorage);
    if (this.getLocalStorage) {
      this.gameObj = JSON.parse(this.getLocalStorage);
      this.game = this.gameObj;
      console.log(this.game);
    } else {
      return this.game;
    }

  }

}
