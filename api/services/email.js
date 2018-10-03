
module.exports = (message) => {
  var apiKey = process.env.API_KEY;
  var domain = process.env.DOMAIN;
  var mailgun = require('mailgun-js')({apiKey, domain});

  var data = {
    from: 'Benjamin Alamu <ayanbukolaalamu@gmail.com>',
    to: 'odunogunwuyi@gmail.com',
    subject: 'Message from Doctor',
    text: message
  };
  mailgun.messages().send(data, (error, body) => {
    console.log(body);
  });
};
