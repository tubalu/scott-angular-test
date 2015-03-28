'use strict';
/* exported testapp */
var testapp = angular.module('testapp', ['FinanceService']);

// inject a provider value, show you can inject into any controller
testapp.value('hello', 'hello world!');
//inject provider value hello into controller
testapp.controller('InvoiceController', ['hello', 'currencyConverter',
  function(hello, currencyConverter) {
    //this line will retrive data from yahoo
    currencyConverter.init();
    this.qty = 1;
    this.cost = 2;
    this.inCurr = 'EUR';
    this.currencies = currencyConverter.currencies;

    //    this line is only for demo inject a value into provider
    this.hello = hello;

    this.total = function total(outCurr) {
      return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);

    };
    this.pay = function pay() {
      window.alert('Thanks!');
    };
  }
]);

