var casper = require('casper').create();
var options = [
  {
    url: 'http://kurs.com.ua/',
    table_selector: '#main_table',
    row_selector: '#main_table tbody tr',
    col_dependence: {
      currency: 0,
      buy: 1,
      sell: 2
    }
  },

  {
    url: 'http://finance.i.ua/',
    table_selector: '.widget-currency_bank',
    row_selector: '.widget-currency_bank tbody tr',
    col_dependence: {
      currency: 0,
      buy: 1,
      sell: 2
    }
  }
];
var result = {};

var getTableData = function (selector, dependencies) {
  var rows = document.querySelectorAll(selector);
  var result = [];
  for (var i = 0; i < rows.length; i++) {
    var obj = {};
    for (var key in dependencies) {
      obj[key] = key=='currency'? rows[i].children[dependencies[key]].innerText.trim()
        :parseFloat(rows[i].children[dependencies[key]].innerText.trim());
    }
    result.push(obj);
  }
  return result;
};

casper.start()
  .then(function () {
    options.forEach(function (resource) {
      casper.thenOpen(resource.url);
      casper.then(function () {
        this.waitForSelector(resource.table_selector)
      });
      casper.then(function () {
        var tableData = casper.evaluate(getTableData, resource.row_selector, resource.col_dependence);
        result[resource.url] = tableData;
      });
    });
    casper.then(function () {
      //return result
      result = JSON.stringify(result);
      console.log(result);
    });
  });

casper.run();
