'use strict';
require("dotenv").config({})

module.exports.handler = async (event, context, callback) => {
  callback(null, event)
}