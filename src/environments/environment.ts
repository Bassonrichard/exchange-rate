// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  exchangeUrl:"https://exchangerate-api.azurewebsites.net/api/ExchnageValue?code=yPayL5GBuTab4AguBxdIQTclUDORIM/aM1HhJnJyBhz4FZuHIy9ByQ==",
  currencyCodeUrl: "https://exchangerate-api.azurewebsites.net/api/CurrencyCodes?code=3hmacsJMq3v07Jh2FtR5wKp70cAJjEDLpEbaxc/mj0eJ4nzEwLF0mA==",
  transactionTypeUrl: "https://exchangerate-api.azurewebsites.net/api/TransactionTypes?code=s4OVZ2r/6bflps7LHqO6pIMzBGAMzYl7BVTnM3TM47/JNushUvRUAw=="
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
