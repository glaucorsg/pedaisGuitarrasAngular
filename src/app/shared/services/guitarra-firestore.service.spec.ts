import { TestBed } from '@angular/core/testing';

import { GuitarraFirestoreService } from './guitarra-firestore.service';

describe('GuitarraFirestoreService', () => {
  let service: GuitarraFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitarraFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
