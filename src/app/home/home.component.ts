import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesProviderService } from '../providers/filmes-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: any = null;

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
      console.log(data)
      if (data != null && data != 'undefined') {
        this.movies = data;
        console.log(this.movies, "os filmes");
      }
    });
  }


}
