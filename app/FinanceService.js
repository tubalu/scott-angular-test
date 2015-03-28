'use strict';
angular.module('FinanceService', [])
  .factory('currencyConverter', ['$http',
    function($http) {

      var currencies = ['USD', 'EUR', 'JPY', 'AUD', 'CAD', 'CNY', 'HKD'];
      var getcurrentcies = function() {

        var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.xchange%20where%20pair%20in%20%28';
        url += currencies.map(function(el) {
          return '%22' + el + '%22';
        }).reduce(function(pv, cv) {
          return pv + ',' + cv;
        });
        url = url + '%29&env=store://datatables.org/alltableswithkeys&format=json';
        $http.get(url).
        success(function(data) {
          usdToForeignRates = data.query.results.rate.map(function(el) {
            return [el.id.substring(0, 3), parseFloat(el.Rate)];
          }).reduce(function(p, c) {
            p[c[0]] = c[1];
            return p;
          }, {});
          // this callback will be called asynchronously
          // when the response is available
        }).
        error(function() {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
      };
      var usdToForeignRates = {
        USD: 1,
        EUR: 0.74,
        CNY: 6.09
      };
      var convert = function(amount, inCurr, outCurr) {
        return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
      };

      return {
        currencies: currencies,
        convert: convert,
        init: getcurrentcies
      };
    }
  ]);
