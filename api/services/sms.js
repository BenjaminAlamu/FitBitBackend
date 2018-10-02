const twilio = require('twilio');

module.exports = (message) => {
  const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  return client.messages.create({
    body: message,
    to: process.env.TWILIO_TO_NUMBER,  // Text this number
    from: process.env.TWILIO_FROM_NUMBER // From a valid Twilio number
  });
};
