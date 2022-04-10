'use strict';
require("dotenv").config({});

const { COGNITO_USER_POOL_ID } = process.env;

const {
  CognitoIdentityProviderClient,
  ListUsersCommand
} = require("@aws-sdk/client-cognito-identity-provider");

module.exports.handler = async (event, context, callback) => {
  const client = new CognitoIdentityProviderClient();
  
  const listUsersCommand = new ListUsersCommand({
    UserPoolId: COGNITO_USER_POOL_ID,
    Filter: `email = "${event.request.userAttributes.email}"`
  });

  const result = await client.send(listUsersCommand);

  if (result.Users.length > 0) return callback(new Error("Email is already in use."), event);

  callback(null, event);
};
