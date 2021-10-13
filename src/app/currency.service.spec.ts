import { TestBed } from '@angular/core/testing';

import { CurrencyService } from './currency.service';

fdescribe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate USD to Rands', () => {
    expect(service.convert(100, 'USD', 'RSA')).toEqual(1511);
  });
  it('should calculate Rands to USD', () => {
    expect(service.convert(1502, 'RSA', 'USD')).toEqual(99.4);
  });
  it('should calculate USD to USD', () => {
    expect(service.convert(100, 'USD', 'USD')).toEqual(100);
  });
  it('should calculate Rands to Rands', () => {
    expect(service.convert(100, 'RSA', 'RSA')).toEqual(100);
  });
  it('should calculate Rands to GBP', () => {
    expect(service.convert(100, 'RSA', 'GBP')).toEqual(4.76);
  });
  it('should calculate GBP to Rands', () => {
    expect(service.convert(100, 'GBP', 'RSA')).toEqual(2101.08);
  });
});
