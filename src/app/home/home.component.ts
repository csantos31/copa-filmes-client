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

  challenge() {
    this.moviesProvider.challengeMovies(this.challengeMovies).subscribe(data => {
      if (data != null && data != 'undefined') {
        this.router.navigate(['/final'], { state: { data: data } });
      }
    });
  }
}
