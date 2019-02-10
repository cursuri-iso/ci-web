import { async, TestBed } from '@angular/core/testing';
import { DomainLibModule } from './domain-lib.module';

describe('DomainLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DomainLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DomainLibModule).toBeDefined();
  });
});
