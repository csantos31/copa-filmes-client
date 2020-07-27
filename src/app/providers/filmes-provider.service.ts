import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmesProviderService {
  url = 'https://copa-filmes-server.herokuapp.com/api/';

  constructor(public http: HttpClient) { }

  getMovies() {
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.get(this.url + 'getfilms', config).pipe(map(res => {
      return res;
    }));
  }

  challengeMovies(movies) {
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    var body = movies;

    return this.http.post(this.url + 'challenge', body, config).pipe(map(res => {
      return res;
    }));
  }
}
