/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestdataService } from './testdata.service';

describe('TestdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestdataService]
    });
  });

  it('should ...', inject([TestdataService], (service: TestdataService) => {
    expect(service).toBeTruthy();
  }));
});
