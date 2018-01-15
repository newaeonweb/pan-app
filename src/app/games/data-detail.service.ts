import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataDetailService {
  private gameSource = new BehaviorSubject<Object>({ops: 'reload'});
  currentGame = this.gameSource.asObservable();

  constructor() { }

  changeGame(game: Object) {
    this.gameSource.next(game);
  }

}
