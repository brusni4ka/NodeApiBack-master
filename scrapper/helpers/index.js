'use strict';
var util = require('util');
var exec = require('child_process').exec;

module.exports = function(callback) {
   exec("casperjs scrapper/scraper.js", function(err, stdout){
   if(err) {
     throw err;
   }
     callback(stdout);
   });
};
