export class Conversion {

  public constructor(amount: number, currencyCode: number, transactionType: number)
  {
    this.amount = +amount.toFixed(2);
    this.currencyCode = currencyCode;
    this.transactionType = transactionType;

  }
  amount: number;
  currencyCode: number;
  transactionType: number;
}
