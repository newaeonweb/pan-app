import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { GamesService } from './games.service';

describe('GamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GamesService]
    });
  });

  fit('should be created', inject([GamesService], (service: GamesService) => {
    expect(service).toBeTruthy();
  }));
});
