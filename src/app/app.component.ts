import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'currency-calculator';

  firstData: any;
  secondData: any;
  currencies: any[] = [];

  constructor(private currencyService: CurrencyService) { }
  ngOnInit(): void {
    this.currencies = this.currencyService.currencies();
  }

  currencyChangedFirst(data: any): void {
    this.firstData = data;
    if (data && data.amount && data.currency && this.secondData && this.secondData.currency) {
      this.secondData.amount = this.currencyService.convert(this.firstData.amount, this.firstData.currency, this.secondData.currency);
    }
  }

  currencyChangedSecond(data: any): void {
    this.secondData = data;
    if (this.firstData && this.firstData.amount && this.secondData && this.secondData.currency) {
      this.secondData.amount = this.currencyService.convert(this.firstData.amount, this.firstData.currency, this.secondData.currency);
    }
  }

}
