import { TestBed } from '@angular/core/testing';

import { FilmesProviderService } from './filmes-provider.service';

describe('FilmesProviderService', () => {
  let service: FilmesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
