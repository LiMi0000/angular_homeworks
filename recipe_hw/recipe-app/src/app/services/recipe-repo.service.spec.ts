import { TestBed } from '@angular/core/testing';

import { RecipeRepoService } from './recipe-repo.service';

describe('RecipeRepoService', () => {
  let service: RecipeRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
