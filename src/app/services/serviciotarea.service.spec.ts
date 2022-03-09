import { TestBed } from '@angular/core/testing';

import { ServiciotareaService } from './serviciotarea.service';

describe('ServiciotareaService', () => {
  let service: ServiciotareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciotareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
