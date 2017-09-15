/**
 * Created by kate on 30/01/17.
 */
'use strict';
const getAllData = require('./getAllData').getAllData;
const getDataByCy = require('./getDataByCy').getDataByCy;
const getDataByDate = require('./getDataByDate').getDataByDate;
const getDataByResource = require('./getDataByResource').getDataByResource;
const getSource = require('./getSource').getSource;
const getUsers = require('./getUsers').getUsers;


module.exports={
  getAllData:getAllData,
  getDataByCy:getDataByCy,
  getDataByDate:getDataByDate,
  getDataByResource:getDataByResource,
  getSource:getSource,
  getUsers:getUsers
};
