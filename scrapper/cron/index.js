/**
 * Created by kate on 27/01/17.
 */
var scrap = require('../helpers');
var cron = require('node-cron');

var scrapSchedule = (callback)=>{
  cron.schedule('* * 6 * * *', function () {
    scrap(callback);
  });
};



module.exports={
  scrapSchedule:scrapSchedule
};