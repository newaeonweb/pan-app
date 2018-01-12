import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-game',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})

export class GameDetailComponent implements OnInit {
  public game: any;

  constructor() { }

  ngOnInit() {
    this.getGame();
  }

  public getGame () {
    const game = JSON.parse(window.localStorage.getItem('game'));
    this.game = game.item;
  }

}
