import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmesProviderService {
  url = 'https://localhost:5000/api/getfilms';

  constructor(public http: HttpClient) { }

  getMovies(){
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return this.http.get(this.url, config).pipe(map(res => {
      return res;
    }));

  }
}
