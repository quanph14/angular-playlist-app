import { TestBed } from '@angular/core/testing';

import { SongService } from './date-util.service';

describe('SongService', () => {
  let service: SongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
