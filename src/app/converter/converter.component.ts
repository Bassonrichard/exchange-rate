import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ExchangeRateValueResp } from '../Interfaces/ExchangeRateValueResp'
import { Conversion } from '../Interfaces/conversion'
import { Lookup } from '../Interfaces/Lookup'

import { ExchangeService } from '../exchange.service';




@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})

export class ConverterComponent implements OnInit {

  conversionForm: FormGroup;
  responseVal: ExchangeRateValueResp;
  public transactionTypes: Lookup[] = [];
  public currencies: Lookup[] = [];


    constructor(
      private formBuilder: FormBuilder ,
      private exchangeService: ExchangeService,
      )
    {
        this.conversionForm = this.formBuilder.group({
          transactionType: 0,
          currencyCode : 0,
          amount: 0.00
        });
    }

    ngOnInit() {
      this.exchangeService.getTransactionType()
      .subscribe(transactionTypes => this.transactionTypes = transactionTypes);

      this.exchangeService.getCurrencyCode()
      .subscribe(currencies => this.currencies = currencies);
    }

    onSubmit(conversion: Conversion) {

       this.exchangeService.postExchnageRate(conversion)
       .subscribe(response => this.responseVal = response);
    }

}
