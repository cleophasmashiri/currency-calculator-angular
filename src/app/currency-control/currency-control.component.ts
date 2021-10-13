import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-control',
  templateUrl: './currency-control.component.html',
  styleUrls: ['./currency-control.component.css']
})
export class CurrencyControlComponent implements OnInit {

  @Input()
  amount: number = 0;

  // @Input()
  currencyName: any;

  @Output()
  currencyChanged = new EventEmitter<any>();

  currencies: any[] = []; //= [{name: 'USD', value: 1}, {name: 'RSA', value: 15}];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencies = this.currencyService.currencies();
  }

  handleAmountChanged(val: any): void {
    this.amount = val;
    this.currencyChanged.emit({amount: this.amount, currency: this.currencyName});
    // console.log(val);
  }

  handleCurrencyChanged(val: any): void {
    this.currencyName = val;
    this.currencyChanged.emit({amount: this.amount, currency: this.currencyName});
    // console.log(val);
  }

}
