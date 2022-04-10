'use strict';
require("dotenv").config({})

module.exports.handler = async (event, context, callback) => {
  switch(event.triggerSource) {
    case "CustomMessage_SignUp":
      event.response = {
        ...event.response,
        smsMessage: `Hi ${event.usernameParameter}, your signup code is ${event.codeParameter}.`,
        emailSubject: `Your registration code.`,
        emailMessage: `Hi ${event.usernameParameter}, your registration code is ${event.codeParameter}.`
      }
      break;
    case "CustomMessage_ResendCode":
      event.response = {
        ...event.response,
        smsMessage: `Hi ${event.usernameParameter}, your requested code is ${event.codeParameter}`,
        emailSubject: `Your requested code.`,
        emailMessage: `Hi ${event.usernameParameter}, your requested verification code is ${event.codeParameter}`
      }
      break;
    case "CustomMessage_ForgotPassword":
      event.response = {
        ...event.response,
        smsMessage: `Hi ${event.usernameParameter}, your password reset code is ${event.codeParameter}. 
        If you did not request this code, ignore this message. Please DO NOT share this code with anyone.`,
        emailSubject: `Your password reset code.`,
        emailMessage: `Hi ${event.usernameParameter}, your password reset code is ${event.codeParameter}. 
        If you did not request this code, ignore this email. Please DO NOT share this code with anyone.`
      }
      break;
    default:
      event.response = {
        ...event.response,
        smsMessage: `Hi, ${event.usernameParameter}, your code is ${event.codeParameter}.`,
        emailSubject: `Your code`,
        emailMessage: `Hi, ${event.usernameParameter}, your code is ${event.codeParameter}`
      }
  }
  callback(null, event)
}