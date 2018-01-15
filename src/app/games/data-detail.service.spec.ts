import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { DataDetailService } from './data-detail.service';

describe('DataDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataDetailService]
    });
  });

  fit('should be created', inject([DataDetailService], (service: DataDetailService) => {
    expect(service).toBeTruthy();
  }));
});
