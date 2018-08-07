import { TestBed, inject } from '@angular/core/testing';

import { EntityService } from './entity.service';
import { BaseEntity } from './models/base.model';

describe('EntityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntityService]
    });
  });

  it('should be created', inject([EntityService], (service: EntityService<BaseEntity>) => {
    expect(service).toBeTruthy();
  }));
});
