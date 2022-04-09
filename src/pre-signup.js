'use strict';
require("dotenv").config({})

module.exports.handler = async (event, context, callback) => {xwxw
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
