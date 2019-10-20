import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ExchangeRateValueResp } from '../Interfaces/ExchangeRateValueResp'
import { Conversion } from '../Interfaces/conversion'
import { TransactionType } from '../Interfaces/transactiontype'
import { Currency } from '../Interfaces/currency'

import { ExchangeService } from '../exchange.service';




@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})

export class ConverterComponent {

  conversionForm: FormGroup;
  responseVal: ExchangeRateValueResp;

    transactionTypes: TransactionType[] = [
      {value: 0, viewValue: 'Buy Transfer'},
      {value: 1, viewValue: 'Buy Cheques'},
      {value: 2, viewValue: 'Sell Cheques'},
      {value: 3, viewValue: 'Buy Notes'},
      {value: 4, viewValue: 'Sell Notes'}
    ];

    currencies: Currency[] = [
      {value: 0, viewValue: 'AED'},
      {value: 1, viewValue: 'AUD'},
      {value: 2, viewValue: 'BWP'},
      {value: 3, viewValue: 'CAD'},
      {value: 4, viewValue: 'CHF'},
      {value: 5, viewValue: 'CNY'},
      {value: 6, viewValue: 'DKK'},
      {value: 7, viewValue: 'EUR'},
    ]


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

    onSubmit(conversion: Conversion) {

       this.exchangeService.postExchnageRate(conversion)
       .subscribe(response => this.responseVal = response);
    }

}
