import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  BASE_CURR_NAME = 'USD';
  currencyByName(name: string): any {
    return this.currencies().find(c => c.currency === name);
  }
  convert(fromAmount: any, fromCurrName: any, toCurrName: any, round = true): any {
    if (fromCurrName === toCurrName) return fromAmount;
    const baseCurr = this.currencyByName(this.BASE_CURR_NAME) 
    if (fromCurrName === baseCurr.currency) { // convert from usd
      const toCurr = this.currencyByName(toCurrName); 
      if (!round) return fromAmount * toCurr.value;
      return Math.round(100 * fromAmount * toCurr.value) / 100;
    } else if (toCurrName === baseCurr.currency) { // to usd
      const fromCurr = this.currencyByName(fromCurrName); 
      return round ? Math.round(100 * fromAmount / fromCurr.value) / 100 : fromAmount / fromCurr.value;
    } else {
      const baseAmount = this.convert(fromAmount, fromCurrName, this.BASE_CURR_NAME, false);
      return Math.round(100 * this.convert(baseAmount, this.BASE_CURR_NAME, toCurrName, false)) / 100;
    }
  }

  constructor() { }

  currencies(): any[] {
    return [
      { currency: 'USD', value: 1 },
      { currency: 'RSA', value: 15.11002 },
      { currency: 'GBP', value: 0.719154 },
      { currency: 'CAD', value: 1.260046 },
      { currency: 'CHF', value: 0.933058 },
      { currency: 'EUR', value: 0.806942 },
    ];
  }
}