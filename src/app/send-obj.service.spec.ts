import { TestBed } from '@angular/core/testing';

import { SendObjService } from './send-obj.service';

describe('SendObjService', () => {
  let service: SendObjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendObjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
