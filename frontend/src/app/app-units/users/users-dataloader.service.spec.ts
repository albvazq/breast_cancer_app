import {TestBed} from '@angular/core/testing';

import {UsersDataloaderService} from './users-dataloader.service';

describe('UsersDataloaderService', () => {
  let service: UsersDataloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersDataloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
