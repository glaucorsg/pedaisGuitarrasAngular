import { TestBed } from '@angular/core/testing';

import { PedalFirestoreService } from './pedal-firestore.service';

describe('PedalFirestoreService', () => {
  let service: PedalFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedalFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
