/**
 * NotificationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const sendSms = require('../services/sms');
const sendEmail = require('../services/email');

module.exports = {
  send: async (req, res) => {
    let doctorName = req.body.doctor;
    let message = req.body.message;
    let patient = req.body.patient;

    let data = 'Dear ' + patient + '\n' + message + '\n' + doctorName;
    sendEmail(data);
    // sendSms(message).then((response) => {
    //   if (response.errorCode) {
    //     res.json({
    //       status: 'failed',
    //       statusCode: 500,
    //       message: 'could not send sms'
    //     });
    //   }
    // }).catch(error => {
    //   console.log('error', error);
    //   res.json({
    //     status: 'failed',
    //     statusCode: 200,
    //     message: error
    //   });
    // });
  }
};

