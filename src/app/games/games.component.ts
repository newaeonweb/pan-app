import { Component, OnInit } from '@angular/core';
import { GamesService } from './games.service';
import { GameInterface } from './games.interface';

@Component({
  moduleId: module.id,
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {
  public gamesList: GameInterface[];
  public searchText: string;
  public selectedFilter: string;
  public requestError: any;
  public isLoading = false;
  public deviceWidth: number;

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.checkDeviceWidth();
    this.getGames();
  }

  public filterProperty (property: string): void {
    this.selectedFilter = property;
  }

  public removeFilter (): void {
    this.selectedFilter = undefined;
  }

  public viewDetail (item: any) {
    window.localStorage.setItem('game', JSON.stringify({item}));
  }

  public checkDeviceWidth () {
    this.deviceWidth = window.screen.width;
    if (this.deviceWidth >= 992) {
      return 100;
    } else if (this.deviceWidth <= 768 && this.deviceWidth >= 576) {
      return 50;
    } else {
      return 25;
    }
  }

  public getGames () {
    this.isLoading = true;
    return this.gamesService.get(this.checkDeviceWidth ()).subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    );
  }

  protected handleResponse (response: any) {
    this.isLoading = false;
    this.requestError = null;
    return this.gamesList = response['top'];
  }

  protected handleError (error: any) {
    this.isLoading = false;
    return this.requestError = error;
  }
}
