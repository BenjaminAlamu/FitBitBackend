const twilio = require('twilio');

module.exports = (message) => {
  const accountSid ='AC75942ed2b3f8cf59ffe24392887df628';
  const authToken ='0deba7dbde8f5a3ec27b48010a4321fe';
  const fromNumber = '+16012029913';
  const toNumber = '+2348103374289';
  const client = new twilio(accountSid, authToken);

  return client.messages.create({
    body: message,
    to: toNumber,  // Text this number
    from: fromNumber // From a valid Twilio number
  });
};
