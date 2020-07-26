import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesProviderService } from '../providers/filmes-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies = null;
  counter = 0;
  challengeMovies = new Array();

  constructor(
    private router: Router,
    private moviesProvider: FilmesProviderService
  ) {
    this.getMovies()
  }

  ngOnInit() {
  }

  getMovies() {
    this.moviesProvider.getMovies().subscribe(data => {
      if (data != null && data != 'undefined') {
        this.movies = data;
        this.movies.sort(this.dynamicSort("titulo"));
      }
    });
  }

  changeCheck(event) {
    if (event.checked == true) {
      if (this.challengeMovies.length != 8) {
        this.challengeMovies.push(this.getMovieById(event.source.value));
      } else {
        event.source.checked = false;
      }
    } else {
      this.removeMovie(event.source.value);
    }
    console.log(this.challengeMovies);
  }

  getMovieById(id) {
    return this.movies.find(x => x.id == id);
  }

  removeMovie(id) {
    const index: number = this.challengeMovies.findIndex(x => x.id == id);
    if (index !== -1) {
      this.challengeMovies.splice(index, 1);
    }
  }

  dynamicSort(property) {
    var sortOrder = 1;

    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function (a, b) {
      if (sortOrder == -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    }
  }

}
