'use strict';
require("dotenv").config({});

module.exports.handler = async (event, context, callback) => {
  switch(event.triggerSource) {
    case "CustomMessage_SignUp":
      event.response.smsMessage = `Hi ${event.userName}, your signup code is ${event.request.codeParameter}`;
      event.response.emailSubject = `Your registration code`;
      event.response.emailMessage = `Hi ${event.userName}, your signup code is ${event.request.codeParameter}`;
      break;
    case "CustomMessage_ForgotPassword":
      event.response.smsMessage = `Hi ${event.userName}, your password reset code is ${event.request.codeParameter}. If you did not request this code, ignore this message. Please DO NOT share this code with anyone.`;
      event.response.emailSubject = `Your password reset code`;
      event.response.emailMessage = `Hi ${event.userName}, your password reset code is ${event.request.codeParameter}. If you did not request this code, ignore this email. Please DO NOT share this code with anyone.`;
      break;
    case "CustomMessage_ResendCode":
      event.response.smsMessage = `Hi ${event.userName}, your requested code is ${event.request.codeParameter}`;
      event.response.emailSubject = `Your requested code`;
      event.response.emailMessage = `Hi ${event.userName}, your requested verification code is ${event.request.codeParameter}`;
      break;
    default:
      event.response.smsMessage = `Hi ${event.userName}, your requested code is ${event.request.codeParameter}`;
      event.response.emailSubject = `Your requested code`;
      event.response.emailMessage = `Hi ${event.userName}, your requested code is ${event.request.codeParameter}`;
  }
  callback(null, event);
}