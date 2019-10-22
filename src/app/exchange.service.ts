import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';

import { ExchangeRateValueResp } from './Interfaces/ExchangeRateValueResp'
import { Conversion } from './Interfaces/conversion'

import { Observable, throwError, PartialObserver } from 'rxjs';


import { environment } from '../environments/environment'
import { Lookup } from '../app/Interfaces/Lookup'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ExchangeService{

  constructor(
    private http: HttpClient,
    )
    {
    }

  postExchnageRate (conversion: Conversion): Observable<ExchangeRateValueResp>{
    return this.http.post<ExchangeRateValueResp>(environment.exchangeUrl, conversion, httpOptions);
  }

  getCurrencyCode (): Observable<Lookup[]>{
    return this.http.get<Lookup[]>(environment.currencyCodeUrl, httpOptions);
  }

  getTransactionType (): Observable<Lookup[]>{
    return this.http.get<Lookup[]>(environment.transactionTypeUrl, httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
