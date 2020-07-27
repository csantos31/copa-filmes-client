import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {
  winners = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.winners = history.state.data;
  }

  ngOnInit(): void {
  }

}
