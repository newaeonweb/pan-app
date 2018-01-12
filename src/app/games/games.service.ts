import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GamesService {
  private url = 'https://api.twitch.tv/kraken/games/top?limit=';

  constructor(private http: HttpClient) { }

  get(limit: number) {
    return this.http.get(this.url + limit, {
      headers: new HttpHeaders({'Client-ID': 'mxl119qecihacudeg6lmx6m7cf0yqb'}),
    }).pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error);
  }

}
